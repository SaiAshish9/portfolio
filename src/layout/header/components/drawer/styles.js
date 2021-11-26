import styled, { css } from "styled-components";

import { Drawer } from "antd";

import { MdClose } from "react-icons/md";

import { IoMusicalNotesSharp } from "react-icons/io5";

import { Styles, Theme, Colors, FontWeight } from "constants/index";

const { veryDarkGray, white, blue } = Colors;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    height: 72vh !important;
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
      border-radius: 10px;
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
  }
  .ant-drawer-content {
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
`;

export const Container = styled.div`
  ${Styles.CBB}
`;

export const CloseIcon = styled(MdClose)`
  font-size: 1.26rem;
  align-self: flex-end;
  cursor: pointer;
`;

export const Label = styled.p`
  font-size: 1rem;
  font-weight: ${FontWeight.medium};
  margin: 1rem 0;
  display: flex;
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
          current === Theme.light
            ? veryDarkGray
            : current === Theme.love
            ? "#eb4031"
            : current === Theme.highContrast
            ? blue
            : current === Theme.fire
            ? "#FF7600"
            : white};
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
  font-size: 0.75rem;
  ${Styles.RBC};
  font-weight: ${FontWeight.medium};
`;

export const MusicImg = styled.img`
  width: 1.6rem;
  height: 2.5rem;
`;

export const Row = styled.div`
  ${Styles.RBC}
`;

export const StyledMusicIcon = styled(IoMusicalNotesSharp)`
  position: relative;
  bottom: 0.027rem;
  margin-right: 0.5rem;
`;
