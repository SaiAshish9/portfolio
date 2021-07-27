import styled from "styled-components";

import { Theme, Colors, Styles, BREAKPOINTS } from "constants/index";

const { darkGrey, lightBluishGrey, white, veryDarkGray } = Colors;

export const Container = styled.div`
  width: 100vw !important;
  overflow-x: hidden;
  min-height: 100vh !important;
`;

export const FabButton = styled.div`
  height: 58px;
  width: 58px;
  ${Styles.RCC}
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ theme: { current } }) =>
    current === Theme.dark ? darkGrey : lightBluishGrey};
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  font-size: 1.2rem;
  z-index: 12;
  &:hover {
    opacity: 0.7;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    height: 2.4rem;
    width: 2.4rem;
    font-size: 1rem;
  }
`;
