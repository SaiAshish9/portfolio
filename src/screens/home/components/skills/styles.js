import styled from "styled-components";

import { BREAKPOINTS } from "constants/index";

export const Container = styled.div`
  padding: 4.5rem 0 0.8rem;
  min-width: 100vw;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    padding: 0rem;
  }
`;

export const Img = styled.img`
  width: 15rem !important;
  height: 5rem;
  object-fit: contain;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    height: 3rem;
    width: 10rem !important;
  }
`;

export const LargeSlider = styled.div`
  width: 100%;
  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    display: none;
  }
`;

export const SmallSlider = styled.div`
  width: 100%;
  @media only screen and (min-width: ${BREAKPOINTS.xl}) {
    display: none;
  }
`;
