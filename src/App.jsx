import { Navigation } from "./components/Navigation";
import { Playlists } from "./routes/Playlists";
import { Grid, GridItem } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Artists } from "./routes/Artists";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Tracks } from "./routes/Tracks";
import { Albums } from "./routes/Albums";
import { Genres } from "./routes/Genres";
import { Radio } from "./routes/Radio";
import { Home } from "./routes/Home";

function App() {
  const menuEntries = ["Radio", "Tracks", "Playlists", "Albums", "Artists", "Genres"];

  return (
    <>
      <Grid templateRows="10% 90%" templateColumns="20% 80%" minHeight="100vh" rowGap="0.5rem">
        <GridItem rowStart="1" rowEnd="3" colStart="1" colEnd="2">
          <Navigation menuEntries={menuEntries} />
        </GridItem>

        <GridItem rowStart="1" rowEnd="2" colStart="2" colEnd="3">
          <Header />
        </GridItem>

        <GridItem rowStart="2" rowEnd="3" colStart="2" colEnd="3">
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="radio" element={<Radio />} />
              <Route path="tracks" element={<Tracks />} />
              <Route path="playlists" element={<Playlists />} />
              <Route path="albums" element={<Albums />} />
              <Route path="artists" element={<Artists />} />
              <Route path="genres" element={<Genres />} />
            </Routes>
          </section>
          <Footer menuEntries={menuEntries} />
        </GridItem>
      </Grid>
    </>
  );
}

export { App };
