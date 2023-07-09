import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme/theme";
import { useAppSelector } from "./hooks/redux/redux-hooks";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Layout from "./screens/layout/Layout";

function App() {
  const themeState = useAppSelector((state) => state.theme.theme);
  const theme = useMemo(
    () => createTheme(themeSettings(themeState)),
    [themeState]
  );

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomeScreen />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
