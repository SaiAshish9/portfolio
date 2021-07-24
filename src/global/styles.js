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
`;

const GlobalStyles = createGlobalStyle`
   ${genericStyles}
`;

export default GlobalStyles;
