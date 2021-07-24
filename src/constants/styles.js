import { css } from "styled-components";

const RCC = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RBC = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RAC = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CCC = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CBC = css`
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
`;

const CCB = css`
  display: flex;
  justify-content: center;
  align-items: space-around;
  flex-direction: column;
`;

const HideBorder = css`
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
`;

const Styles = {
  RCC,
  RBC,
  RAC,
  CCC,
  CBC,
  CCB,
  HideBorder,
};

export default Styles;
