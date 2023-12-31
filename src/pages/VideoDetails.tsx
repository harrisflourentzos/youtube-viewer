import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import VideoStack from "../components/video/VideoStack";
import ReactPlayer from "react-player";
import {
  GetVideoDetails,
  GetRelatedVideosById,
  GetVideoCommentThreadsById,
} from "../api/youtubeApi";
import useHttp from "../hooks/useHttp";
import { useEffect } from "react";
import CommentStack from "../components/comments/CommentStack";
import Loading from "../components/Loading";

const VideoDetailsPage = () => {
  const { id } = useParams();
  const { data: video, sendRequest: getVideo } = useHttp(GetVideoDetails);
  const { data: relatedVideos, sendRequest: getRelatedVideos } =
    useHttp(GetRelatedVideosById);
  const { data: commentThreads, sendRequest: getCommentThreads } = useHttp(
    GetVideoCommentThreadsById
  );
  const theme = useTheme();

  useEffect(() => {
    async function fetchData() {
      await getVideo(id);
      await getRelatedVideos(id);
      await getCommentThreads(id);
    }

    fetchData();
  }, [getVideo, getRelatedVideos, getCommentThreads, id]);

  return (
    <Box minHeight="95vh">
      {!(video && relatedVideos && commentThreads) && <Loading />}
      {video && relatedVideos && commentThreads && (
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
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
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography
                color={theme.palette.secondary[100]}
                variant="h4"
                fontWeight="bold"
                p={2}
              >
                {video.snippet.title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: theme.palette.secondary[100] }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${video.snippet.channelId}`}>
                  <Typography variant="h4" color={theme.palette.secondary[100]}>
                    {video.snippet.channelTitle}
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
                    {video.statistics.viewCount} views
                  </Typography>
                  <Typography
                    variant="h5"
                    color={theme.palette.secondary[100]}
                    sx={{ opacity: 0.7 }}
                  >
                    {video.statistics.likeCount} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <CommentStack commentThreads={commentThreads} />
          </Box>
          <Box px={2} justifyContent="center" alignItems="center">
            <VideoStack videos={relatedVideos} direction="column" />
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default VideoDetailsPage;
