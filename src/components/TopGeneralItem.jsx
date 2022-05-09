import { Box, Heading, Image, Text, Tag, TagLabel, Icon } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { PlayOutline } from "iconoir-react";
import { PropTypes } from "prop-types";
import { musicAPI } from "../services/musicAPI";

function TopGeneralItem({ albumId, topNumber, title, artistName }) {
  const [AlbumImage, setAlbumImage] = useState("");

  useEffect(() => {
    musicAPI.getAlbumImages(albumId).then(res => {
      setAlbumImage(res[4].url);
    });
  }, []);

  return (
    <Box width={{ base: "50%", sm: "25%", md: "25%", lg: "18%", xl: "18%", "2xl": "18%" }}>
      <Box position="relative">
        <Image src={AlbumImage} fallback={title} borderRadius="4%" />
        <Tag borderRadius="full" size="md" position="absolute" bottom="2%" left="2%">
          <Icon as={PlayOutline} />
        </Tag>
        <Tag
          borderRadius="full"
          size="sm"
          position="absolute"
          bottom="2%"
          right="2%"
          bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,32,30,1) 65%, rgba(252,176,69,1) 100%)">
          <TagLabel color="white" fontStyle="italic" fontWeight="bold">
            Top {topNumber}
          </TagLabel>
        </Tag>
      </Box>
      <Heading fontSize="md" as="h3" noOfLines={2}>
        {title}
      </Heading>
      <Text colorScheme="gray" fontStyle="italic">
        {artistName}
      </Text>
    </Box>
  );
}

TopGeneralItem.propTypes = {
  albumId: PropTypes.string.isRequired,
  topNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

export { TopGeneralItem };
