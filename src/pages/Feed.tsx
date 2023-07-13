import React, { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { Search } from "../api/youtube-api";
import { Box, Stack } from "@mui/material";
import VideoStack from "../components/VideoStack";
import Header from "../components/Header";

type Props = { searchTerm: string; title: string; subtitle?: string };

const FeedPage = ({ searchTerm, title, subtitle }: Props) => {
  const { data, sendRequest } = useHttp(Search);

  useEffect(() => {
    async function GetVideos(searchTerm: string) {
      await sendRequest(searchTerm);
    }

    GetVideos(searchTerm);
  }, [sendRequest, searchTerm]);

  return (
    <Stack>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Box pb={4}>
          <Header title={title} subtitle={subtitle} />
        </Box>

        {data && <VideoStack videos={data.items} direction="row" />}
      </Box>
    </Stack>
  );
};

export default FeedPage;
