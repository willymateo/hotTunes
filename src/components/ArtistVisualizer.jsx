import { Box, Heading, Image, Tag, TagLabel, Icon, Flex } from "@chakra-ui/react";
import { PlayOutline } from "iconoir-react";
import { useState } from "react";

function ArtistVisualizer({ artistTopNumber, artistName, imageUrl }) {
  const [showControls, setShowControls] = useState(false);

  return (
    <Box width={{ base: "100%", sm: "30%", lg: "20%" }} padding="0.5rem">
      <Flex flexFlow="column wrap" rowGap="1rem">
        <Box position="relative">
          <Image
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            sx={{ aspectRatio: "1/1" }}
            fallback={artistName}
            borderRadius="full"
            objectFit="cover"
            src={imageUrl}
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

export { ArtistVisualizer };
