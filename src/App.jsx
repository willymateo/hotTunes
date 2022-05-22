import { Box, Grid, GridItem, Hide } from "@chakra-ui/react";
import { SoundPlayer } from "./components/SoundPlayer";
import { Navigation } from "./components/Navigation";
import { storeConfiguration } from "./redux/store";
import { Routes, Route } from "react-router-dom";
import { Playlists } from "./routes/Playlists";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Artists } from "./routes/Artists";
import { Tracks } from "./routes/Tracks";
import { Albums } from "./routes/Albums";
import { Genres } from "./routes/Genres";
import { Provider } from "react-redux";
import { Radio } from "./routes/Radio";
import { Home } from "./routes/Home";

function App() {
  return (
    <Provider store={storeConfiguration}>
      <Header />

      <Grid templateRows="1fr" templateColumns="20% 80%">
        <Hide below="md">
          <GridItem rowStart="1" rowEnd="2" colStart="1" colEnd="2">
            <Navigation />
          </GridItem>
        </Hide>
        <GridItem rowStart="1" rowEnd="2" colStart={{ base: "1", md: "2" }} colEnd="3">
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
        </GridItem>
      </Grid>

      <Box position="fixed" bottom="0" width="100%" paddingRight={4}>
        <SoundPlayer />
      </Box>

      <Footer />
    </Provider>
  );
}

export { App };
