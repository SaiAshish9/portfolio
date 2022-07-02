import { createGlobalStyle, css } from "styled-components";

import { Colors, Theme, FontFamily } from "constants/index";

const { white, veryDarkGray, blue, yellow, orange, red, darkGrey } = Colors;

const genericStyles = css`
  body {
    overflow-x: hidden !important;
    .ant-tabs-nav-list {
      overflow-x: hidden !important;
      ::-webkit-scrollbar {
        display: none !important;
      }
    }
    pre {
      white-space: pre-wrap;
    }
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

  .ant-tooltip-inner {
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

  .ant-tooltip-arrow-content {
    background-color: ${({ theme: { current } }) =>
      current === Theme.light
        ? veryDarkGray
        : current === Theme.love
        ? "#eb4031"
        : current === Theme.highContrast
        ? "yellow"
        : current === Theme.fire
        ? "#FF7600"
        : "#fff"};
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
    // border-radius: 10px;
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

  .ant-dropdown-arrow {
    ${({ theme: { current } }) =>
      current === Theme.highContrast &&
      css`
        border-top-color: ${blue} !important;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: ${blue} !important;
      `};
    ${({ theme: { current } }) =>
      current === Theme.dark &&
      css`
        border-top-color: ${darkGrey} !important;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: ${darkGrey} !important;
      `};
    ${({ theme: { current } }) =>
      current === Theme.light &&
      css`
        border-top-color: #fff !important;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: #fff !important;
      `};
    ${({ theme: { current } }) =>
      current === Theme.love &&
      css`
        border-top-color: ${red} !important;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: ${red} !important;
      `};
    ${({ theme: { current } }) =>
      current === Theme.fire &&
      css`
        border-top-color: ${orange} !important;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: ${orange} !important;
      `};
  }
  .ant-dropdown-menu {
    background: ${({ theme: { current } }) =>
      current === Theme.dark
        ? veryDarkGray
        : current === Theme.love
        ? "#F3D1F4"
        : current === Theme.highContrast
        ? yellow
        : current === Theme.fire
        ? "#FFED99"
        : white} !important;
    padding: 0 0px !important;
  }
`;

const GlobalStyles = createGlobalStyle`
   ${genericStyles}
`;

export default GlobalStyles;
