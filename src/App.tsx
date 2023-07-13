import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme/theme";
import { useAppSelector } from "./hooks/redux/redux-hooks";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import FeedPage from "./pages/Feed";
import Layout from "./pages/layout/Layout";
import ErrorPage from "./pages/Error";
import VideoDetailsPage from "./pages/VideoDetails";
import SearchResultsPage from "./pages/SearchResults";

function App() {
  const themeState = useAppSelector((state) => state.theme.theme);
  const theme = useMemo(
    () => createTheme(themeSettings(themeState)),
    [themeState]
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Navigate to="home" replace />,
        },
        {
          path: "home",
          element: (
            <FeedPage
              title="Home"
              subtitle="Welcome to your personalized feed"
              searchTerm="trending"
            />
          ),
        },
        { path: "video/:id", element: <VideoDetailsPage /> },
        { path: "search/:searchTerm", element: <SearchResultsPage /> },
        {
          path: "travel",
          element: <FeedPage title="Travel" searchTerm="travel" />,
        },
        {
          path: "music",
          element: <FeedPage title="Music" searchTerm="music" />,
        },
        {
          path: "anime",
          element: <FeedPage title="Anime" searchTerm="anime" />,
        },
        {
          path: "movies",
          element: <FeedPage title="Movies" searchTerm="movies" />,
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
