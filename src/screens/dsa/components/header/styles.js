import styled from "styled-components";

import { Styles, BREAKPOINTS } from "constants/index";

export const Container = styled.div`
  ${Styles.RBC};
  flex-direction: column;
  justify-content: flex-start;
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
  margin: 0.36rem 0;
  @media only screen and (min-width: ${BREAKPOINTS.xs}) {
    font-size: 0.8rem;
  }
`;
