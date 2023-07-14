import React from "react";
import {
  Navigate,
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import ErrorPage from "./pages/Error";
import FeedPage from "./pages/Feed";
import VideoDetailsPage from "./pages/VideoDetails";
import SearchResultsPage from "./pages/SearchResults";

const RouterProvider = () => {
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
              feed="news technology"
            />
          ),
        },
        { path: "video/:id", element: <VideoDetailsPage /> },
        { path: "search/:searchTerm", element: <SearchResultsPage /> },
        {
          path: "travel",
          element: <FeedPage title="Travel" feed="travel" />,
        },
        {
          path: "music",
          element: <FeedPage title="Music" feed="music" />,
        },
        {
          path: "anime",
          element: <FeedPage title="Anime" feed="anime" />,
        },
        {
          path: "movies",
          element: <FeedPage title="Movies" feed="movies" />,
        },
      ],
    },
  ]);
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
