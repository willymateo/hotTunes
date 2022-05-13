import { IoSearchCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { WiSunrise } from "react-icons/wi";
import { MoonSat } from "iconoir-react";
import { Link } from "react-router-dom";
import {
  Box,
  Icon,
  Flex,
  Show,
  Hide,
  Input,
  Switch,
  Heading,
  InputGroup,
  useColorMode,
  InputLeftElement,
} from "@chakra-ui/react";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDark, setIsDark] = useState(true);
  const iconHeigth = { base: 4, sm: 6 };
  const iconWidth = { base: 4, sm: 6 };

  useEffect(() => {
    colorMode === "dark" ? setIsDark(true) : setIsDark(false);
  }, []);

  return (
    <Box as="header" paddingBottom={4}>
      <Flex flexFlow="row wrap" justifyContent="space-between" alignItems="center">
        <Heading
          as="h1"
          fontFamily="Molle"
          textAlign="center"
          fontSize={{ base: "sm", sm: "2xl", md: "4xl" }}>
          <Link to="/">{import.meta.env.VITE_APP_TITLE}</Link>
        </Heading>

        <Hide below="md">
          <InputGroup width={{ base: "30%", sm: "40%", md: "50%", lg: "60%" }}>
            <InputLeftElement pointerEvents="none">
              <Icon as={IoSearchCircleOutline} width={iconWidth} height={iconHeigth} />
            </InputLeftElement>
            <Input
              variant="filled"
              placeholder="Search tracks, artists, albums, playlists and more..."></Input>
          </InputGroup>
        </Hide>

        <Flex align="center" columnGap={1}>
          <Show below="md">
            <Icon as={IoSearchCircleOutline} width={iconWidth} height={iconHeigth} />
          </Show>
          <Icon as={WiSunrise} width={iconWidth} height={iconHeigth} />
          <Switch onChange={toggleColorMode} defaultChecked={isDark} size="sm" />
          <Icon as={MoonSat} width={{ base: 2, sm: 4 }} height={{ base: 2, sm: 4 }} />
        </Flex>
      </Flex>
    </Box>
  );
}

export { Header };
