import { Heading, Flex, Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { ArtistVisualizer } from "../components/ArtistVisualizer";
import { SongVisualizer } from "../components/SongVisualizer";
import { environment } from "../../config/environment";
import { musicAPI } from "../services/musicAPI";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const backgroundImages = [
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='19.139999999999997'%3E%3Cpath transform='translate(-105 18.4) rotate(10 1409 581) scale(1.0243200000000001)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='6.38' transform='translate(-81 66) rotate(14.8 800 450) scale(1.02286)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(43.4 -153) rotate(143 401 736) scale(1.02286)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='5.8'%3E%3Cpath transform='translate(396 -16.4) rotate(4.1 150 345) scale(0.95344)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='12.76' transform='translate(-209 -170) rotate(165.6 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-340 108) rotate(27.6 1400 132) scale(0.95)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='76' height='76' viewBox='0 0 200 200'%3E%3Cg %3E%3Cpolygon fill='%234c8e43' points='100 57.1 64 93.1 71.5 100.6 100 72.1'/%3E%3Cpolygon fill='%236aac5f' points='100 57.1 100 72.1 128.6 100.6 136.1 93.1'/%3E%3Cpolygon fill='%234c8e43' points='100 163.2 100 178.2 170.7 107.5 170.8 92.4'/%3E%3Cpolygon fill='%236aac5f' points='100 163.2 29.2 92.5 29.2 107.5 100 178.2'/%3E%3Cpath fill='%2389CC7C' d='M100 21.8L29.2 92.5l70.7 70.7l70.7-70.7L100 21.8z M100 127.9L64.6 92.5L100 57.1l35.4 35.4L100 127.9z'/%3E%3Cpolygon fill='%23768c3a' points='0 157.1 0 172.1 28.6 200.6 36.1 193.1'/%3E%3Cpolygon fill='%2396ac58' points='70.7 200 70.8 192.4 63.2 200'/%3E%3Cpolygon fill='%23B6CC76' points='27.8 200 63.2 200 70.7 192.5 0 121.8 0 157.2 35.3 192.5'/%3E%3Cpolygon fill='%2396ac58' points='200 157.1 164 193.1 171.5 200.6 200 172.1'/%3E%3Cpolygon fill='%23768c3a' points='136.7 200 129.2 192.5 129.2 200'/%3E%3Cpolygon fill='%23B6CC76' points='172.1 200 164.6 192.5 200 157.1 200 157.2 200 121.8 200 121.8 129.2 192.5 136.7 200'/%3E%3Cpolygon fill='%23768c3a' points='129.2 0 129.2 7.5 200 78.2 200 63.2 136.7 0'/%3E%3Cpolygon fill='%23B6CC76' points='200 27.8 200 27.9 172.1 0 136.7 0 200 63.2 200 63.2'/%3E%3Cpolygon fill='%2396ac58' points='63.2 0 0 63.2 0 78.2 70.7 7.5 70.7 0'/%3E%3Cpolygon fill='%23B6CC76' points='0 63.2 63.2 0 27.8 0 0 27.8'/%3E%3C/g%3E%3C/svg%3E")`,
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E")`,
];

function Home() {
  const { t } = useTranslation("translation", { keyPrefix: "routes.home" });
  const [topPlaylists, setTopPlaylists] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);
  const [genres, setGenres] = useState([]);
  const playlistImgSize = "230x153";
  const artistImgSize = "356x237";
  const albumImgSize = "300x300";

  useEffect(() => {
    musicAPI.getTopTracks().then(setTopTracks);
    musicAPI.getTopArtists().then(setTopArtists);
    musicAPI.getTopAlbums().then(setTopAlbums);
    musicAPI.getTopPlaylists().then(setTopPlaylists);
    musicAPI.getGenres().then(setGenres);
  }, []);

  return (
    <Flex flexFlow="column wrap" rowGap="2.5rem">
      <Box>
        <Heading as="h2" fontSize={{ base: "xl", sm: "3xl", md: "4xl" }}>
          {t("topTracks")}
        </Heading>
        <Flex flexFlow="row wrap" justifyContent="center">
          {topTracks.map((track, index) => {
            return (
              <SongVisualizer
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
        <Heading as="h2" fontSize={{ base: "xl", sm: "3xl", md: "4xl" }}>
          {t("topArtists")}
        </Heading>
        <Flex flexFlow="row wrap" justifyContent="center">
          {topArtists.map((artist, index) => {
            return (
              <ArtistVisualizer
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
        <Heading as="h2" fontSize={{ base: "xl", sm: "3xl", md: "4xl" }}>
          {t("topAlbums")}
        </Heading>
        <Flex flexFlow="row wrap" justifyContent="center">
          {topAlbums.map((album, index) => {
            return (
              <SongVisualizer
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
        <Heading as="h2" fontSize={{ base: "xl", sm: "3xl", md: "4xl" }}>
          {t("topPlaylists")}
        </Heading>
        <Flex flexFlow="row wrap" justifyContent="center">
          {topPlaylists.map((playlist, index) => {
            return (
              <SongVisualizer
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

      <Box>
        <Heading as="h2" fontSize={{ base: "xl", sm: "3xl", md: "4xl" }}>
          {t("genres")}
        </Heading>
        <Grid
          rowGap={4}
          columnGap={8}
          alignItems="center"
          justifyItems="center"
          justifyContent="space-between"
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          }}>
          {genres.map(genre => {
            const hslColor = Math.floor(Math.random() * 360);
            return (
              <GridItem
                height={20}
                width="100%"
                key={genre.id}
                display="flex"
                borderRadius={5}
                alignItems="center"
                justifyContent="center"
                backgroundSize={Math.floor(Math.random() * 100) > 50 ? "cover" : "contain"}
                backgroundImage={
                  backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
                }
                backgroundColor={`hsl(${hslColor}deg, 100%, 90%)`}>
                <Text
                  color="black"
                  fontWeight="bold"
                  textAlign="center"
                  fontSize={{ base: "xs", sm: "md", md: "lg" }}>
                  {genre.name}
                </Text>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Flex>
  );
}

export { Home };
