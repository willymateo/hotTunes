import { PlayingTrackSlicer, PlayingTrackReducer } from "./states/playingTrack";
import { ColorModeSlicer, ColorModeReducer } from "./states/colorMode";
import { configureStore } from "@reduxjs/toolkit";

const storeConfiguration = configureStore({
  reducer: {
    playingTrack: PlayingTrackReducer,
    colorMode: ColorModeReducer,
  },
  devTools: import.meta.env.DEV,
  middleware: [],
  enhancers: [],
  preloadedState: {
    playingTrack: PlayingTrackSlicer.initialState,
    colorMode: ColorModeSlicer.initialState,
  },
});

export { storeConfiguration };
