import styled, { css } from "styled-components";
import { Styles, Theme, Colors, BREAKPOINTS } from "constants/index";

const { veryDarkGray, white, blue } = Colors;

export const Container = styled.div`
  padding-top: 4.5rem;
`;

export const Content = styled.div`
  min-height: calc(100vh - 9.5rem);
  padding: 0 2rem;
  padding-top: 1rem;
`;

export const Button = styled.div`
  border-radius: 0.36rem;
  text-align: center;
  padding: 0.2rem 0.4rem;
  ${Styles.RCC};

  overflow: hidden;
  // white-space: nowrap;
  // text-overflow: ellipsis;

  cursor: pointer;
  margin-right: 1rem;
  margin-bottom: 0.8rem;
  border: 1px solid
    ${({ theme: { current } }) =>
      current === Theme.light
        ? veryDarkGray
        : current === Theme.love
        ? "#eb4031"
        : current === Theme.highContrast
        ? "yellow"
        : current === Theme.fire
        ? "#FF7600"
        : white};
  background: ${({ theme: { current } }) =>
    current === Theme.dark
      ? veryDarkGray
      : current === Theme.love
      ? "#fff"
      : current === Theme.highContrast
      ? "#000"
      : current === Theme.fire
      ? "#fff"
      : white};
  ${({ active }) =>
    active === 1 &&
    css`
      border: 1px solid
        ${({ theme: { current } }) =>
          current === Theme.light
            ? veryDarkGray
            : current === Theme.love
            ? "#eb4031"
            : current === Theme.highContrast
            ? blue
            : current === Theme.fire
            ? "#FF7600"
            : white};
      background: ${({ theme: { current } }) =>
        current === Theme.light
          ? veryDarkGray
          : current === Theme.love
          ? "#eb4031"
          : current === Theme.highContrast
          ? blue
          : current === Theme.fire
          ? "#FF7600"
          : white};
      color: ${({ theme: { current } }) =>
        current === Theme.dark
          ? veryDarkGray
          : current === Theme.love
          ? "#F3D1F4"
          : current === Theme.highContrast
          ? "#000"
          : current === Theme.fire
          ? "#FFED99"
          : white};
    `};
`;

export const BtnContainer = styled.div`
  margin-top: 1rem;
  ${Styles.RCC};
  flex-wrap: wrap;
  margin: 1.5rem auto;
`;

export const Img = styled.img`
  width: 9rem;
  margin: 5.4rem auto;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin: 2.7rem auto;
  }
`;

export const Desc = styled.p`
  text-align: start;
  margin: auto;
`;
