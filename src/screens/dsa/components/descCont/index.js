import React, { useState } from "react";
import qs from "query-string";
import { AiOutlineAudio } from "react-icons/ai";
import { Button, BtnContainer, Desc } from "screens/dsa/styles";
import { Container } from "./styles";
import { useHistory, useLocation } from "react-router-dom";

const DescCont = ({ data }) => {
  const history = useHistory();
  const location = useLocation();
  const params = qs.parse(location.search);
  const [selected, setSelected] = useState(-1);

  return (
    <Container>
      <BtnContainer style={{ justifyContent: "flex-start" }}>
        <Button onClick={() => history.push(`?category=${params?.category}`)}>
          Back
        </Button>
      </BtnContainer>
      <BtnContainer>
        {data.types?.length > 0 &&
          data.types
            .map((x) => x["title"])
            .map((i, k) => (
              <Button
                onClick={() => {
                  if (selected === k) setSelected(-1);
                  else setSelected(k);
                }}
                key={k}
                hover={0}
                active={+(selected === k)}
              >
                {i}
              </Button>
            ))}
      </BtnContainer>
      <BtnContainer>
        {["Hindi", "English"].map((i, key) => (
          <Button key={key}>
            <AiOutlineAudio style={{ marginRight: "0.2rem" }} />
            {i}
          </Button>
        ))}
      </BtnContainer>
      <Desc>
        {selected === -1 ? data.content : data.types[selected]?.content}
      </Desc>
    </Container>
  );
};

export default DescCont;
