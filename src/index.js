import React from "react";
import AppInit from "./App";

import { ThemeProvider } from "styled-components";

import "antd/dist/antd.css";
import "global/main.css";

import GlobalStyles from "global/styles";

import { StoreProvider, useStore } from "store";

import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

// https://api.countapi.xyz/create?namespace=saiashish9&key=portfolio&value=0
// https://api.countapi.xyz/get/saiashish9/portfolio

function App() {
  const {
    state: { theme },
  } = useStore();

  return (
    <ThemeProvider theme={{ current: theme }}>
      <GlobalStyles />
      <AppInit />
    </ThemeProvider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);

// https://www.npmjs.com/package/react-router-i18n
