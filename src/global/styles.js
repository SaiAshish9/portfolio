import { createGlobalStyle, css } from "styled-components";

import { Colors, Theme, FontFamily } from "constants/index";

const { white, veryDarkGray } = Colors;

const genericStyles = css`
  body {
    overflow-x: hidden !important;
    font-family: ${FontFamily.roboto}, sans-serif !important;
    background: ${({ theme: { current } }) =>
      current === Theme.dark ? veryDarkGray : white};
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { current } }) =>
      current !== Theme.dark ? veryDarkGray : white};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme: { current } }) =>
      current !== Theme.dark ? veryDarkGray : white};
    cursor: pointer;
  }
`;

const GlobalStyles = createGlobalStyle`
   ${genericStyles}
`;

export default GlobalStyles;
