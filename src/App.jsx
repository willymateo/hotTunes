import { useState, useEffect, Fragment } from "react";
import { musicAPI } from "./services/musicAPI";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

function App() {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);
  const [topPlaylists, setTopPlaylists] = useState([]);

  useEffect(() => {
    musicAPI.getTopTracks().then(setTopTracks);
  }, []);

  useEffect(() => {
    musicAPI.getTopArtists().then(setTopArtists);
  }, []);

  useEffect(() => {
    musicAPI.getTopAlbums().then(setTopAlbums);
  }, []);

  useEffect(() => {
    musicAPI.getTopPlaylists().then(setTopPlaylists);
  }, []);

  return (
    <Fragment>
      <Header />
      <Navigation />
      <ul>
        {topTracks.map(track => (
          <li key={track.id}>{track.title_short}</li>
        ))}
      </ul>
      <Footer />
    </Fragment>
  );
}

export { App };
