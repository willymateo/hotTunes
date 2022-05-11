import { Box, Heading, Image, Text, Tag, TagLabel, Icon } from "@chakra-ui/react";
import { PlayOutline } from "iconoir-react";
import { PropTypes } from "prop-types";
import { useState } from "react";

function TopGeneralItem({ topNumber, title, subTitle, imageUrl }) {
  const [showControls, setShowControls] = useState(false);

  return (
    <Box width={{ base: "50%", sm: "25%", md: "25%", lg: "18%", xl: "18%", "2xl": "18%" }}>
      <Box position="relative">
        <Image
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          src={imageUrl}
          fallback={title}
          borderRadius="4%"
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

TopGeneralItem.propTypes = {
  topNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export { TopGeneralItem };
