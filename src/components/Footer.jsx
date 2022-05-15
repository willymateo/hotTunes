import { Twitter, TelegramCircled, GoogleCircled, Copyright, GitHubOutline } from "iconoir-react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import {
  Box,
  Text,
  Flex,
  Icon,
  Hide,
  VStack,
  Divider,
  Link as ExternalLink,
} from "@chakra-ui/react";

function Footer() {
  const iconWidth = { base: 8, sm: 6 };
  const iconHeigth = { base: 8, sm: 6 };

  return (
    <Box as="footer" paddingY="2.5rem" paddingX="1rem">
      <Divider />
      <Flex
        flexFlow="row wrap"
        justifyContent="space-around"
        alignItems="center"
        paddingTop="2.5rem"
        gap="2rem">
        <Flex flexFlow="row wrap" columnGap={2} justifyContent="center" alignItems="center">
          <Text>2022</Text>
          <Icon as={Copyright} />
          <Text as="span" fontFamily="Molle" fontSize="2xl" textAlign="center">
            <Link to="/">{import.meta.env.VITE_APP_TITLE}</Link>
          </Text>
        </Flex>

        <VStack>
          <ExternalLink
            isExternal
            href="https://github.com/willymateo"
            fontWeight="bold"
            fontStyle="oblique">
            {import.meta.env.VITE_APP_OWNER}
          </ExternalLink>
          <Flex flexFlow="row wrap" gap="0.5rem" justifyContent="center">
            <ExternalLink href="https://github.com/willymateo" isExternal>
              <Icon as={GitHubOutline} width={iconWidth} height={iconHeigth} />
            </ExternalLink>
            <ExternalLink href="https://twitter.com/willymateoe" isExternal>
              <Icon as={Twitter} width={iconWidth} height={iconHeigth} />
            </ExternalLink>
            <Icon as={GoogleCircled} width={iconWidth} height={iconHeigth} />
            <Icon as={TelegramCircled} width={iconWidth} height={iconHeigth} />
          </Flex>
        </VStack>

        <Hide below="md">
          <MenuItems flexDirection="row-reverse" />
        </Hide>
      </Flex>
    </Box>
  );
}

export { Footer };
