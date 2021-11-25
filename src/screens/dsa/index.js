import I18n from "common/I18n";
import React from "react";
import { Container, Content, Label, SmallLabel } from "./styles";

const DSA = () => {
  return (
    <Container>
      <Content>
        <Label>
          <I18n t="dsa" />
        </Label>
        <SmallLabel>
          <I18n t="dsaTarget" />
        </SmallLabel>
        <SmallLabel>
          {" "}
          <I18n t="wip" />
        </SmallLabel>
      </Content>
    </Container>
  );
};

export default DSA;
