import { PlayingTrackSlicer, PlayingTrackReducer } from "./states/playingTrack";
import { ColorModeSlicer, ColorModeReducer } from "./states/colorMode";
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
