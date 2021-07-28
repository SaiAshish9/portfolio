import styled from "styled-components";

import { Modal } from "antd";

export const StyledModal = styled(Modal)`
  .ant-modal-mask {
    background: #000 !important;
    z-index: 70;
  }
`;
