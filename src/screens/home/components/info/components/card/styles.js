import styled from "styled-components";
import { Colors, Theme } from "constants/index";

const { darkGrey, lightBluishGrey } = Colors;

export const Container = styled.div`
  height: 24rem;
  width: 18rem;
  margin: 0 1rem;
  background-color: ${({ theme: { current } }) =>
    current === Theme.dark ? darkGrey : lightBluishGrey};
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 0 0 5px
      ${({ theme: { current } }) =>
        current !== Theme.dark ? darkGrey : lightBluishGrey};
    box-shadow: 0 0 5px
      ${({ theme: { current } }) =>
        current !== Theme.dark ? darkGrey : lightBluishGrey};
  }
`;

export const CardImg = styled.img``;
