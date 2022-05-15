import { Flex, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  Group,
  Music1,
  Playlist,
  AlbumList,
  MicSpeaking,
  HomeSimpleDoor,
  EmojiSingLeftNote,
} from "iconoir-react";

function MenuItems({ flexDirection }) {
  return (
    <Flex
      flexFlow="column wrap"
      justifyContent="center"
      alignContent="space-around"
      alignItems={flexDirection === "row-reverse" ? "center" : "flex-start"}
      rowGap={4}>
      <Link to="/">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={HomeSimpleDoor} />
          <Text>Home</Text>
        </Flex>
      </Link>
      <Link to="radio">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={MicSpeaking} />
          <Text>Radio</Text>
        </Flex>
      </Link>
      <Link to="tracks">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={Music1} />
          <Text>Tracks</Text>
        </Flex>
      </Link>
      <Link to="playlists">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={Playlist} />
          <Text>Playlists</Text>
        </Flex>
      </Link>
      <Link to="albums">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={AlbumList} />
          <Text>Albums</Text>
        </Flex>
      </Link>
      <Link to="artists">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={Group} />
          <Text>Artists</Text>
        </Flex>
      </Link>
      <Link to="Genres">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={EmojiSingLeftNote} />
          <Text>Genres</Text>
        </Flex>
      </Link>
    </Flex>
  );
}

export { MenuItems };
