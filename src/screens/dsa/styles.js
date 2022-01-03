import { memo } from "react";
import styled, { css } from "styled-components";
import { Styles, Theme, Colors, BREAKPOINTS } from "constants/index";
import { BiSearch } from "react-icons/bi";

const { veryDarkGray, white, blue, darkGrey, lightBluishGrey, orange, red } =
  Colors;

export const Container = memo(styled.div`
  padding-top: 4.5rem;
  ::-webkit-scrollbar {
    display: none;
  }
`);

export const Content = memo(styled.div`
  min-height: calc(100vh - 9.5rem);
  padding: 0 2rem;
  padding-top: 1rem;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`);

export const Button = memo(styled.div`
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
  ${({ hover }) =>
    hover !== 0 &&
    css`
      &:hover {
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
      }
    `};
`);

export const BtnContainer = memo(
  styled.div(
    ({ scroll, start }) => css`
      ${Styles.RCC};
      flex-wrap: wrap;
      margin: 1.8rem auto 0;
      padding: 0px;
      position: relative;
      max-height: calc(38.8vh + 2rem);
      ${scroll &&
      css`
        overflow-y: scroll;
        @media only screen and (max-width: ${BREAKPOINTS.xs}) {
          max-height: calc(45vh);
        } ;
      `}
      ${start === 1 &&
      css`
        justify-content: flex-start;
      `}
    `
  )
);

export const SearchContainer = memo(styled.div`
  position: relative;
  ${Styles.RCC};
`);

export const SearchParentContainer = memo(styled.div`
  margin: 1.5rem auto 0;
  ${Styles.RCC};
  width: 100%;
  z-index: 2;
`);

export const Search = memo(styled.input`
  ${Styles.HideBorder};
  background: ${({ theme: { current } }) =>
    current === Theme.dark
      ? darkGrey
      : current === Theme.highContrast
      ? "yellow"
      : current === Theme.fire
      ? orange
      : current === Theme.love
      ? red
      : lightBluishGrey};
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #000;
    `}
  ${({ theme: { current } }) =>
    (current === Theme.fire || current === Theme.love) &&
    css`
      color: #fff;
    `};
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 32%), 0 1px 1px 0 rgb(0 0 0 / 34%),
    0 1px 3px 0 rgb(0 0 0 / 32%);
  border-radius: 0.27rem;
  padding: 0.45rem 0.54rem;
  font-size: 0.9rem;
  width: 18rem;
  &::placeholder {
    color: #000;
    ${({ theme: { current } }) =>
      current === Theme.highContrast &&
      css`
        color: #000;
      `}
    ${({ theme: { current } }) =>
      (current === Theme.fire ||
        current === Theme.love ||
        current === Theme.dark) &&
      css`
        color: #fff;
      `};
  }
  padding-left: 2.1rem;
`);

export const StyledSearchIcon = memo(styled(BiSearch)`
  color: #000;
  position: absolute;
  left: 0.72rem;
  font-size: 1rem;
  ${({ theme: { current } }) =>
    current === Theme.highContrast &&
    css`
      color: #000;
    `}
  ${({ theme: { current } }) =>
    (current === Theme.fire ||
      current === Theme.love ||
      current === Theme.dark) &&
    css`
      color: #fff;
    `};
`);

export const Img = memo(styled.img`
  width: 9rem;
  margin: 5.4rem auto;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    margin: 2.7rem auto;
  }
`);

export const Desc = memo(styled.p`
  text-align: start;
  margin: auto;
  min-width: 100%;
  margin-top: 1.8rem;
`);

export const InitialStepContainer = memo(styled.div`
  margin: 1.8rem auto 0;
  ${Styles.CCC};
  width: 80%;
  padding-bottom: 1.8rem;
  @media only screen and (max-width: ${BREAKPOINTS.sm}) {
    width: 94%;
  }
`);
