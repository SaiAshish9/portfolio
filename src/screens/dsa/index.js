import React, { useState } from "react";
import qs from "query-string";
import GaneshaImg from "assets/home/ganesha.png";

import { Container, Content, Button, BtnContainer, Img } from "./styles";

import { Ds, Header, DescCont } from "./components";

import { DATA } from "./data";

import { useHistory, useLocation } from "react-router-dom";

import { AiOutlineAudio } from "react-icons/ai";
// AiFillAudio,

const DSA = () => {
  const history = useHistory();
  const location = useLocation();
  const params = qs.parse(location.search);

  const [selectedOption, setSelectedOption] = useState(
    params?.category ? parseInt(params.category) : -1
  );
  const [selectedLanguage, setSelectedLanguage] = useState(-1);

  const entries = Object.entries(DATA);

  function InitialStep() {
    return (
      <>
        <BtnContainer>
          {entries.map((entry, key) => (
            <Button
              hover={0}
              onClick={() => {
                if (selectedOption === key) {
                  setSelectedOption(-1);
                  history.push(location.pathname);
                } else {
                  setSelectedOption(key);
                  history.push("?category=" + key);
                }
                setSelectedLanguage(-1);
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
            {Object.entries(entries[selectedOption][1].types)
              .map((x) => x[1].title)
              ?.map((i, key) => (
                <Button
                  onClick={() => {
                    history.push(
                      `?category=${selectedOption}&&subCategory=${key}`
                    );
                  }}
                  key={key}
                >
                  {i.length > 35 ? i.substr(0, 36) + "..." : i}
                </Button>
              ))}
          </BtnContainer>
        )}

        {selectedOption > -1 && (
          <BtnContainer>
            {["Hindi", "English"].map((i, key) => (
              <Button
                hover={0}
                onClick={() =>
                  selectedLanguage === key
                    ? setSelectedLanguage(-1)
                    : setSelectedLanguage(key)
                }
                active={+(selectedLanguage === key)}
                key={key}
              >
                <AiOutlineAudio style={{ marginRight: "0.2rem" }} />
                {i}
              </Button>
            ))}
          </BtnContainer>
        )}

        {selectedOption === -1 && <Img src={GaneshaImg} alt="img" />}
        {selectedOption === 0 && <Ds />}
      </>
    );
  }

  return (
    <Container>
      <Content>
        <Header />
        {!params?.subCategory && <InitialStep />}
        {params.subCategory && params.category && (
          <DescCont
            data={
              Object.entries(
                Object.entries(entries[parseInt(params.category)][1])?.[1]?.[1]
              )[params.subCategory][1]
            }
          />
        )}
      </Content>
    </Container>
  );
};

export default DSA;
