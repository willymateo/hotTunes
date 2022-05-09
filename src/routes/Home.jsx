import { TopArtistItem } from "../components/TopArtistItem";
import { TopGeneralItem } from "../components/TopGeneralItem";
import { Heading, Flex } from "@chakra-ui/react";
import { musicAPI } from "../services/musicAPI";
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
    <>
      <Heading as="h2">Top Tracks</Heading>
      <Flex flexFlow="row wrap" justifyContent="center" gap="2%">
        {topTracks.map((track, index) => {
          return (
            <TopGeneralItem
              key={track.id}
              albumId={track.albumId}
              topNumber={index + 1}
              title={track.name}
              artistName={track.artistName}
            />
          );
        })}
      </Flex>

      <Heading as="h2">Top Artists</Heading>
      <Flex flexFlow="row wrap" justifyContent="center" gap="2%">
        {topArtists.map((artist, index) => {
          return (
            <TopArtistItem
              key={artist.id}
              artistId={artist.id}
              artistTopNumber={index + 1}
              artistName={artist.name}
            />
          );
        })}
      </Flex>
      <Heading as="h2">Top Albums</Heading>
      <Flex flexFlow="row wrap" justifyContent="center" gap="2%">
        {topAlbums.map((album, index) => {
          return (
            <TopGeneralItem
              key={album.id}
              albumId={album.id}
              topNumber={index + 1}
              title={album.name}
              artistName={album.artistName}
            />
          );
        })}
      </Flex>

      <Heading as="h2">Top Playlists</Heading>
    </>
  );
}

export { Home };
