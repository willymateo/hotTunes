import { Translate, NavArrowDown, NavArrowUp } from "iconoir-react";
import { US, EC } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";
import {
  Icon,
  Menu,
  Flex,
  Text,
  MenuList,
  IconButton,
  MenuButton,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";

function LngMenu({ showLabel = false, iconDirection = "down" }) {
  const { t, i18n } = useTranslation("translation", { keyPrefix: "components.lngMenu" });
  const languages = {
    en: { nativeName: t("english"), flagIcon: <Icon as={US} /> },
    es: { nativeName: t("spanish"), flagIcon: <Icon as={EC} /> },
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant="ghost"
        rightIcon={iconDirection === "up" ? <NavArrowUp /> : <NavArrowDown />}>
        <Flex align="center">
          <Translate />
          {showLabel && <Text fontSize={{ base: "xs", sm: "md" }}>{t("language")}</Text>}
        </Flex>
      </MenuButton>

      <MenuList>
        <MenuOptionGroup defaultValue={i18n.resolvedLanguage} type="radio">
          {Object.keys(languages).map(key => (
            <MenuItemOption
              key={key}
              value={key}
              onClick={() => {
                i18n.changeLanguage(key);
              }}
              fontWeight={i18n.resolvedLanguage === key ? "bold" : "normal"}
              fontStyle={i18n.resolvedLanguage === key ? "italic" : "normal"}>
              <Flex flexFlow="row" alignItems="center" columnGap={2}>
                {languages[key].nativeName}
                {languages[key].flagIcon}
              </Flex>
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export { LngMenu };
