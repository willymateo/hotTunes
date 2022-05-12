import { Box, Flex, Heading, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSearchCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box as="header" paddingBottom={4}>
      <Flex flexFlow="row wrap" justifyContent="space-between">
        <Heading
          as="h1"
          fontFamily="Molle"
          textAlign="center"
          fontSize={{ base: "sm", sm: "2xl", md: "4xl" }}>
          <Link to="/">{import.meta.env.VITE_APP_TITLE}</Link>
        </Heading>

        <InputGroup width="60%">
          <InputLeftElement pointerEvents="none">
            <Icon as={IoSearchCircleOutline} />
          </InputLeftElement>
          <Input
            variant="filled"
            placeholder="Search tracks, artists, albums, playlists and more..."></Input>
        </InputGroup>
      </Flex>
    </Box>
  );
}

export { Header };
