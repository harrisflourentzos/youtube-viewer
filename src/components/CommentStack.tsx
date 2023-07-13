import React from "react";
import { CommentThread } from "../model/api/comment-types";
import { Stack, Typography, useTheme } from "@mui/material";
import CommentCard from "./CommentCard";

type Props = { commentThreads: CommentThread[] };

const CommentStack = ({ commentThreads }: Props) => {
  const theme = useTheme();

  return (
    <Stack direction={"column"}>
      <Typography variant="h4" color={theme.palette.secondary[100]}>
        {`${commentThreads.length} Comments`}
      </Typography>
      {commentThreads.map((ct) => (
        <CommentCard key={ct.id} commentThread={ct} />
      ))}
    </Stack>
  );
};

export default CommentStack;
