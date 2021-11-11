import styled from "styled-components";

import { Styles, BREAKPOINTS } from "constants/index";

export const Container = styled.div`
  padding: 2rem 0 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    display: none;
  }
`;

export const MContainer = styled.div`
  padding: 2rem;
  @media only screen and (min-width: ${BREAKPOINTS.xs}) {
    display: none;
  }
`;

export const Row = styled.div`
  ${Styles.RBC}
  width: 70vw;
  margin: 0rem auto 3rem;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 80vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 90vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    width: 100%;
  }
`;

export const Img = styled.img`
  height: 4rem;
  width: 4rem;
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    height: 2.4rem;
    width: 2.4rem;
  }
`;
