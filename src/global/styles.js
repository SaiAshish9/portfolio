import { createGlobalStyle, css } from "styled-components";

import { Colors, Theme, FontFamily } from "constants/index";

const { white, veryDarkGray } = Colors;

const genericStyles = css`
  body {
    overflow-x: hidden !important;
    font-family: ${FontFamily.roboto}, sans-serif !important;
    background: ${({ theme: { current } }) =>
      current === Theme.dark
        ? veryDarkGray
        : current === Theme.love
        ? "#F3D1F4"
        : current === Theme.highContrast
        ? "#000"
        : current === Theme.fire
        ? "#FFED99"
        : white};

    color: ${({ theme: { current } }) =>
      current === Theme.light
        ? veryDarkGray
        : current === Theme.love
        ? "#eb4031"
        : current === Theme.highContrast
        ? "yellow"
        : current === Theme.fire
        ? "#FF7600"
        : white};
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { current } }) =>
      current === Theme.light
        ? veryDarkGray
        : current === Theme.love
        ? "#eb0431"
        : current === Theme.highContrast
        ? "#18ebff"
        : current === Theme.fire
        ? "#FF7600"
        : white};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme: { current } }) =>
      current === Theme.light
        ? veryDarkGray
        : current === Theme.love
        ? "#eb0431"
        : current === Theme.highContrast
        ? "#18ebff"
        : current === Theme.fire
        ? "#FF7600"
        : white};
    cursor: pointer;
  }
`;

const GlobalStyles = createGlobalStyle`
   ${genericStyles}
`;

export default GlobalStyles;
