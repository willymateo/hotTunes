import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

function Navigation({ menuEntries }) {
  return (
    <Box as="nav">
      <Flex flexFlow="column wrap" alignItems="center" rowGap="1rem">
        {menuEntries.map((entry, index) => (
          <Link key={index} to={entry.toLowerCase()}>
            {entry}
          </Link>
        ))}
      </Flex>
    </Box>
  );
}

Navigation.propTypes = {
  menuEntries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { Navigation };
