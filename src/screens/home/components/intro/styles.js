import styled, { css } from "styled-components";

import {
  Styles,
  Colors,
  FontWeight,
  Theme,
  BREAKPOINTS,
} from "constants/index";

const { veryDarkGray, white } = Colors;

export const Container = styled.div`
  ${Styles.RBC}
  padding:6rem 24rem;
  @media only screen and (max-width: ${BREAKPOINTS.xxl}) {
    padding: 6rem 15rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.xl}) {
    padding: 6rem 8rem;
  }
  @media only screen and (max-width: ${BREAKPOINTS.lg}) {
    ${Styles.CBC}
    padding: 1rem 0px !important;
  }
`;

export const AvatarImg = styled.img`
  height: 21rem;
  width: 24rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    width: 70vw;
    height: auto;
    margin: auto;
    margin-bottom: 1rem;
  }
`;

export const Label = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-weight: ${FontWeight.semiBold};
  margin-bottom: 0.5rem;
  font-size: 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }
`;

export const SubTitle = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  opacity: 0.7;
  font-weight: ${FontWeight.medium};
  font-size: 0.8rem;
`;

export const ImgContainer = styled.div`
  text-align: center;
  width: 24rem;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin-top: -2.7rem;
  }
`;

export const InfoContainer = styled.div`
  padding-top: 4rem;
  width: 24rem;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    width: 90vw;
    margin: auto;
    overflow-x: hidden;
    padding-top: 2rem;
  }
`;

export const InfoImg = styled.div`
  width: 2rem;
  ${Styles.RCC}
`;

export const InfoText = css`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  opacity: 0.7;
  margin-left: 1rem;
  font-size: 0.8rem;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    font-size: 0.72rem;
  }
`;

export const InfoLabel = styled.p`
  ${InfoText}
`;

export const InfoLink = styled.a`
  ${InfoText}
  text-decoration: underline;
`;

export const InfoItem = styled.div`
  ${Styles.RBC}
  justify-content:flex-start;
  margin: 1.4rem 0;
  position: relative;
`;
