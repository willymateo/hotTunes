import { SidebarExpand } from "iconoir-react";
import { MenuItems } from "./MenuItems";
import {
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

function DrawerMenu({ menuBtnRef, isOpen, onClose }) {
  return (
    <Drawer placement="right" finalFocusRef={menuBtnRef} isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton as={SidebarExpand} />
        <DrawerHeader>
          <Text fontSize={{ base: "sm", sm: "md", md: "lg" }}>The bigest music library</Text>
        </DrawerHeader>

        <DrawerBody>
          <MenuItems flexDirection="row" />
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

export { DrawerMenu };
