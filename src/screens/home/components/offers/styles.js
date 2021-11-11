import styled from "styled-components";

import {
  Colors,
  FontWeight,
  Theme,
  Styles,
  BREAKPOINTS,
} from "constants/index";

const { veryDarkGray, white } = Colors;

export const Container = styled.div`
  width: 100%;
  margin-top: 4.5rem;
`;

export const Label = styled.p`
  font-size: 1.08rem;
  text-align: center;
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-weight: ${FontWeight.semiBold};
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    font-size: 0.9rem;
    margin-bottom: 1.8rem;
    padding: 0 1rem;
  }
`;

export const ImgContainer = styled.div`
  ${Styles.RAC};
  margin: 2.7rem auto 0;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  };
`;

export const MediumImgContainer = styled.div`
  ${Styles.RAC};
  margin: 2.7rem auto 0;
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  };
`;

export const SmallImgContainer = styled.div`
  ${Styles.RAC};
  margin: 2.7rem auto 0;
  padding: 0 3rem;
  @media only screen and (min-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    padding: 0px 2.7rem;
    margin: 0.9rem auto 0;
  }
`;

export const Img = styled.img`
  height: 5.4rem;
  width: 5.4rem;
  border-radius: 0.2rem;
  cursor: pointer;
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    height: 5.4rem;
    width: 5.4rem;
  }
`;
