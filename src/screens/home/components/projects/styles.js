import styled, { css } from "styled-components";

import { Tabs } from "antd";

import {
  Colors,
  Styles,
  BREAKPOINTS,
  Theme,
  FontWeight,
} from "constants/index";

const { veryDarkGray, white, lightBluishGrey, darkGrey } = Colors;

export const Img = styled.img``;

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
    current === Theme.dark ? darkGrey : lightBluishGrey};
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? darkGrey : lightBluishGrey};
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
  min-height: 19rem;
  padding-top: 1rem;
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
    height: 21rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    width: 100vw;
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
      current !== Theme.dark ? veryDarkGray : white};
    font-size: 1rem;
    width: 27vw;
    text-align: center;
    display: grid;
    place-items: center;
    font-weight: 300;
  }

  .ant-tabs-nav::before {
    border-color: ${({ theme: { current } }) =>
      current === Theme.dark ? veryDarkGray : white} !important;
  }

  .ant-tabs-tab:hover,
  .ant-tabs-tab.ant-tabs-tab-active,
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn,
  .ant-tabs-tab-btn:focus {
    color: ${({ theme: { current } }) =>
      current !== Theme.dark ? veryDarkGray : white};
  }

  .ant-tabs-ink-bar {
    background-color: ${({ theme: { current } }) =>
      current !== Theme.dark ? veryDarkGray : white};
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
  margin-top: 0.63rem;
  text-decoration: underline;
  font-size: 1rem;
  ${Styles.RBC}
  padding: 0px;
  position: relative;
  font-weight: ${FontWeight.medium};
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? darkGrey : lightBluishGrey};
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    bottom: 3.5rem !important;
  }
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    ${({ addMarginTop }) =>
      addMarginTop &&
      css`
        margin-top: 1.8rem !important;
      `}
  }
`;

export const Content = styled.div`
  width: 100%;
  ${Styles.CBC}
`;

export const Span = styled.span`
  margin-left: 0.36rem;
  font-weight: ${FontWeight.regular};
`;
