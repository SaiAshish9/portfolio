import React, { useState, useEffect, useRef, memo, useCallback } from "react";
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
  SearchParentContainer,
} from "./styles";

import { Header, DescCont } from "./components";

import { DATA } from "./data";

import { useHistory, useLocation } from "react-router-dom";

import { AiOutlineAudio } from "react-icons/ai";

const entries = Object.entries(DATA);

const SearchInput = React.forwardRef(
  ({ setData, resultantEntriesData }, inputRef) => {
    const location = useLocation();
    const params = qs.parse(location.search);

    useEffect(() => {
      if (
        params?.index &&
        !inputRef.current.value &&
        resultantEntriesData.length > 0
      ) {
        const index = parseInt(params?.index);
        if (index > 0) inputRef.current.value = `Q${index + 2}`;
        else inputRef.current.value = `Q${index + 1}`;
        handleChange();
      }
    }, [resultantEntriesData]);

    function handleChange() {
      const value = inputRef.current.value.toLowerCase();
      if (value) {
        setData((_) =>
          resultantEntriesData.filter((x) => {
            if (typeof x === "string") return x.toLowerCase().includes(value);
            return false;
          })
        );
      } else {
        setData(resultantEntriesData);
      }
    }

    return (
      <Search
        ref={inputRef}
        onChange={handleChange}
        placeholder="Search by title, question number"
      />
    );
  }
);

const LeetCodeQuestions = ({ entries, selectedOption, history }) => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [initialEntriesData, setInitialEntriesData] = useState([]);
  const inputRef = useRef();

  const setEntries = useCallback(() => {
    const entriesData = Object.entries(entries[selectedOption][1].types).map(
      (x) => x[1].title
    );
    setInitialEntriesData(entriesData);
    const resultantEntriesData = [
      ...entriesData,
      ...Array(1008 - entriesData?.length).keys(),
    ];
    setData(resultantEntriesData);
    if (initialData.length === 0) setInitialData(resultantEntriesData);
  }, [entries, selectedOption]);

  useEffect(() => {
    setEntries();
  }, [setEntries]);

  return (
    <>
      <SearchParentContainer>
        <SearchContainer>
          <StyledSearchIcon />
          <SearchInput
            ref={inputRef}
            setData={setData}
            resultantEntriesData={initialData}
          />
        </SearchContainer>
      </SearchParentContainer>
      <BtnContainer id="cont" scroll>
        {data?.map((i, key) =>
          key < initialEntriesData.length ? (
            <Button
              onClick={() => {
                inputRef.current.value = null;
                const index = initialData.indexOf(i);
                history.push(
                  `?category=${selectedOption}&&subCategory=${index}&&l_index=${index}`
                );
              }}
              key={key}
            >
              {i.length > 35 ? i.substr(0, 36) + "..." : i}
            </Button>
          ) : (
            <Button key={key} onClick={() => {}}>
              Q
              {i +
                1 +
                Object.entries(entries[selectedOption][1].types).map(
                  (x) => x[1].title
                )?.length}{" "}
              . Work In Progress
            </Button>
          )
        )}
      </BtnContainer>
    </>
  );
};

const InitialStep = () => {
  const history = useHistory();
  const location = useLocation();
  const params = qs.parse(location.search);
  const [selectedOption, setSelectedOption] = useState(
    params?.category ? parseInt(params.category) : -1
  );
  const [selectedLanguage, setSelectedLanguage] = useState(-1);

  return (
    <div>
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

      {selectedOption > -1 && parseInt(params.category) != 3 && (
        <BtnContainer id="cont">
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

      {selectedOption > -1 &&
        parseInt(params.category) === 3 &&
        !params.subCategory && (
          <LeetCodeQuestions
            entries={entries}
            selectedOption={selectedOption}
            history={history}
            params={params}
          />
        )}

      {selectedOption === -1 && <Img src={GaneshaImg} alt="img" />}

      {selectedOption > -1 && selectedOption < 4 && (
        <InitialStepContainer>
          <Desc>{entries[selectedOption][1].content}</Desc>
        </InitialStepContainer>
      )}
    </div>
  );
};

const DSA = () => {
  const location = useLocation();
  const params = qs.parse(location.search);

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
