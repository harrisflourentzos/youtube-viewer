import React, { useEffect } from "react";
import { Box, Stack } from "@mui/material";
import Header from "../components/Header";
import useHttp from "../hooks/useHttp";
import { Search } from "../api/youtubeApi";
import VideoStack from "../components/video/VideoStack";
import Loading from "../components/Loading";

type Props = { feed: string; title: string; subtitle?: string };

const FeedPage = ({ feed, title, subtitle }: Props) => {
  const { data, sendRequest } = useHttp(Search);

  useEffect(() => {
    async function GetVideos() {
      await sendRequest(feed);
    }

    GetVideos();
  }, [sendRequest, feed]);

  return (
    <Stack>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Box pb={4}>
          <Header title={title} subtitle={subtitle} />
        </Box>
        {!data && <Loading />}
        {data && <VideoStack videos={data.items} direction="row" />}
      </Box>
    </Stack>
  );
};

export default FeedPage;
