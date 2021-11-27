import React, { useState } from "react";
import { Container, Content, Button, BtnContainer, Img } from "./styles";

import { Header } from "./components";

import GaneshaImg from "assets/home/ganesha.png";

import { DATA } from "./data";

const DSA = () => {
  const [selectedOption, setSelectedOption] = useState(-1);
  const [selectedSubOption, setSelectedSubOption] = useState(-1);

  const entries = Object.entries(DATA);

  return (
    <Container>
      <Content>
        <Header />
        <BtnContainer>
          {entries.map((entry, key) => (
            <Button
              onClick={() => {
                selectedOption === key
                  ? setSelectedOption(-1)
                  : setSelectedOption(key);
                setSelectedSubOption(-1);
              }}
              active={+(selectedOption === key)}
              key={key}
            >
              {entry[1]["title"]}
            </Button>
          ))}
        </BtnContainer>
        {selectedOption > -1 && (
          <BtnContainer>
            {Object.entries(entries[selectedOption][1].types)?.map(
              (entry, key) => (
                <Button
                  onClick={() =>
                    selectedSubOption === key
                      ? setSelectedSubOption(-1)
                      : setSelectedSubOption(key)
                  }
                  active={+(selectedSubOption === key)}
                  key={key}
                >
                  {entry[1].length > 35
                    ? entry[1].substr(0, 36) + "..."
                    : entry[1]}
                </Button>
              )
            )}
          </BtnContainer>
        )}
        {selectedOption === -1 && <Img src={GaneshaImg} alt="img" />}
      </Content>
    </Container>
  );
};

export default DSA;
