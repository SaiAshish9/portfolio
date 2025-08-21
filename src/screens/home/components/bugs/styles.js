import styled from "styled-components";

import { Styles, BREAKPOINTS } from "constants/index";

export const Container = styled.div`
  padding: 1rem 0 0rem;
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    display: none;
  }
  @media only screen and (min-width: ${BREAKPOINTS.md}) {
    margin-top: 1rem;
  }
`;

export const MContainer = styled.div`
  padding: 0rem 0 -1rem;
  margin-bottom: -2.7rem;
  @media only screen and (min-width: ${BREAKPOINTS.xs}) {
    display: none;
  }
`;

export const Row = styled.div`
  ${Styles.RBC}
  width: 50vw;
  margin: 0rem auto 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 80vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 90vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    width: 90%;
  }
`;

export const RowSA = styled.div`
  ${Styles.RAC}
  width: 70vw;
  margin: 0rem auto 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 80vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 90vw;
  }
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    width: 90%;
  }
`;

export const Img = styled.img`
  height: 4rem;
  cursor: pointer;
  width: 4rem;
  border-radius: 0.4rem;
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 0.24rem;
  }
`;
