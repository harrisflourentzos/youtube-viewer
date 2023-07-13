import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import { SearchResult } from "../model/api/search-types";

type Props = { videos: SearchResult[]; direction: "row" | "column" };

const VideoStack = ({ videos, direction = "row" }: Props) => {
  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          <VideoCard video={item} />
        </Box>
      ))}
    </Stack>
  );
};

export default VideoStack;
