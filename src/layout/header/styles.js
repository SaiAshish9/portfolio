import styled, { css } from "styled-components";

import {
  Styles,
  FontWeight,
  Colors,
  Theme,
  BREAKPOINTS,
} from "constants/index";

import { RiMoonClearFill } from "react-icons/ri";

import { IoMdSunny } from "react-icons/io";

import { IoColorPalette } from "react-icons/io5";

import { FaEye } from "react-icons/fa";

import { GoMute, GoUnmute } from "react-icons/go";

import { AiFillFire, AiFillHeart } from "react-icons/ai";

import { SiVisualstudiocode } from "react-icons/si";

const { veryDarkGray, white, darkGrey, lightBluishGrey } = Colors;

export const Container = styled.div`
  ${Styles.RBC}
  height: 4.5rem;
  width: 100%;
  background-color: ${({ theme: { current } }) =>
    current === Theme.dark
      ? veryDarkGray
      : current === Theme.love
      ? "#F3D1F4"
      : current === Theme.highContrast
      ? "#000"
      : current === Theme.fire
      ? "#FFED99"
      : white};
  padding: 0 2rem;
  position: fixed;
  top: 0;
  z-index: 100;
  ${({ scrolled }) =>
    scrolled &&
    css`
      -webkit-box-shadow: 0 3px 5px
        ${({ theme: { current } }) =>
          current === Theme.dark
            ? darkGrey
            : current === Theme.highContrast
            ? "#18ebff"
            : lightBluishGrey};
      -moz-box-shadow: 0 3px 5px
        ${({ theme: { current } }) =>
          current === Theme.dark
            ? darkGrey
            : current === Theme.highContrast
            ? "#18ebff"
            : lightBluishGrey};
      box-shadow: 0 3px 5px
        ${({ theme: { current } }) =>
          current === Theme.dark
            ? darkGrey
            : current === Theme.highContrast
            ? "#18ebff"
            : current === Theme.love || current === Theme.fire
            ? "transparent"
            : lightBluishGrey};
    `}
`;

export const Label = styled.p`
  font-size: 1.2rem;
  cursor: pointer;
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    display: none;
  }
`;

export const SmallLabel = styled.p`
  font-size: 1rem;
  font-weight: ${FontWeight.regular};
  cursor: pointer;
  @media only screen and (min-width: ${BREAKPOINTS.xs}) {
    display: none;
  }
`;

const IconStyle = css`
  font-size: 1rem;
  cursor: pointer;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.8rem;
  }
`;

export const Moon = styled(RiMoonClearFill)`
  ${IconStyle}
  margin-left:${({ ismuted }) => (ismuted ? "1rem" : 0)};
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin-left: 0;
  }
`;

export const Sun = styled(IoMdSunny)`
  ${IconStyle}
  font-size: 1.2rem;
  color: ${Colors.orange};
  margin-left: ${({ ismuted }) => (ismuted ? "1rem" : 0)};
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin-left: 0;
  }
`;

export const Heart = styled(AiFillHeart)`
  ${IconStyle}
  font-size: 1.2rem;
  margin-left: ${({ ismuted }) => (ismuted ? "1rem" : 0)};
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin-left: 0;
  }
`;

export const ColorPalette = styled(IoColorPalette)`
  ${IconStyle}
  font-size: 1.2rem;
  margin-left: ${({ ismuted }) => (ismuted ? "1rem" : 0)};
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin-left: 0;
  }
`;

export const Fire = styled(AiFillFire)`
  ${IconStyle}
  font-size: 1.2rem;
  margin-left: ${({ ismuted }) => (ismuted ? "1rem" : 0)};
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin-left: 0;
  }
`;

export const Eye = styled(FaEye)`
  ${IconStyle}
`;

export const Mute = styled(GoMute)`
  ${IconStyle}
  margin-right:1.5rem;
  font-size: 1.2rem;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.95rem;
    margin-right: 1rem;
    display: none;
  }
`;

export const UnMute = styled(GoUnmute)`
  ${IconStyle}
  margin-right:1.5rem;
  font-size: 1.2rem;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.95rem;
    margin-right: 1rem;
    display: none;
  }
`;

export const SMute = styled(GoMute)`
  ${IconStyle}
  margin-right:1.5rem;
  font-size: 0.95rem !important;
  margin-right: 1rem;
  @media only screen and (min-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const SUnMute = styled(GoUnmute)`
  ${IconStyle}
  margin-right:1.5rem;
  font-size: 0.95rem !important;
  margin-right: 1rem;
  @media only screen and (min-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const Row = styled.div`
  ${Styles.RBC}
`;

export const ViewCountContainer = styled.div`
  ${Styles.RBC}
  margin: 0 1.5rem;
  cursor: pointer;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin-right: 0;
    margin-left: 1rem;
  }
`;

export const ContainerLabel = styled.p`
  font-size: 0.8rem;
  font-weight: ${FontWeight.regular};
  margin-left: 0.5rem;
`;

export const Player = styled.div`
  position: absolute;
  z-index: -1;
`;

export const SLanguageIcon = styled.span`
  margin-right: 0rem;
  margin-left: 0.7rem;
  @media only screen and (min-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const DsaIcon = styled(SiVisualstudiocode)`
  margin-right: 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin-right: 1rem;
    font-size: 0.81rem;
  }
`;
