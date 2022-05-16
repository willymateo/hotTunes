import { ArrowRightCircled } from "iconoir-react";
import { MenuItems } from "./MenuItems";
import { useRef } from "react";
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
  const closeBtnRef = useRef();
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={menuBtnRef}
      initialFocusRef={closeBtnRef}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton as={ArrowRightCircled} />
        <DrawerHeader>
          <Text fontSize={{ base: "sm", sm: "md", md: "lg" }}>The bigest music library</Text>
        </DrawerHeader>

        <DrawerBody>
          <MenuItems flexDirection="row" />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" ref={closeBtnRef} onClick={onClose}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export { DrawerMenu };
