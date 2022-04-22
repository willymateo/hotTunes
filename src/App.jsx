import { useState, useEffect, Fragment } from "react";
import { musicAPI } from "./services/musicAPI";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Grid, GridItem } from "@chakra-ui/react";

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
    <Fragment>
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
            <ul>
              {topTracks.map(track => (
                <li key={track.id}>{track.title_short}</li>
              ))}
            </ul>
          </section>
          <Footer menuEntries={menuEntries} />
        </GridItem>
      </Grid>
    </Fragment>
  );
}

export { App };
