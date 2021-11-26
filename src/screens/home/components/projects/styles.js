import styled, { css } from "styled-components";

import { Tabs } from "antd";

import {
  Colors,
  Styles,
  BREAKPOINTS,
  Theme,
  FontWeight,
} from "constants/index";

const {
  veryDarkGray,
  white,
  blue,
  black,
  lightBluishGrey,
  darkGrey,
  red,
  lightPink,
  orange,
  lightOrange,
} = Colors;

export const Img = styled.img`
  height: 15rem;
  width: 90%;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    height: 14rem;
  }
`;

export const Container = styled.div`
  width: 70vw;
  margin: 4rem auto;
  min-height: 24rem;
  ${Styles.RCC} @media only screen and
    (max-width: ${BREAKPOINTS.lg}) {
    width: 100vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    width: 100vw;
    margin: 0rem 0;
    .ant-tabs-nav -list {
      width: 100vw !important;
    }
    .ant-tabs-nav-operations {
      display: none !important;
    }
  }
`;

export const PlayPauseBtn = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background: ${({ theme: { current } }) =>
    current === Theme.dark
      ? darkGrey
      : current === Theme.love
      ? red
      : current === Theme.highContrast
      ? blue
      : current === Theme.fire
      ? orange
      : lightBluishGrey};
  color: ${({ theme: { current } }) =>
    current === Theme.dark
      ? lightBluishGrey
      : current === Theme.love
      ? lightPink
      : current === Theme.highContrast
      ? black
      : current === Theme.fire
      ? lightOrange
      : darkGrey};
  position: absolute;
  top: 41%;
  opacity: 0.7;
  font-size: 1.6rem;
  ${Styles.RCC};
  :hover {
    opacity: 0.4;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    top: 36%;
  }
`;

export const PlayerContainer = styled.div`
  width: 32vw;
  min-height: 16rem;
  padding: 1rem 0;
  cursor: pointer;
  position: relative;
  ${Styles.CBC}
  margin: auto;
  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    width: 75%;
  }
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
    padding-top: 1rem;
    height: 14rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    width: 100vw;
    padding: 1rem 0 2rem;
    height: 20rem;
  }
`;

export const StreamsTab = styled(Tabs)`
  margin: 30px 0;
  padding: 0;
  padding-right: 15px;

  .ant-tabs-nav-list {
    width: 80vw;
  }

  .ant-tabs-nav::before {
    width: 80vw;
    margin: auto;
  }

  .ant-tabs-tab {
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
    font-size: 1rem;
    width: 27vw;
    text-align: center;
    display: grid;
    place-items: center;
    font-weight: 300;
  }

  .ant-tabs-nav::before {
    border-color: ${({ theme: { current } }) =>
      current === Theme.dark
        ? veryDarkGray
        : current === Theme.highContrast
        ? "yellow"
        : current === Theme.love || current === Theme.fire
        ? "transparent"
        : white} !important;
  }

  .ant-tabs-tab:hover,
  .ant-tabs-tab.ant-tabs-tab-active,
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn,
  .ant-tabs-tab-btn:focus {
    color: ${({ theme: { current } }) =>
      current === Theme.light
        ? veryDarkGray
        : current === Theme.love
        ? "red"
        : current === Theme.highContrast
        ? "#18ebff"
        : current === Theme.fire
        ? "#FF7600"
        : white};
  }

  .ant-tabs-ink-bar {
    background-color: ${({ theme: { current } }) =>
      current === Theme.light
        ? veryDarkGray
        : current === Theme.love
        ? "#eb4031"
        : current === Theme.highContrast
        ? "yellow"
        : current === Theme.fire
        ? "#FF7600"
        : white};
    height: 3px !important;
  }

  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 0 20px 0 15px;

    .ant-tabs-nav-list,
    .ant-tabs-nav::before {
      width: 40vw;
      margin: auto;
    }

    .ant-tabs-tab {
      font-size: 1.2rem;
      width: 13vw;
    }
  }

  @media only screen and (min-width: ${BREAKPOINTS.xl}) {
    .ant-tabs-nav-list,
    .ant-tabs-nav::before {
      width: 30vw;
    }

    .ant-tabs-tab {
      width: 10vw;
    }
  }
`;

export const Label = styled.a`
  text-align: center;
  text-decoration: underline;
  font-size: 1rem;
  ${Styles.RBC}
  padding: 0px;
  position: relative;
  font-weight: ${FontWeight.medium};
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
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    bottom: 3.5rem !important;
  }
  ${({ addMarginTop }) =>
    addMarginTop &&
    css`
      @media only screen and (max-width: ${BREAKPOINTS.xs}) {
        margin-top: 1.4rem !important;
      }
    `}
`;

export const Content = styled.div`
  width: 100%;
  ${Styles.CBC}
`;

export const Span = styled.span`
  margin-left: 0.36rem;
  font-weight: ${FontWeight.regular};
`;
