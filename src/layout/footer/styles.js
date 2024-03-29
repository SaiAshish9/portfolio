import styled, { css } from "styled-components";

import { Styles, FontWeight } from "constants/index";

import { CgMail } from "react-icons/cg";

import { AiFillGithub } from "react-icons/ai";

export const Container = styled.div`
  ${Styles.RBC}
  justify-content: flex-start;
  width: 100%;
  padding: 2rem;
  height: 5rem;
`;

export const fontStyle = css`
  font-size: 1rem;
  font-weight: ${FontWeight.regular};
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
