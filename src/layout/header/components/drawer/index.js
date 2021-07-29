import React from "react";

import { Drawer } from "antd";

const Modal = ({ visible }) => {
  return (
    <Drawer
      placement="bottom"
      closable={false}
      // onClose={onClose}
      visible={visible}
    ></Drawer>
  );
};

export default Modal;
