import { MenuItems } from "./MenuItems";
import { Box } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box as="nav">
      <MenuItems flexDirection="row" />
    </Box>
  );
}

export { Navigation };
