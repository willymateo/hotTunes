import { environment } from "../../config/environment";
import axios from "axios";

axios.defaults.baseURL = environment[import.meta.env.MODE].BASE_API_URL;
axios.defaults.headers.common["apikey"] = import.meta.env.VITE_API_KEY;

const params = {
  limit: 5,
  range: "week",
};

// ====================================================================================================================
// Top
const getTopTracks = async () => {
  try {
    const { data } = await axios.get("/tracks/top", {
      params,
    });
    return data.tracks;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getTopArtists = async () => {
  try {
    const { data } = await axios.get("/artists/top", {
      params: { limit: 5 },
    });
    console.log(data);
    return data.artists;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getTopAlbums = async () => {
  try {
    const { data } = await axios.get("/albums/top", {
      params,
    });
    return data.albums;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getTopPlaylists = async () => {
  try {
    const { data } = await axios.get("/playlists/top", {
      params,
    });
    return data.playlists;
  } catch (err) {
    console.log(err);
    return [];
  }
};
// ====================================================================================================================

// ====================================================================================================================
// Genres
const getGenres = async () => {
  try {
    const { data } = await axios.get("/genres");
    return data.genres;
  } catch (err) {
    console.log(err);
    return [];
  }
};
// ====================================================================================================================

const musicAPI = {
  getTopTracks,
  getTopArtists,
  getTopAlbums,
  getTopPlaylists,
  getGenres,
};

export { musicAPI };
