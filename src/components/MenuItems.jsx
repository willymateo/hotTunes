import { Flex, Icon, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
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

const fontSize = { base: "xs", sm: "md" };

function MenuItems({ flexDirection }) {
  const { t } = useTranslation("translation", { keyPrefix: "components.menuItems" });

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
          <Text fontSize={fontSize}>{t("home")}</Text>
        </Flex>
      </Link>
      <Link to="radio">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={MicSpeaking} />
          <Text fontSize={fontSize}>{t("radio")}</Text>
        </Flex>
      </Link>
      <Link to="tracks">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={Music1} />
          <Text fontSize={fontSize}>{t("tracks")}</Text>
        </Flex>
      </Link>
      <Link to="playlists">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={Playlist} />
          <Text fontSize={fontSize}>{t("playlists")}</Text>
        </Flex>
      </Link>
      <Link to="albums">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={AlbumList} />
          <Text fontSize={fontSize}>{t("albums")}</Text>
        </Flex>
      </Link>
      <Link to="artists">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={Group} />
          <Text fontSize={fontSize}>{t("artists")}</Text>
        </Flex>
      </Link>
      <Link to="Genres">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={EmojiSingLeftNote} />
          <Text fontSize={fontSize}>{t("genres")}</Text>
        </Flex>
      </Link>
    </Flex>
  );
}

export { MenuItems };
