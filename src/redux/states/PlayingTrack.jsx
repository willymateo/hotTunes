import { createSlice } from "@reduxjs/toolkit";

const playingTrackEmptyState = {
  url: "",
  trackName: "",
  artistName: "",
};

const PlayingTrackSlicer = createSlice({
  name: "playingTrack",
  initialState: playingTrackEmptyState,
  reducers: {
    createPlayingTrack: (state, action) => {
      return action.payload;
    },
    setPlayingTrack: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetPlayingTrack: () => {
      return playingTrackEmptyState;
    },
  },
});

const { createPlayingTrack, setPlayingTrack, resetPlayingTrack } = PlayingTrackSlicer.actions;
const PlayingTrackReducer = PlayingTrackSlicer.reducer;

export {
  PlayingTrackSlicer,
  PlayingTrackReducer,
  playingTrackEmptyState,
  createPlayingTrack,
  setPlayingTrack,
  resetPlayingTrack,
};
