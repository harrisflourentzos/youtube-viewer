import { PaletteMode } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark" as PaletteMode,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<PaletteMode>) => {
      state.theme = action.payload;
    },
  },
});

export const { updateTheme } = themeSlice.actions;
export default themeSlice;
