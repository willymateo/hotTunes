import { musicAPI } from "../services/musicAPI";
import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Home() {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);
  const [topPlaylists, setTopPlaylists] = useState([]);

  useEffect(() => {
    musicAPI.getTopTracks().then(setTopTracks);
    musicAPI.getTopArtists().then(setTopArtists);
    musicAPI.getTopAlbums().then(setTopAlbums);
    musicAPI.getTopPlaylists().then(setTopPlaylists);
  }, []);

  return (
    <Box>
      <Text>Home route</Text>
      <ul>
        {topTracks.map(track => (
          <li key={track.id}>{track.title_short}</li>
        ))}
      </ul>
    </Box>
  );
}

export { Home };
