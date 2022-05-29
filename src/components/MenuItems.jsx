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
          <Text>{t("home")}</Text>
        </Flex>
      </Link>
      <Link to="radio">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={MicSpeaking} />
          <Text>{t("radio")}</Text>
        </Flex>
      </Link>
      <Link to="tracks">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={Music1} />
          <Text>{t("tracks")}</Text>
        </Flex>
      </Link>
      <Link to="playlists">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={Playlist} />
          <Text>{t("playlists")}</Text>
        </Flex>
      </Link>
      <Link to="albums">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={AlbumList} />
          <Text>{t("albums")}</Text>
        </Flex>
      </Link>
      <Link to="artists">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={Group} />
          <Text>{t("artists")}</Text>
        </Flex>
      </Link>
      <Link to="Genres">
        <Flex flexDirection={flexDirection} wrap="nowrap" alignItems="center" columnGap={3}>
          <Icon as={EmojiSingLeftNote} />
          <Text>{t("genres")}</Text>
        </Flex>
      </Link>
    </Flex>
  );
}

export { MenuItems };
