import { Box, Heading, Image, Text, Tag, TagLabel, Icon } from "@chakra-ui/react";
import { PlayOutline } from "iconoir-react";
import { PropTypes } from "prop-types";
import { useState } from "react";

function SongVisualizer({ topNumber, title, subTitle, imageUrl }) {
  const [showControls, setShowControls] = useState(false);

  return (
    <Box width={{ base: "100%", sm: "50%", md: "30%", lg: "20%" }} padding="0.5rem">
      <Box position="relative">
        <Image
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          src={imageUrl}
          fallback={title}
          borderRadius="4%"
          width="100%"
        />
        {showControls && (
          <>
            <Tag
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              borderRadius="full"
              size="md"
              position="absolute"
              bottom="2%"
              left="2%">
              <Icon as={PlayOutline} />
            </Tag>
            <Tag
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
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
          </>
        )}
      </Box>
      <Heading fontSize="md" as="h3" noOfLines={2}>
        {title}
      </Heading>
      <Text colorScheme="gray" fontStyle="italic" noOfLines={2}>
        {subTitle}
      </Text>
    </Box>
  );
}

SongVisualizer.propTypes = {
  topNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export { SongVisualizer };
