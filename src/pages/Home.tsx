import React, { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { Search } from "../api/youtube-api";
import { Box, Stack } from "@mui/material";
import VideoStack from "../components/layout/VideoStack";
import Header from "../components/Header";

type Props = {};

const HomePage = (props: Props) => {
  const { data, sendRequest } = useHttp(Search);

  useEffect(() => {
    async function GetVideos(searchTerm: string) {
      await sendRequest(searchTerm);
    }

    GetVideos("anime");
  }, [sendRequest]);

  return (
    <Stack>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Box pb={4}>
          <Header title="Home" subtitle="Videos tailord to your likes" />
        </Box>

        {data && <VideoStack videos={data.items} direction="row" />}
      </Box>
    </Stack>
  );
};

export default HomePage;
