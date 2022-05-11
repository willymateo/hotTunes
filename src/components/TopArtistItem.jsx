import { Box, Heading, Image, Tag, TagLabel, Icon, Flex } from "@chakra-ui/react";
import { PlayOutline } from "iconoir-react";
import { PropTypes } from "prop-types";
import { useState } from "react";

function TopArtistItem({ artistTopNumber, artistName, imageUrl }) {
  const [showControls, setShowControls] = useState(false);

  return (
    <Box width={{ base: "50%", sm: "25%", md: "25%", lg: "18%", xl: "18%", "2xl": "18%" }}>
      <Flex flexFlow="column wrap" rowGap="1rem">
        <Box position="relative">
          <Image
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            src={imageUrl}
            fallback={artistName}
            clipPath="circle(closest-side)"
          />
          {showControls && (
            <Tag
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              borderRadius="full"
              size="md"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)">
              <Icon as={PlayOutline} />
            </Tag>
          )}
          <Tag
            borderRadius="full"
            size="sm"
            position="absolute"
            bottom="-5%"
            left="50%"
            transform="translate(-50%, 0%)"
            bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,32,30,1) 65%, rgba(252,176,69,1) 100%)">
            <TagLabel color="white" fontStyle="italic" fontWeight="bold">
              Top {artistTopNumber}
            </TagLabel>
          </Tag>
        </Box>
        <Heading fontSize="md" as="h3" noOfLines={2} textAlign="center">
          {artistName}
        </Heading>
      </Flex>
    </Box>
  );
}

TopArtistItem.propTypes = {
  artistTopNumber: PropTypes.number.isRequired,
  artistName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export { TopArtistItem };
