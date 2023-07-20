import React from "react";
import { Video } from "../../model/api/video-types";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

type Props = { videoDetails: Video };

const VideoPlayer = ({ videoDetails }: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        top: "86px",
        backgroundColor: theme.palette.background.alt,
        mb: 5,
      }}
    >
      <ReactPlayer
        width="100%"
        url={`https://www.youtube.com/watch?v=${videoDetails.id}`}
        className="react-player"
        controls
      />
      <Typography
        color={theme.palette.secondary[100]}
        variant="h4"
        fontWeight="bold"
        p={2}
      >
        {videoDetails.snippet.title}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ color: theme.palette.secondary[100] }}
        py={1}
        px={2}
      >
        <Link to={`/channel/${videoDetails.snippet.channelId}`}>
          <Typography variant="h4" color={theme.palette.secondary[100]}>
            {videoDetails.snippet.channelTitle}
            <CheckCircle
              sx={{
                fontSize: "12px",
                color: theme.palette.secondary[100],
                ml: "5px",
              }}
            />
          </Typography>
        </Link>
        <Stack direction="row" gap="20px" alignItems="center">
          <Typography
            variant="h5"
            color={theme.palette.secondary[100]}
            sx={{ opacity: 0.7 }}
          >
            {videoDetails.statistics.viewCount} views
          </Typography>
          <Typography
            variant="h5"
            color={theme.palette.secondary[100]}
            sx={{ opacity: 0.7 }}
          >
            {videoDetails.statistics.likeCount} likes
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default VideoPlayer;
