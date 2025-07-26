import styled, { css } from "styled-components";

import {
  Theme,
  Colors,
  FontWeight,
  Styles,
  BREAKPOINTS,
} from "constants/index";

import { Dropdown, Menu } from "antd";

import { IoIosArrowDown } from "react-icons/io";

const {
  veryDarkGray,
  white,
  darkGrey,
  lightBluishGrey,
  lightOrange,
  orange,
  yellow,
  blue,
  lightPink,
  red,
} = Colors;

export const StyledDropdown = styled(Dropdown)``;

export const Container = styled.div(
  ({ isPathDsa }) => css`
    ${!isPathDsa &&
    `    cursor: pointer;
    `};
    .ant-dropdown-menu-item:hover,
    .ant-dropdown-menu-submenu-title:hover,
    .ant-dropdown-menu-item.ant-dropdown-menu-item-active,
    .ant-dropdown-menu-item.ant-dropdown-menu-submenu-title-active,
    .ant-dropdown-menu-submenu-title.ant-dropdown-menu-item-active,
    .ant-dropdown-menu-submenu-title.ant-dropdown-menu-submenu-title-active {
      background-color: transparent !important;
    }

    @media only screen and (max-width: ${BREAKPOINTS.sm}) {
      display: none;
    }
    ${Styles.RBC}
  `
);

export const Label = styled.p`
  font-weight: ${FontWeight.medium};
  ${Styles.RBC}
`;

export const Icon = styled(IoIosArrowDown)`
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
      : current === Theme.light
      ? active
        ? lightBluishGrey
        : white
      : current === Theme.highContrast
      ? active
        ? blue
        : yellow
      : current === Theme.fire
      ? active
        ? orange
        : lightOrange
      : current === Theme.love && active
      ? red
      : lightPink};
  padding: 1rem !important;
  ${({ theme: { current }, active }) =>
    (current === Theme.fire ||
      current === Theme.love ||
      current === Theme.dark) &&
    active &&
    css`
      color: #fff;
    `}
  ${({ theme: { current } }) =>
    current === Theme.dark &&
    css`
      color: #fff;
    `}
  :hover {
    background: ${({ theme: { current } }) =>
      current === Theme.dark
        ? darkGrey
        : current === Theme.highContrast
        ? blue
        : lightBluishGrey} !important;
    ${({ theme: { current } }) =>
      current === Theme.fire &&
      css`
        background: ${orange} !important;
        color: #fff;
      `}
    ${({ theme: { current } }) =>
      current === Theme.love &&
      css`
        background: ${red} !important;
        color: #fff;
      `}
      ${({ theme: { current } }) =>
      current === Theme.dark &&
      css`
        color: #fff;
      `}
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
  font-weight: ${FontWeight.light};
`;

export const MenuContent = styled.div`
  ${Styles.RBC}
  margin-right: 1.8rem;
  justify-content: flex-start;
`;

export const Content = styled.div``;

export const SubTitle = styled.p``;

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
