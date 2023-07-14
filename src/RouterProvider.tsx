import React from "react";
import {
  Navigate,
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import ErrorPage from "./pages/Error";
import VideoDetailsPage from "./pages/VideoDetails";
import FeedPage from "./pages/Feed";

const RouterProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Navigate to="feed/home" replace />,
        },
        {
          path: "feed/home",
          element: <FeedPage header="Home" />,
        },
        { path: "video/:id", element: <VideoDetailsPage /> },
        { path: "feed/:feedTerm", element: <FeedPage /> },
        {
          path: "feed/travel",
          element: <FeedPage header="Travel" />,
        },
        {
          path: "feed/music",
          element: <FeedPage header="Music" />,
        },
        {
          path: "feed/anime",
          element: <FeedPage header="Anime" />,
        },
        {
          path: "feed/movies",
          element: <FeedPage header="Music" />,
        },
      ],
    },
  ]);
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
