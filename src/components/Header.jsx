import { Box, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { IoSearchCircleOutline } from "react-icons/io5";

function Header() {
  return (
    <Box as="header">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={IoSearchCircleOutline} />
        </InputLeftElement>
        <Input variant="flushed" placeholder="Search..."></Input>
      </InputGroup>
    </Box>
  );
}

export { Header };
