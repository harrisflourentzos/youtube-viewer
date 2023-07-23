import { Box, Stack } from "@mui/material";
import {
  Await,
  LoaderFunctionArgs,
  defer,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { search } from "../api/youtubeApi";
import VideoStack from "../components/video/VideoStack";
import { SearchResultResponse } from "../model/api/search-types";
import Header from "../components/Header";
import { Suspense } from "react";
import Loading from "../components/Loading";

type Props = {};

const SearchResultsPage = (props: Props) => {
  const { response } = useLoaderData() as { response: SearchResultResponse };
  const { state } = useLocation();

  return (
    <Stack>
      {state && state.title && <Header title={state.title} />}
      <Suspense fallback={<Loading />}>
        <Await resolve={response}>
          {(response: SearchResultResponse) => (
            <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
              {<VideoStack videos={response.items} direction="row" />}
            </Box>
          )}
        </Await>
      </Suspense>
    </Stack>
  );
};

export function loader({ params }: LoaderFunctionArgs) {
  const searchTerm = params["searchTerm"]!;

  return defer({
    response: search(searchTerm),
  });
}

export default SearchResultsPage;
