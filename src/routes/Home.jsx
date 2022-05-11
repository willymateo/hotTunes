import { TopGeneralItem } from "../components/TopGeneralItem";
import { TopArtistItem } from "../components/TopArtistItem";
import { environment } from "../../config/environment";
import { Heading, Flex, Box } from "@chakra-ui/react";
import { musicAPI } from "../services/musicAPI";
import { useState, useEffect } from "react";

function Home() {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);
  const [topPlaylists, setTopPlaylists] = useState([]);
  const albumImgSize = "300x300";
  const artistImgSize = "356x237";
  const playlistImgSize = "230x153";

  useEffect(() => {
    musicAPI.getTopTracks().then(setTopTracks);
    musicAPI.getTopArtists().then(setTopArtists);
    musicAPI.getTopAlbums().then(setTopAlbums);
    musicAPI.getTopPlaylists().then(setTopPlaylists);
  }, []);

  return (
    <>
      <Flex flexFlow="column wrap" rowGap="2.5rem">
        <Box>
          <Heading as="h2">Top Tracks</Heading>
          <Flex flexFlow="row wrap" justifyContent="center" gap="2%">
            {topTracks.map((track, index) => {
              return (
                <TopGeneralItem
                  key={track.id}
                  topNumber={index + 1}
                  title={track.name}
                  subTitle={track.artistName}
                  imageUrl={`${environment[import.meta.env.MODE].BASE_API_IMG_URL}/albums/${
                    track.albumId
                  }/images/${albumImgSize}.jpg`}
                />
              );
            })}
          </Flex>
        </Box>

        <Box>
          <Heading as="h2">Top Artists</Heading>
          <Flex flexFlow="row wrap" justifyContent="center" gap="2%">
            {topArtists.map((artist, index) => {
              return (
                <TopArtistItem
                  key={artist.id}
                  artistTopNumber={index + 1}
                  artistName={artist.name}
                  imageUrl={`${environment[import.meta.env.MODE].BASE_API_IMG_URL}/artists/${
                    artist.id
                  }/images/${artistImgSize}.jpg`}
                />
              );
            })}
          </Flex>
        </Box>

        <Box>
          <Heading as="h2">Top Albums</Heading>
          <Flex flexFlow="row wrap" justifyContent="center" gap="2%">
            {topAlbums.map((album, index) => {
              return (
                <TopGeneralItem
                  key={album.id}
                  topNumber={index + 1}
                  title={album.name}
                  subTitle={album.artistName}
                  imageUrl={`${environment[import.meta.env.MODE].BASE_API_IMG_URL}/albums/${
                    album.id
                  }/images/${albumImgSize}.jpg`}
                />
              );
            })}
          </Flex>
        </Box>

        <Box>
          <Heading as="h2">Top Playlists</Heading>
          <Flex flexFlow="row wrap" justifyContent="center" gap="2%">
            {topPlaylists.map((playlist, index) => {
              return (
                <TopGeneralItem
                  key={playlist.id}
                  topNumber={index + 1}
                  title={playlist.name}
                  subTitle={playlist.description}
                  imageUrl={`${environment[import.meta.env.MODE].BASE_API_IMG_URL}/playlists/${
                    playlist.id
                  }/artists/images/${playlistImgSize}.jpg?montage=2x2`}
                />
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export { Home };
