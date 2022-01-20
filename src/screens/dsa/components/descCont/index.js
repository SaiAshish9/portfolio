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
  const [selected, setSelected] = useState(
    params.option?.length <= data.types?.length ? parseInt(params.option) : -1
  );

  return (
    <Container>
      <BtnContainer style={{ justifyContent: "flex-start" }}>
        <Button
          onClick={() => {
            let l_index = params.l_index;
            if (l_index) {
              l_index = parseInt(l_index);
              history.push(`?category=${params?.category}&&index=${l_index}`);
            } else history.push(`?category=${params?.category}`);
          }}
        >
          Back
        </Button>
        {params.l_index && (
          <>
            {+params.l_index !== 0 && +params.subCategory !== 0 && (
              <Button
                onClick={() => {
                  let l_index = params.l_index;
                  l_index = parseInt(l_index);
                  history.push(
                    `?category=${params?.category}&&subCategory=${
                      l_index - 1
                    }&&l_index=${l_index - 1}`
                  );
                }}
              >
                Prev
              </Button>
            )}
            <Button
              onClick={() => {
                let l_index = params.l_index;
                l_index = parseInt(l_index);
                history.push(
                  `?category=${params?.category}&&subCategory=${
                    l_index + 1
                  }&&l_index=${l_index + 1}`
                );
              }}
            >
              Next
            </Button>
          </>
        )}
      </BtnContainer>
      {data.types?.length > 0 && (
        <BtnContainer>
          {data.types
            .map((x) => x["title"])
            .map((i, k) => (
              <Button
                onClick={() => {
                  if (selected === k) {
                    history.push(
                      `?category=${params?.category}&&subCategory=${params?.subCategory}`
                    );
                    setSelected(-1);
                  } else {
                    history.push(
                      `?category=${params?.category}&&subCategory=${params?.subCategory}&&option=${k}`
                    );
                    setSelected(k);
                  }
                }}
                key={k}
                hover={0}
                active={+(selected === k)}
              >
                {i.length > 35 ? i.substring(0, 36) + "..." : i}
              </Button>
            ))}
        </BtnContainer>
      )}

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
