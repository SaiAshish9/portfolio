import React from "react";
import I18n from "common/I18n";

import { Container, Label, SmallLabel } from "./styles";

const Header = () => {
  return (
    <Container>
      <Label>
        <I18n t="dsa" />
      </Label>
      <SmallLabel>
        <I18n t="dsaTarget" />
      </SmallLabel>
      {/* <SmallLabel>
        <I18n t="wip" />
      </SmallLabel> */}
    </Container>
  );
};

export default Header;
