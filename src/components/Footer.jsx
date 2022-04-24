import {
  Twitter,
  TelegramCircled,
  GoogleCircled,
  Copyright,
} from "iconoir-react";
import { PropTypes } from "prop-types";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import {
  Box,
  Text,
  Divider,
  Flex,
  Icon,
  Link,
  VStack,
  HStack,
} from "@chakra-ui/react";

function Footer({ menuEntries }) {
  return (
    <Box as="footer">
      <Divider />
      <Flex justifyContent="space-around" alignItems="center" flexWrap="wrap">
        <Box>
          <Text>
            2022
            <Icon as={Copyright} />
            <Text as="span" fontFamily="Molle">
              {import.meta.env.VITE_APP_TITLE}
            </Text>
          </Text>
        </Box>
        <VStack>
          <Icon as={RiNeteaseCloudMusicFill} />
          <Text>{import.meta.env.VITE_APP_OWNER}</Text>
          <HStack>
            <Icon as={Twitter} />
            <Icon as={GoogleCircled} />
            <Icon as={TelegramCircled} />
          </HStack>
        </VStack>
        <VStack>
          {menuEntries.map((entry, index) => (
            <Link key={index}>{entry}</Link>
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
