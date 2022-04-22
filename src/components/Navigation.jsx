import { Box, Flex, Heading, Link, VStack } from "@chakra-ui/react";
import { PropTypes } from "prop-types";

function Navigation({ menuEntries }) {
  return (
    <Flex flexDir="column" justifyContent="center">
      <Box as="nav">
        <Heading as="h1" fontFamily="Molle">
          <Link href="/">{import.meta.env.VITE_APP_TITLE}</Link>
        </Heading>
      </Box>
      <VStack>
        {menuEntries.map((entry, index) => (
          <Link key={index}>{entry}</Link>
        ))}
      </VStack>
    </Flex>
  );
}

Navigation.propTypes = {
  menuEntries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { Navigation };
