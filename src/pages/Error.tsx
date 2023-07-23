import { Box, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import axios from "axios";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const theme = useTheme();
  const error = useRouteError();

  const title = "Something went wrong!";
  let message =
    "The content you have requested does not exist. Please navigate back.";

  if (axios.isAxiosError(error)) {
    if (error.response) {
      message = `Server responded with: ${error.response.status}`;
    }

    if (error.request) {
      message = `Could not connect to server due to: ${error.message}`;
    }
  }

  if (error instanceof Error) {
    message = error.message;
  }

  return (
    <Box
      flex={1}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Typography
        variant="h2"
        fontWeight={"bold"}
        color={theme.palette.secondary[100]}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[200]}>
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorPage;
