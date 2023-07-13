import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { Box, Stack, Typography } from "@mui/material";
import VideoStack from "../components/VideoStack";
import { Search } from "../api/youtube-api";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material";

type Props = {};

const SearchResultsPage = (props: Props) => {
  const { data, sendRequest } = useHttp(Search);
  const { searchTerm } = useParams();
  const theme = useTheme();

  useEffect(() => {
    async function GetVideos(searchTerm: string) {
      await sendRequest(searchTerm);
    }

    searchTerm && GetVideos(searchTerm);
  }, [sendRequest, searchTerm]);

  return (
    <Stack>
      <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {!data && (
          <Typography variant="h4" color={theme.palette.neutral[100]}>
            Loading...
          </Typography>
        )}
        {data && <VideoStack videos={data.items} direction="row" />}
      </Box>
    </Stack>
  );
};

export default SearchResultsPage;
