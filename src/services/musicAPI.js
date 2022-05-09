import axios from "axios";
import { environment } from "../../config/environment";

axios.defaults.baseURL = environment[import.meta.env.MODE].BASE_API_URL;
axios.defaults.headers.common["apikey"] = import.meta.env.VITE_APP_API_KEY;

const params = {
  limit: 5,
  range: "week",
};

const getTopTracks = async () => {
  try {
    const res = await axios.get("/tracks/top", {
      params,
    });
    return res.data.tracks;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getTopArtists = async () => {
  try {
    const res = await axios.get("/artists/top", {
      params,
    });
    return res.data.artists;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getTopAlbums = async () => {
  try {
    const res = await axios.get("/albums/top", {
      params,
    });
    return res.data.albums;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getTopPlaylists = async () => {
  try {
    const res = await axios.get("/playlists/top", {
      params,
    });
    return res.data.playlists;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getAlbumImages = async albumId => {
  try {
    const res = await axios.get(`/albums/${albumId}/images`);
    return res.data.images;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getArtistImages = async artistId => {
  try {
    const res = await axios.get(`/artists/${artistId}/images`);
    return res.data.images;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const musicAPI = {
  getTopTracks,
  getTopArtists,
  getTopAlbums,
  getTopPlaylists,
  getAlbumImages,
  getArtistImages,
};

export { musicAPI };
