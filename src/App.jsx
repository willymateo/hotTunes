import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Grid, GridItem } from "@chakra-ui/react";
import { musicAPI } from "./services/musicAPI";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Radio } from "./components/Radio";
import { Tracks } from "./components/Tracks";
import { Playlists } from "./components/Playlists";
import { Albums } from "./components/Albums";
import { Artists } from "./components/Artists";
import { Home } from "./components/Home";
import { Genres } from "./components/Genres";
import { useState, useEffect } from "react";

function App() {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);
  const [topPlaylists, setTopPlaylists] = useState([]);

  const menuEntries = [
    "Radio",
    "Tracks",
    "Playlists",
    "Albums",
    "Artists",
    "Genres",
  ];

  useEffect(() => {
    musicAPI.getTopTracks().then(setTopTracks);
    musicAPI.getTopArtists().then(setTopArtists);
    musicAPI.getTopAlbums().then(setTopAlbums);
    musicAPI.getTopPlaylists().then(setTopPlaylists);
  }, []);

  return (
    <>
      <Grid
        templateRows="10% repeat(5, 1fr)"
        templateColumns="repeat(5, 1fr)"
        style={{ minHeight: "100vh" }}>
        <GridItem rowSpan="6" colSpan="1">
          <Navigation menuEntries={menuEntries} />
        </GridItem>

        <GridItem rowSpan="1" colSpan="4">
          <Header />
        </GridItem>

        <GridItem rowSpan="5" colSpan="4">
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/radio" element={<Radio />} />
              <Route path="/tracks" element={<Tracks tracks={topTracks} />} />
              <Route
                path="/playlists"
                element={<Playlists playlists={topPlaylists} />}
              />
              <Route path="/albums" element={<Albums albums={topAlbums} />} />
              <Route
                path="/artists"
                element={<Artists artists={topArtists} />}
              />
              <Route path="/genres" element={<Genres />} />
            </Routes>

            <ul>
              {topTracks.map(track => (
                <li key={track.id}>{track.title_short}</li>
              ))}
            </ul>
          </section>
          <Footer menuEntries={menuEntries} />
        </GridItem>
      </Grid>
    </>
  );
}

export { App };
