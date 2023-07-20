import { Box, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const theme = useTheme();
  const error = useRouteError() as AxiosError;

  const title = "Something went wrong!";
  let message =
    "The content you have requested does not exist. Please navigate back.";

  if (error) {
    if (error.request) {
      message = `Could not connect to server due to: ${error.message}`;
    }

    if (error.response) {
      message = `Server responded with: ${error.response.status}`;
    }
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
