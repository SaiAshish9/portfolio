import styled from "styled-components";

import { Styles, Colors, FontWeight, Theme } from "constants/index";

const { veryDarkGray, white } = Colors;

export const Container = styled.div`
  ${Styles.RBC}
  padding:6rem 18rem;
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
  font-size: 1.1rem;
`;

export const SubTitle = styled.p`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  opacity: 0.7;
  font-weight: ${FontWeight.medium};
  font-size: 1rem;
`;

export const ImgContainer = styled.div`
  text-align: center;
  width: 24rem;
`;
