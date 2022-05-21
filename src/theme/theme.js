import { extendTheme } from "@chakra-ui/react";
import "@vime/core/themes/default.css";
import "@vime/core/themes/light.css";
import "./index.css";

const theme = extendTheme({
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export { theme };
