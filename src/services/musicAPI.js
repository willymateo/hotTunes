import axios from "axios";
import { environment } from "../../config/environment";

const getTopTracks = async () => {
  try {
    const res = await axios.get(
      `${environment[import.meta.env.MODE].BASE_API_URL}/chart/0/tracks`,
      {
        params: {
          limit: 5,
        },
      }
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

const getTopArtists = async () => {
  try {
    const res = await axios.get(
      `${environment[import.meta.env.MODE].BASE_API_URL}/chart/0/artists`,
      {
        params: {
          limit: 5,
        },
      }
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

const getTopAlbums = async () => {
  try {
    const res = await axios.get(
      `${environment[import.meta.env.MODE].BASE_API_URL}/chart/0/albums`,
      {
        params: {
          limit: 5,
        },
      }
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

const getTopPlaylists = async () => {
  try {
    const res = await axios.get(
      `${environment[import.meta.env.MODE].BASE_API_URL}/chart/0/playlists`,
      {
        params: {
          limit: 5,
        },
      }
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

const musicAPI = {
  getTopTracks,
  getTopArtists,
  getTopAlbums,
  getTopPlaylists,
};

export { musicAPI };
