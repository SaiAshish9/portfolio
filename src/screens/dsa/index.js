import React, { useState } from "react";
import qs from "query-string";
import GaneshaImg from "assets/home/ganesha.png";

import {
  Container,
  Content,
  Button,
  BtnContainer,
  Img,
  InitialStepContainer,
  Desc,
  Search,
  SearchContainer,
  StyledSearchIcon,
} from "./styles";

import { Header, DescCont } from "./components";

import { DATA } from "./data";

import { useHistory, useLocation } from "react-router-dom";

import { AiOutlineAudio } from "react-icons/ai";
// AiFillAudio,

import { BiSearch } from "react-icons/bi";

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

        <SearchContainer>
          <StyledSearchIcon />
          <Search placeholder="Search by title, question number" />
        </SearchContainer>

        {selectedOption > -1 && (
          <BtnContainer scroll>
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
            {parseInt(params.category) === 3 &&
              !parseInt(params.subCategory) &&
              [
                ...Array(
                  1008 -
                    Object.entries(entries[selectedOption][1].types).map(
                      (x) => x[1].title
                    )?.length
                ).keys(),
              ].map((i, k) => (
                <Button key={k} onClick={() => {}}>
                  Q
                  {i +
                    1 +
                    Object.entries(entries[selectedOption][1].types).map(
                      (x) => x[1].title
                    )?.length}{" "}
                  . Work In Progress
                </Button>
              ))}
          </BtnContainer>
        )}

        {selectedOption > -1 && parseInt(params.category) != 3 && (
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

        {selectedOption > -1 && selectedOption < 4 && (
          <InitialStepContainer>
            <Desc>{entries[selectedOption][1].content}</Desc>
          </InitialStepContainer>
        )}
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
              Object.values(entries[parseInt(params.category)][1].types)[
                params.subCategory
              ]
            }
          />
        )}
      </Content>
    </Container>
  );
};

export default DSA;
