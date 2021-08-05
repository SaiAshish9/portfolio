import React from "react";

import {
  Container,
  CardImg,
  Title,
  Content,
  SubTitle,
  Eye,
  Download,
  Row,
} from "./styles";

const Card = ({ data, onClick }) => {
  return (
    <Container>
      <CardImg src={data.img} alt="img" />
      <Content>
        <Title>{data.title}</Title>
        <Row>
          <SubTitle>{data.subTitle}</SubTitle>
          <Row>
            <Eye onClick={onClick} />
            {data.download && (
              <Download
                onClick={() => {
                  const win = window.open(data.downloadableLink, "_blank");
                  win.focus();
                }}
              />
            )}
          </Row>
        </Row>
      </Content>
    </Container>
  );
};

export default Card;
