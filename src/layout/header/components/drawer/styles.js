import styled, { css } from "styled-components";

import { Drawer } from "antd";

import { MdClose } from "react-icons/md";

import { Styles, Theme, Colors, FontWeight } from "constants/index";

const { veryDarkGray, white, darkGrey, lightBluishGrey } = Colors;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    height: 72vh !important;
  }
  .ant-drawer-content {
    background: ${({ theme: { current } }) =>
      current === Theme.dark ? darkGrey : white} !important;
  }
`;

export const Container = styled.div`
  ${Styles.CBB}
`;

export const CloseIcon = styled(MdClose)`
  font-size: 1.26rem;
  align-self: flex-end;
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  cursor: pointer;
`;

export const Label = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-size: 1rem;
  font-weight: ${FontWeight.medium};
  margin: 1rem 0;
`;

export const Content = styled.div`
  padding: 1rem 0;
  width: 47%;
  ${Styles.CCC}
  margin: 0.5rem 0;
  ${({ active }) =>
    active &&
    css`
      border: 2px solid
        ${({ theme: { current } }) =>
          current !== Theme.dark ? darkGrey : white};
      border-radius: 5px;
    `}
`;

export const LanguageContainer = styled.div`
  ${Styles.RBC}
  flex-wrap: wrap;
`;

export const Icon = styled.p`
  font-size: 2.1rem;
`;

export const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const Title = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-size: 0.75rem;
  font-weight: ${FontWeight.medium};
`;

export const MusicImg = styled.img`
  width: 1.6rem;
  height: 2.5rem;
`;

export const Row = styled.div`
  ${Styles.RBC}
`;
