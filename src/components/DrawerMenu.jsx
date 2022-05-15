import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import {
  Flex,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function DrawerMenu({ menuEntries, menuBtnRef, isOpen, onClose }) {
  return (
        <Drawer
          placement="right"
          finalFocusRef={menuBtnRef}
          isOpen={isOpen}
          onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Text fontSize={{ base: "sm", sm: "md", md: "lg" }}>The bigest music library</Text>
            </DrawerHeader>

            <DrawerBody>
              <Flex flexFlow="column wrap" alignItems="center" rowGap="1rem">
                {menuEntries.map((entry, index) => (
                  <Link key={index} to={entry.toLowerCase()} onClick={onClose}>
                    {entry}
                  </Link>
                ))}
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
  );
}

DrawerMenu.propTypes = {
  menuEntries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { DrawerMenu };
