import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";

type Props = { videos: any; direction: "row" | "column" };

const VideoStack = ({ videos, direction = "row" }: Props) => {
  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item: any, idx: any) => (
        <Box key={idx}>
          <VideoCard video={item} />
        </Box>
      ))}
    </Stack>
  );
};

export default VideoStack;
