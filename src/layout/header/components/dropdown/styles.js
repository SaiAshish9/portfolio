import styled from "styled-components";

import {
  Theme,
  Colors,
  FontWeight,
  Styles,
  BREAKPOINTS,
} from "constants/index";

import { Menu } from "antd";

import { IoIosArrowDown } from "react-icons/io";

const { veryDarkGray, white, darkGrey, lightBluishGrey } = Colors;

export const Container = styled.div`
  cursor: pointer;
  ${Styles.RBC}
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const Label = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-weight: ${FontWeight.medium};
  ${Styles.RBC}
`;

export const Icon = styled(IoIosArrowDown)`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-size: 1rem;
  margin-left: 0.5rem;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const StyledMenuItem = styled(Menu.Item)`
  background: ${({ theme: { current }, active }) =>
    current === Theme.dark
      ? active
        ? darkGrey
        : veryDarkGray
      : active
      ? lightBluishGrey
      : white};
  padding: 1rem !important;
  :hover {
    background: ${({ theme: { current } }) =>
      current === Theme.dark ? darkGrey : lightBluishGrey};
  }
`;

export const StyledMenu = styled(Menu)`
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? veryDarkGray : white};
  max-height: 50vh;
  overflow-y: scroll;
`;

export const MenuAvatar = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 10px;
  margin-right: 1rem;
`;

export const Title = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-weight: ${FontWeight.light};
`;

export const MenuContent = styled.div`
  ${Styles.RBC}
  margin-right: 1.8rem;
  justify-content: flex-start;
`;

export const Content = styled.div``;

export const SubTitle = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
`;

export const LangugageIcon = styled.span`
  margin-right: 0.5rem;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const LanguageContent = styled.span`
  font-weight: ${FontWeight.regular};
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 1.6rem;
  height: 2.5rem;
`;

export const Row = styled.div`
  ${Styles.RBC}
`;
