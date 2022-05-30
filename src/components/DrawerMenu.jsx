import { ArrowRightCircled } from "iconoir-react";
import { useTranslation } from "react-i18next";
import { MenuItems } from "./MenuItems";
import { LngMenu } from "./LngMenu";
import { useRef } from "react";
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

function DrawerMenu({ menuBtnRef, isOpen, onClose }) {
  const { t } = useTranslation("translation", { keyPrefix: "components.drawerMenu" });
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
          <Text fontSize={{ base: "sm", sm: "md", md: "lg" }}>{t("title")}</Text>
        </DrawerHeader>

        <DrawerBody>
          <MenuItems flexDirection="row" />
        </DrawerBody>

        <DrawerFooter>
          <Flex flexFlow="row wrap" alignItems="center" justifyContent="space-between" width="100%">
            <LngMenu showCaption={true} iconDirection="up" />
            <Button
              variant="outline"
              ref={closeBtnRef}
              onClick={onClose}
              height={{ base: 5, sm: 9 }}
              fontSize={{ base: "xs", sm: "sm" }}>
              {t("close")}
            </Button>
          </Flex>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export { DrawerMenu };
