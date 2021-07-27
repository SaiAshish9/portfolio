import styled, { css } from "styled-components";

import {
  Colors,
  BREAKPOINTS,
  Theme,
  Styles,
  FontWeight,
} from "constants/index";

import { CgMail } from "react-icons/cg";

import { AiFillGithub } from "react-icons/ai";

const { veryDarkGray, white } = Colors;

export const Container = styled.div`
  ${Styles.RBC}
  justify-content: flex-start;
  width: 100%;
  padding: 2rem;
`;

export const fontStyle = css`
  color: ${({ theme: { current } }) =>
    current !== Theme.dark ? veryDarkGray : white};
  font-size: 1rem;
  font-weight: ${FontWeight.medium};
  cursor: pointer;
`;

export const Label = styled.p`
  ${fontStyle}
`;

export const MailIcon = styled(CgMail)`
  ${fontStyle}
  font-size: 1.2rem;
  margin-left: 1rem;
`;

export const GithunIcon = styled(AiFillGithub)`
  ${fontStyle}
  margin-left: 1rem;
`;
