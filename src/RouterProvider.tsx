import React from "react";
import {
  Navigate,
  RouterProvider as ReactRouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import ErrorPage from "./pages/Error";
import VideoDetailsPage, {
  loader as videoDetailsLoader,
} from "./pages/VideoDetails";
import SearchResultsPage, {
  loader as searchResultLoader,
} from "./pages/SearchResults";

const RouterProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: (
            <Navigate to="search/home" state={{ title: "home" }} replace />
          ),
        },
        {
          path: "video/:id",
          element: <VideoDetailsPage />,
          loader: videoDetailsLoader,
        },
        {
          path: "search/:searchTerm",
          element: <SearchResultsPage />,
          loader: searchResultLoader,
        },
      ],
    },
  ]);
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
