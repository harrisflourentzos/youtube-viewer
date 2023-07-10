import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme/theme";
import { useAppSelector } from "./hooks/redux/redux-hooks";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Layout from "./pages/layout/Layout";
import ErrorPage from "./pages/Error";
import VideoPage from "./pages/Video";

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
        { path: "home", element: <HomePage /> },
        { path: "video/:id", element: <VideoPage /> },
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
