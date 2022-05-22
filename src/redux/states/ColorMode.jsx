import { createSlice } from "@reduxjs/toolkit";

const colorModoEmptyState = {
  theme: "light",
  isDark: false,
};

const ColorModeSlicer = createSlice({
  name: "colorMode",
  initialState: colorModoEmptyState,
  reducers: {
    createColorMode: (state, action) => {
      return action.payload;
    },
    setStoreColorMode: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetColorMode: () => {
      return colorModoEmptyState;
    },
  },
});

const { createColorMode, setStoreColorMode, resetColorMode } = ColorModeSlicer.actions;

const ColorModeReducer = ColorModeSlicer.reducer;

export {
  ColorModeSlicer,
  ColorModeReducer,
  colorModoEmptyState,
  createColorMode,
  setStoreColorMode,
  resetColorMode,
};
