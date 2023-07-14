import { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material";
import useHttp from "../hooks/useHttp";
import { Search } from "../api/youtubeApi";
import VideoStack from "../components/video/VideoStack";
import Loading from "../components/Loading";

type Props = {};

const SearchResultsPage = (props: Props) => {
  const { data, sendRequest } = useHttp(Search);
  const { searchTerm } = useParams();

  useEffect(() => {
    async function GetVideos() {
      await sendRequest(searchTerm);
    }

    searchTerm && GetVideos();
  }, [sendRequest, searchTerm]);

  return (
    <Stack>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {!data && <Loading />}
        {data && <VideoStack videos={data.items} direction="row" />}
      </Box>
    </Stack>
  );
};

export default SearchResultsPage;
