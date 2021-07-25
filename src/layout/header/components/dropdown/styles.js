import styled from "styled-components";

import {
  Theme,
  Colors,
  FontWeight,
  Styles,
  BREAKPOINTS,
} from "constants/index";

import { IoIosArrowDown } from "react-icons/io";

const { veryDarkGray, white } = Colors;

export const Container = styled.div`
  cursor: pointer;
  ${Styles.RBC}
  @media only screen and (max-width:${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const Label = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-weight: ${FontWeight.medium};
`;

export const Icon = styled(IoIosArrowDown)`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-size: 1rem;
  margin-left: 0.5rem;
`;
