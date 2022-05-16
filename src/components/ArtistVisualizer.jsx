import { PlayOutline } from "iconoir-react";
import { useState } from "react";
import {
  Box,
  Tag,
  Icon,
  Flex,
  Image,
  Heading,
  TagLabel,
  useColorModeValue,
} from "@chakra-ui/react";

function ArtistVisualizer({ artistTopNumber, artistName, imageUrl }) {
  const [showControls, setShowControls] = useState(false);
  const boxShadow = useColorModeValue(
    "10px 10px 50px 15px rgba(0,0,0,0.3),inset 0px 0px 100px 100px rgba(0,0,0,0.3)",
    "10px 10px 50px 20px rgba(0,0,0,0.5),inset 0px 0px 100px 100px rgba(0,0,0,0.7)"
  );

  return (
    <Box width={{ base: "100%", sm: "30%", lg: "20%" }} padding={2}>
      <Flex flexFlow="column wrap" rowGap={4}>
        <Box position="relative">
          <Image
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            sx={{ aspectRatio: "1/1" }}
            fallback={artistName}
            borderRadius="full"
            objectFit="cover"
            src={imageUrl}
            _hover={{
              boxShadow,
            }}
          />
          {showControls && (
            <Tag
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              transform="translate(-50%, -50%)"
              borderRadius="full"
              position="absolute"
              left="50%"
              size="md"
              top="50%">
              <Icon as={PlayOutline} />
            </Tag>
          )}
          <Tag
            bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,32,30,1) 65%, rgba(252,176,69,1) 100%)"
            transform="translate(-50%, 0%)"
            position="absolute"
            borderRadius="full"
            bottom="-5%"
            left="50%"
            size="sm">
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