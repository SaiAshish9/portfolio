import styled from "styled-components";

import { Drawer } from "antd";

import { MdClose } from "react-icons/md";

import { Styles, Theme, Colors, FontWeight } from "constants/index";

const { veryDarkGray, white, darkGrey } = Colors;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    height: 69vh !important;
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
`;

export const Label = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-size: 1rem;
  font-weight: ${FontWeight.medium};
`;
