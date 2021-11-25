import styled from "styled-components";
import { Styles, BREAKPOINTS } from "constants/index";

export const Container = styled.div`
  padding-top: 4.5rem;
`;

export const Content = styled.div`
  min-height: calc(100vh - 9.5rem);
  ${Styles.RBC};
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 2rem;
  padding-top: 36vh;
`;

export const Label = styled.p`
  font-size: 1.2rem;
  @media only screen and (min-width: ${BREAKPOINTS.xs}) {
    font-size: 1rem;
  }
`;

export const SmallLabel = styled.p`
  font-size: 1rem;
  text-align: center;
  @media only screen and (min-width: ${BREAKPOINTS.xs}) {
    font-size: 0.8rem;
  }
`;
