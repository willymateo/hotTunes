import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Navigation } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { Playlists } from "./routes/Playlists";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Artists } from "./routes/Artists";
import { Tracks } from "./routes/Tracks";
import { Albums } from "./routes/Albums";
import { Genres } from "./routes/Genres";
import { Radio } from "./routes/Radio";
import { Home } from "./routes/Home";

function App() {
  const menuEntries = ["Radio", "Tracks", "Playlists", "Albums", "Artists", "Genres"];

  return (
    <>
      <Grid templateRows="45px auto" templateColumns="20% 80%" minHeight="100vh">
        <GridItem rowStart="1" rowEnd="3" colStart="1" colEnd="2">
          <Navigation menuEntries={menuEntries} />
        </GridItem>

        <GridItem rowStart="1" rowEnd="2" colStart="2" colEnd="3">
          <Header />
        </GridItem>

        <GridItem rowStart="2" rowEnd="3" colStart="2" colEnd="3">
          <Flex
            flexFlow="column wrap"
            justifyContent="space-between"
            rowGap="50px"
            minHeight="100%">
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
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}

export { App };
