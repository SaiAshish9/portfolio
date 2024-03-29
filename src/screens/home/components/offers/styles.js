import styled, { css } from "styled-components";

import { Styles, BREAKPOINTS } from "constants/index";

import { AiFillHeart } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  margin-top: 4.5rem;
`;

export const Label = styled.p(
  ({ m }) => css`
    font-size: 1.08rem;
    text-align: center;
    @media only screen and (max-width: ${BREAKPOINTS.lg}) {
      ${m &&
      css`
        margin-bottom: 1.8rem;
      `}
    }
    @media only screen and (max-width: ${BREAKPOINTS.xs}) {
      font-size: 0.9rem;
      margin-bottom: 1.8rem;
      padding: 0 1rem;
    }
  `
);

export const ImgContainer = styled.div`
  ${Styles.RAC};
  margin: 2.7rem auto 0;
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    display: none;
  } ;
`;

export const MediumImgContainer = styled.div`
  ${Styles.RAC};
  margin: 1.2rem auto 0;
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    display: none;
  }
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    width: 72%;
  }
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 90%;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    display: none;
    width: 100%;
  } ;
`;

export const SmallImgContainer = styled.div`
  ${Styles.RAC};
  margin: 0.9rem auto 0;
  padding: 0 3rem;
  @media only screen and (min-width: ${BREAKPOINTS.sm}) {
    display: none;
    padding: 0px 2.7rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    padding: 0px 2.7rem;
    margin: 0.9rem 0.4rem 0;
  }
`;

export const Img = styled.img`
  height: 3.6rem;
  width: 3.6rem;
  border-radius: 0.2rem;
  cursor: pointer;
  margin: 0 0.2rem;
  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    height: 3.2rem;
    width: 3.2rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    height: 3.2rem;
    width: 3.2rem;
    margin: 0 0.2rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    height: 2.4rem;
    width: 2.4rem;
    margin: 0 0.2rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    height: 2.4rem;
    width: 2.4rem;
    margin: 0 0.2rem;
  }
  @media only screen and (max-width: 400px) {
    height: 2.1rem;
    width: 2.1rem;
    margin: 0 0.2rem;
  }
  @media only screen and (max-width: 350px) {
    height: 1.8rem;
    width: 1.8rem;
    margin: 0 0.2rem;
  }
  @media only screen and (max-width: 300px) {
    height: 1.6rem;
    width: 1.6rem;
    margin: 0 0.2rem;
  }
`;

export const Center = styled.div`
  margin: 5.4rem auto 4.5rem;
  ${Styles.RCC};
  position: relative;
  height: 14rem;
  cursor: pointer;
  width: 14rem;
  @media only screen and (max-width: ${BREAKPOINTS.xs}) {
    margin: 4.23rem auto 2.7rem;
  }
`;

export const HeartImage = styled.img`
  height: 14rem;
  width: 14rem;
  position: relative;
  top: 0.6rem;
`;

export const HeartSubImage = styled.img`
  height: 5.4rem;
  width: 5.4rem;
  position: absolute;
`;

export const HeartIcon = styled(AiFillHeart)`
  position: absolute;
  z-index: 3;
`;
