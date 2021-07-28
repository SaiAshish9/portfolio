import styled, { css } from "styled-components";

import {
  Styles,
  FontWeight,
  Colors,
  Theme,
  BREAKPOINTS,
} from "constants/index";

const { darkGrey, lightBluishGrey } = Colors;

const ContainerStyles = css`
  width: 70vw;
  margin: auto;
  border-radius: 2.3rem;
  margin-bottom: 2rem;
  ${Styles.RBC}
  background: ${({ theme: { current } }) =>
    current === Theme.dark ? darkGrey : lightBluishGrey};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 32%), 0 1px 1px 0 rgb(0 0 0 / 34%),
    0 1px 3px 0 rgb(0 0 0 / 32%);
  padding: 5rem;
  @media only screen and (max-width: ${BREAKPOINTS.xxl}) {
    width: 90vw;
    padding: 3rem;
  }
`;

export const Container = styled.div`
  ${ContainerStyles}
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
`;

export const MContainer = styled.div`
  ${ContainerStyles}
  flex-direction:column;
  padding: 3rem 3rem 2rem !important;
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const SContainer = styled.div`
  ${ContainerStyles}
  flex-direction:column;
  padding: 3rem 1rem 1rem !important;
  width: 100vw !important;
  margin-top: 1.5rem;
  @media only screen and (min-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

export const Content = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  ${Styles.CBB}
`;

export const ParentContainer = styled.div`
  ${Styles.RAC}
  width: 100%;
  margin-bottom: 1rem;
`;

export const Img = styled.img`
  width: 7rem;
  border-radius: 6px;
  min-height: 7rem;
`;

export const Label = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 1rem;
  padding: 0px;
  line-height: 0px;
  font-weight: ${FontWeight.medium};
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? darkGrey : lightBluishGrey};
`;
