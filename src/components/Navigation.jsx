import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function Navigation({ menuEntries }) {
  return (
    <Flex flexFlow="column wrap" alignItems="center" rowGap="1rem" minHeight="100%">
      <Box as="nav">
        <Heading as="h1" fontFamily="Molle">
          <Link to="/">{import.meta.env.VITE_APP_TITLE}</Link>
        </Heading>
      </Box>
      <VStack>
        {menuEntries.map((entry, index) => (
          <Link key={index} to={entry.toLowerCase()}>
            {entry}
          </Link>
        ))}
      </VStack>
    </Flex>
  );
}

Navigation.propTypes = {
  menuEntries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { Navigation };
