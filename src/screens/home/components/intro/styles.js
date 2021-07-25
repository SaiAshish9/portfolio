import styled, { css } from "styled-components";

import { Styles, Colors, FontWeight, Theme } from "constants/index";

const { veryDarkGray, white } = Colors;

export const Container = styled.div`
  ${Styles.RBC}
  padding:6rem 27rem;
`;

export const AvatarImg = styled.img`
  height: 21rem;
  width: 24rem;
  margin-bottom: 1rem;
`;

export const Label = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-weight: ${FontWeight.semiBold};
  margin-bottom: 0.5rem;
  font-size: 1rem;
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
`;

export const InfoContainer = styled.div`
  padding-top: 4rem;
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
`;
