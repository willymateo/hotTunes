import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { App } from "./App";
import React from "react";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
