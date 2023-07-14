import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import React, { useMemo } from "react";
import { themeSettings } from "./theme";
import { useAppSelector } from "../hooks/redux/reduxHooks";

type Props = { children: JSX.Element };

const ThemeProvider = ({ children }: Props) => {
  const themeState = useAppSelector((state) => state.theme.theme);
  const theme = useMemo(
    () => createTheme(themeSettings(themeState)),
    [themeState]
  );
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
