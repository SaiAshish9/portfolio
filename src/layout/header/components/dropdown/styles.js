import styled from "styled-components";

import { Theme, Colors, FontWeight, Styles } from "constants/index";

import { IoIosArrowDown } from "react-icons/io";

import { GoMute, GoUnmute } from "react-icons/go";

const { veryDarkGray, white } = Colors;

export const Container = styled.div`
  cursor: pointer;
  ${Styles.RBC}
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
