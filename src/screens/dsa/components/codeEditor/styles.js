import styled, { css } from "styled-components";
import { UnControlled as CodeMirror } from "react-codemirror2";

import { Colors, Theme, BREAKPOINTS, Styles } from "constants/index";
import { BtnContainer } from "screens/dsa/styles";
import { Row } from "common/card/styles";

const { darkGrey, orange, red, lightBluishGrey } = Colors;

const CommonStyles = css`
  margin-bottom: -1rem;
  margin-top: -0.7rem;
  .CodeMirror {
    height: 27rem;
    border-radius: 1rem;
    padding-top: 0.7rem;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 32%), 0 1px 1px 0 rgb(0 0 0 / 34%),
      0 1px 3px 0 rgb(0 0 0 / 32%);
  }
  .CodeMirror-cursor {
    ${({ theme: { current } }) =>
      current === Theme.highContrast &&
      css`
        border-left: 1px solid #000;
      `}
    ${({ theme: { current } }) =>
      current === Theme.light &&
      css`
        border-left: 1px solid #000;
      `};
    ${({ theme: { current } }) =>
      current === Theme.dark &&
      css`
        border-left: 1px solid #fff;
      `}
    ${({ theme: { current } }) =>
      (current === Theme.fire || current === Theme.love) &&
      css`
        border-left: 1px solid #fff;
      `};
  }
  .CodeMirror-gutters {
    border: none;
  }
  .CodeMirror,
  .CodeMirror-gutters,
  .CodeMirror-linenumber.CodeMirror-gutter-elt {
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
      current === Theme.light &&
      css`
        color: #000;
      `};
    ${({ theme: { current } }) =>
      current === Theme.dark &&
      css`
        color: #fff !important;
      `}
    ${({ theme: { current } }) =>
      (current === Theme.fire || current === Theme.love) &&
      css`
        color: #fff;
      `};
    .cm-tag {
      color: inherit;
    }
    .CodeMirror-hscrollbar {
      height: 4px;
      @media only screen and (max-width: ${BREAKPOINTS.sm}) {
        ::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .CodeMirror-vscrollbar {
      ::-webkit-scrollbar {
        display: none;
      }
    }

    @media only screen and (max-width: ${BREAKPOINTS.xs}) {
      .CodeMirror-gutter-wrapper {
        position: sticky;
        left: 0px;
        margin-left: 0px;
      }
      .CodeMirror-line {
        padding-left: 36px;
      }
      .CodeMirror-gutter {
        width: 0px !important;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Editor = styled(CodeMirror)`
  width: 63%;
  ${CommonStyles}
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
    display: none;
  }
`;

export const OutputEditorContainer = styled.div`
  width: 35%;
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    margin-top: 2.7rem;
    width: 100%;
    display: none;
  }
`;

export const SEditor = styled(CodeMirror)`
  width: 63%;
  ${CommonStyles}
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
  }
  @media only screen and (min-width: ${BREAKPOINTS.md}) {
    display: none;
  }
`;

export const SOutputEditorContainer = styled.div`
  width: 35%;
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    margin-top: 2.7rem;
    width: 100%;
  }
  @media only screen and (min-width: ${BREAKPOINTS.md}) {
    display: none;
  }
`;

export const Output = styled(CodeMirror)`
  ${CommonStyles}
  width: 100%;
  .CodeMirror-cursor {
    border: none;
  }
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    margin-top: 0.9rem;
    .CodeMirror {
      height: 12.6rem;
    }
  }
`;

export const OutputLabel = styled.p`
  @media only screen and (min-width: ${BREAKPOINTS.md}) {
    display: none;
  }
`;

export const ButtonContainer = styled(BtnContainer)`
  width: 63%;
  margin-left: 0px;
  margin-bottom: 1rem;
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    width: 100%;
  }
`;

export const TagsContainer = styled.div`
  ${Styles.RBC};
  width: 100%;
`;

export const OptionsContainer = styled.div`
  width: 35%;
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    display: none;
  }
`;

export const StyledRow = styled(Row)`
  @media only screen and (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
  }
`;
