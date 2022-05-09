import { Box, Heading, Image, Tag, TagLabel, Icon } from "@chakra-ui/react";
import { musicAPI } from "../services/musicAPI";
import { useState, useEffect } from "react";
import { PlayOutline } from "iconoir-react";
import { PropTypes } from "prop-types";

function TopArtistItem({ artistId, artistTopNumber, artistName }) {
  const [ArtistImage, setArtistImage] = useState("");

  useEffect(() => {
    musicAPI.getArtistImages(artistId).then(res => {
      setArtistImage(res[0].url);
    });
  }, []);

  return (
    <Box width={{ base: "50%", sm: "25%", md: "25%", lg: "18%", xl: "18%", "2xl": "18%" }}>
      <Box position="relative">
        <Image src={ArtistImage} fallback={artistName} borderRadius="full" objectFit="cover" />
        <Tag
          borderRadius="full"
          size="md"
          position="absolute"
          bottom="50%"
          left="50%"
          transform="translate(-50%, 0%)">
          <Icon as={PlayOutline} />
        </Tag>
        <Tag
          borderRadius="full"
          size="sm"
          position="absolute"
          bottom="5%"
          left="50%"
          transform="translate(0%, 0%)"
          bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,32,30,1) 65%, rgba(252,176,69,1) 100%)">
          <TagLabel color="white" fontStyle="italic" fontWeight="bold">
            Top {artistTopNumber}
          </TagLabel>
        </Tag>
      </Box>
      <Heading fontSize="md" as="h3" noOfLines={2}>
        {artistName}
      </Heading>
    </Box>
  );
}

TopArtistItem.propTypes = {
  artistId: PropTypes.string.isRequired,
  artistTopNumber: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
};

export { TopArtistItem };
