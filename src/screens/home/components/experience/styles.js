import styled from "styled-components";

import { Styles, FontWeight, Colors, Theme } from "constants/index";

const { darkGrey, lightBluishGrey } = Colors;

export const Container = styled.div`
  padding: 0 5rem;
  height: 18rem;
  width: 70vw;
  margin: auto;
  border-radius: 2.3rem;
  margin-bottom: 2rem;
  ${Styles.RBC}
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? darkGrey : lightBluishGrey};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 32%), 0 1px 1px 0 rgb(0 0 0 / 34%),
    0 1px 3px 0 rgb(0 0 0 / 32%);
`;

export const Content = styled.div`
  cursor: pointer;
`;

export const Img = styled.img`
  width: 7rem;
  border-radius: 6px;
`;

export const Label = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 1rem;
  padding: 0px;
  line-height: 0px;
  font-weight: ${FontWeight.medium};
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? darkGrey : lightBluishGrey};
`;
