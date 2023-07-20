import { Box, Stack } from "@mui/material";
import {
  Await,
  LoaderFunctionArgs,
  defer,
  useLoaderData,
} from "react-router-dom";
import VideoStack from "../components/video/VideoStack";
import {
  getVideoDetails,
  getRelatedVideosById,
  getVideoCommentThreadsById,
} from "../api/youtubeApi";
import CommentStack from "../components/comments/CommentStack";
import { Video } from "../model/api/video-types";
import { SearchResult } from "../model/api/search-types";
import { CommentThread } from "../model/api/comment-types";
import VideoPlayer from "../components/video/VideoPlayer";
import { Suspense } from "react";
import Loading from "../components/Loading";

const VideoDetailsPage = () => {
  const { videoDetails, relatedVideos, comments } = useLoaderData() as {
    videoDetails: Video;
    relatedVideos: SearchResult[];
    comments: CommentThread[];
  };

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Suspense fallback={<Loading />}>
            <Await resolve={videoDetails}>
              {(videoDetails: Video) => (
                <VideoPlayer videoDetails={videoDetails} />
              )}
            </Await>
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Await resolve={comments}>
              {(comments: CommentThread[]) => (
                <CommentStack commentThreads={comments} />
              )}
            </Await>
          </Suspense>
        </Box>
        <Suspense fallback={<Loading />}>
          <Await resolve={relatedVideos}>
            {(relatedVideos: SearchResult[]) => (
              <Box px={2} justifyContent="center" alignItems="center">
                <VideoStack videos={relatedVideos} direction="column" />
              </Box>
            )}
          </Await>
        </Suspense>
      </Stack>
    </Box>
  );
};

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params["id"]!;

  return defer({
    videoDetails: await getVideoDetails(id),
    relatedVideos: getRelatedVideosById(id),
    comments: getVideoCommentThreadsById(id),
  });
}

export default VideoDetailsPage;
