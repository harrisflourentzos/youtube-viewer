import { CommentThread } from "../model/api/comment-types";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ThumbUp } from "@mui/icons-material";
import FlexBetween from "./layout/FlexBetween";

type Props = { commentThread: CommentThread };

const CommentCard = ({ commentThread }: Props) => {
  const theme = useTheme();

  const {
    authorProfileImageUrl,
    authorDisplayName,
    textDisplay,
    likeCount,
    updatedAt,
  } = commentThread.snippet.topLevelComment.snippet;

  return (
    <Card sx={{ backgroundColor: theme.palette.background.alt, m: 1 }}>
      <FlexBetween>
        <CardHeader
          avatar={<Avatar src={authorProfileImageUrl} />}
          title={authorDisplayName}
          subheader={updatedAt}
        />
        <Stack mr={2} direction={"row"}>
          <Typography>
            <ThumbUp />
          </Typography>
          <Typography ml={1} color={theme.palette.neutral[100]}>
            {likeCount}
          </Typography>
        </Stack>
      </FlexBetween>
      <CardContent>
        <Typography color={theme.palette.secondary[50]}>
          {textDisplay}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
