import { createColorMode, setStoreColorMode } from "../redux/states/colorMode";
import { IoSearchCircleOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { SearchOverlay } from "./SearchOverlay";
import { useTranslation } from "react-i18next";
import { MoonSat, Menu } from "iconoir-react";
import { WiSunrise } from "react-icons/wi";
import { useRef, useEffect } from "react";
import { DrawerMenu } from "./DrawerMenu";
import { Link } from "react-router-dom";
import {
  Box,
  Icon,
  Flex,
  Show,
  Hide,
  Input,
  Switch,
  Heading,
  InputGroup,
  useColorMode,
  useDisclosure,
  InputLeftElement,
} from "@chakra-ui/react";

function Header() {
  const { t } = useTranslation("translation", { keyPrefix: "components.searchOverlay" });
  const { isDark } = useSelector(state => state.colorMode);
  const searchDisclosure = useDisclosure();
  const { setColorMode } = useColorMode();
  const menuDisclosure = useDisclosure();
  const dispatch = useDispatch();
  const menuBtnRef = useRef();
  const iconSmallSize = { base: 6, sm: 7, md: 8 };
  const iconBigSize = { base: 4, sm: 5, md: 6 };

  const switchHandler = () => {
    setColorMode(isDark ? "light" : "dark");
    dispatch(
      setStoreColorMode({
        theme: isDark ? "light" : "dark",
        isDark: !isDark,
      })
    );
  };

  useEffect(() => {
    const colorModeLocalStorage = localStorage.getItem("chakra-ui-color-mode");
    if (colorModeLocalStorage) {
      dispatch(
        createColorMode({
          theme: colorModeLocalStorage,
          isDark: colorModeLocalStorage === "dark",
        })
      );
    }
  }, []);

  return (
    <Box as="header" paddingBottom={4}>
      <Flex flexFlow="row wrap-reverse" justifyContent="space-between" alignItems="center">
        <Heading
          as="h1"
          fontFamily="Molle"
          textAlign="center"
          fontSize={{ base: "sm", sm: "2xl", md: "4xl" }}>
          <Link to="/">{import.meta.env.VITE_APP_TITLE}</Link>
        </Heading>

        <Hide below="md">
          <InputGroup width={{ md: "50%", lg: "60%" }}>
            <InputLeftElement pointerEvents="none">
              <Icon as={IoSearchCircleOutline} width={iconSmallSize} height={iconSmallSize} />
            </InputLeftElement>
            <Input variant="filled" placeholder={t("placeholder")} />
          </InputGroup>
        </Hide>

        <Flex flexFlow="row nowrap" alignItems="center" columnGap={1}>
          <Show below="md">
            <Icon
              width={iconSmallSize}
              height={iconSmallSize}
              as={IoSearchCircleOutline}
              onClick={searchDisclosure.onOpen}
            />
          </Show>

          <Icon as={WiSunrise} width={iconSmallSize} height={iconSmallSize} />
          <Switch onChange={switchHandler} isChecked={isDark} size="sm" />
          <Icon as={MoonSat} width={iconBigSize} height={iconBigSize} />

          <Show below="md">
            <Icon
              as={Menu}
              ref={menuBtnRef}
              width={iconBigSize}
              height={iconBigSize}
              onClick={menuDisclosure.onOpen}
            />
          </Show>
        </Flex>
      </Flex>

      <SearchOverlay {...searchDisclosure} />
      <DrawerMenu menuBtnRef={menuBtnRef} {...menuDisclosure} />
    </Box>
  );
}

export { Header };
