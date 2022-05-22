import { PlayingTrackSlicer, PlayingTrackReducer } from "./states/PlayingTrack";
import { ColorModeSlicer, ColorModeReducer } from "./states/ColorMode";
import { configureStore } from "@reduxjs/toolkit";

const storeConfiguration = configureStore({
  reducer: {
    playingTrack: PlayingTrackReducer,
    colorMode: ColorModeReducer,
  },
  devTools: true,
  middleware: [],
  enhancers: [],
  preloadedState: {
    playingTrack: PlayingTrackSlicer.initialState,
    colorMode: ColorModeSlicer.initialState,
  },
});

export { storeConfiguration };
