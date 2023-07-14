import { Typography, useTheme } from "@mui/material";
import React from "react";

const Loading = () => {
  const theme = useTheme();
  return (
    <Typography variant="h4" color={theme.palette.neutral[100]}>
      Loading...
    </Typography>
  );
};

export default Loading;
