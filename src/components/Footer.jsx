import { Box, Text, Divider, Flex, Icon, VStack, HStack } from "@chakra-ui/react";
import { Twitter, TelegramCircled, GoogleCircled, Copyright } from "iconoir-react";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function Footer({ menuEntries }) {
  return (
    <Box as="footer">
      <Divider />
      <Flex justifyContent="space-around" alignItems="center" flexWrap="wrap" padding="2.5rem">
        <Box>
          <Text>
            2022
            <Icon as={Copyright} />
            <Text as="span" fontFamily="Molle">
              <Link to="/">{import.meta.env.VITE_APP_TITLE}</Link>
            </Text>
          </Text>
        </Box>
        <VStack>
          <Icon as={RiNeteaseCloudMusicFill} />
          <Text>
            <Link to="https://github.com/willymateo">{import.meta.env.VITE_APP_OWNER}</Link>
          </Text>
          <HStack>
            <Icon as={Twitter} />
            <Icon as={GoogleCircled} />
            <Icon as={TelegramCircled} />
          </HStack>
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
