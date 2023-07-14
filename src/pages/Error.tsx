import { Box, useTheme } from "@mui/material";
import { Typography } from "@mui/material";

const ErrorPage = () => {
  const theme = useTheme();

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
        Error
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[200]}>
        The content you have requested does not exist. Please navigate back.
      </Typography>
    </Box>
  );
};

export default ErrorPage;
