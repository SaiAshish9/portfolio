import React from "react";
import ReactDOM from "react-dom";
import AppInit from "./App";

import { ThemeProvider } from "styled-components";

import "antd/dist/antd.css";
import 'global/main.css';

import GlobalStyles from "global/styles";

import { StoreProvider, useStore } from "store";

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

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
