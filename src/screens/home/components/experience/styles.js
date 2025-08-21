import styled, { css } from "styled-components";

import {
  Styles,
  FontWeight,
  Colors,
  Theme,
  BREAKPOINTS,
} from "constants/index";

const { darkGrey, lightBluishGrey, orange, red } = Colors;

const ContainerStyles = css`
  width: 70vw;
  cursor: pointer;
  margin: auto;
  border-radius: 2.3rem;
  margin-bottom: 2rem;
  background: ${({ theme: { current } }) =>
    current === Theme.dark
      ? darkGrey
      : current === Theme.highContrast
      ? "yellow"
      : current === Theme.fire
      ? orange
      : current === Theme.love
      ? red
      : lightBluishGrey};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #000;
    `}
  ${({ theme: { current } }) =>
    (current === Theme.fire || current === Theme.love) &&
    css`
      color: #fff;
    `}
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 32%), 0 1px 1px 0 rgb(0 0 0 / 34%),
    0 1px 3px 0 rgb(0 0 0 / 32%);
  padding: 5rem 3.6rem;
  @media only screen and (max-width: ${BREAKPOINTS.xxl}) {
    width: 90vw;
    padding: 3rem;
    margin-top: 2rem;
  }
`;

export const Container = styled.div`
  ${ContainerStyles};
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    padding: 3rem 3rem 2rem !important;
  }
`;

export const Parent = styled.div`
  ${Styles.RBC}
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;

export const MParent = styled.div`
  ${Styles.RBC}
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const SParent = styled.div`
  ${Styles.RBC}
  flex-wrap:wrap;
  @media only screen and (min-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const Content = styled.div`
  cursor: pointer;
  ${({ id }) =>
    id < 8 &&
    css`
      margin-bottom: 2.4rem;
    `};
  ${Styles.CBC}
  width:20%;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 50%;
    ${({ id }) =>
      id < 12 &&
      css`
        margin-bottom: 1rem;
      `};
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    width: 50%;
    ${({ id }) =>
      id < 14 &&
      css`
        margin-bottom: 1rem;
      `};
  }
`;

export const Img = styled.img`
  width: 4.5rem;
  ${({ svImg }) =>
    svImg === 1 &&
    css`
  object-fit:contain;̦  
  `};
  border-radius: 6px;
  height: 4.5rem;
`;

export const Label = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.7rem;
  padding: 0px;
  line-height: 0px;
  margin-bottom: 0.6rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: ${FontWeight.regular};
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    font-size: 0.6rem;
    margin-bottom: 0.7rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.54rem;
  }
`;

export const Title = styled.p`
  text-align: center;
  margin-top: 0.1rem;
  font-size: 0.5rem;
  padding: 0rem 0.4rem;
  font-weight: ${FontWeight.light};
  opacity: 0.8;
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    font-size: 0.5rem;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
  }
`;
