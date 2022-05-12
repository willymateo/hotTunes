import { Twitter, TelegramCircled, GoogleCircled, Copyright, GitHubOutline } from "iconoir-react";
import { Box, Text, Divider, Flex, Icon, VStack, Link as ExternalLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function Footer({ menuEntries }) {
  return (
    <Box as="footer" paddingY="2.5rem" paddingX="1rem">
      <Divider />
      <Flex
        flexFlow="row wrap"
        justifyContent="space-around"
        alignItems="center"
        paddingTop="2.5rem"
        gap="2rem">
        <Text textAlign="center">
          2022
          <Icon as={Copyright} />
          <Text as="span" fontFamily="Molle" fontSize="2xl">
            <Link to="/">{import.meta.env.VITE_APP_TITLE}</Link>
          </Text>
        </Text>

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
              <Icon as={GitHubOutline} />
            </ExternalLink>
            <ExternalLink href="https://twitter.com/willymateoe" isExternal>
              <Icon as={Twitter} />
            </ExternalLink>
            <Icon as={GoogleCircled} />
            <Icon as={TelegramCircled} />
          </Flex>
        </VStack>

        <VStack>
          {menuEntries.map((entry, index) => (
            <Link key={index} to={entry.toLowerCase()}>
              {entry}
            </Link>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
}

Footer.propTypes = {
  menuEntries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { Footer };
