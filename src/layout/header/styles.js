import styled, { css } from "styled-components";

import { Styles, FontWeight, Colors, Theme } from "constants/index";

import { RiMoonClearFill } from "react-icons/ri";

import { IoMdSunny } from "react-icons/io";

import { FaEye } from "react-icons/fa";

const { veryDarkGray, white } = Colors;

export const Container = styled.div`
  ${Styles.RBC}
  height: 4.5rem;
  width: 100%;
  background-color: ${({ theme: { current } }) =>
    current === Theme.dark ? veryDarkGray : white};
  padding: 0 2rem;
`;

export const Label = styled.p`
  font-size: 1.2rem;
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-weight: ${FontWeight.semiBold};
  cursor: pointer;
`;

const IconStyle = css`
  font-size: 1rem;
  cursor: pointer;
  color: ${white};
`;

export const Moon = styled(RiMoonClearFill)`
  ${IconStyle}
`;

export const Sun = styled(IoMdSunny)`
  ${IconStyle}
  font-size: 1.2rem;
  color: ${Colors.orange};
`;

export const Eye = styled(FaEye)`
  ${IconStyle}
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
`;

export const Row = styled.div`
  ${Styles.RBC}
`;

export const ViewCountContainer = styled.div`
  ${Styles.RBC}
  margin-left: 1.5rem;
  cursor: pointer;
`;

export const ContainerLabel = styled.p`
  font-size: 0.8rem;
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-weight: ${FontWeight.semiBold};
  margin-left: 0.5rem;
`;
