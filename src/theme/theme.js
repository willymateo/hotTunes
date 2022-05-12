import { extendTheme } from "@chakra-ui/react";
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
    useSystemColorMode: true,
  },
});

export { theme };
