import React from "react";

import { Container, Img, Row, MContainer } from "./styles";

import JsImg from "assets/home/js.png";
import TsImg from "assets/home/tsc.png";
import CppImg from "assets/home/cpp.png";
import CSharpImg from "assets/home/csharp.png";
import JavaImg from "assets/home/java.png";
import KotlinImg from "assets/home/kt.png";
import PyImg from "assets/home/py.png";
import SqlImg from "assets/home/mysql.png";
import MongoImg from "assets/home/mongodb.png";
import PostgresImg from "assets/home/postgres.png";
import GoImg from "assets/home/golang.png";
import SwiftImg from "assets/home/swift.png";
import DartImg from "assets/home/dart.png";
import GraphqlImg from "assets/home/graphql.png";
import RedisImg from "assets/home/redis.png";
import DockerImg from "assets/home/docker.png";

const images = [
  JsImg,
  TsImg,
  CppImg,
  JavaImg,
  KotlinImg,
  PyImg,
  SqlImg,
  MongoImg,
  PostgresImg,
  GoImg,
  CSharpImg,
  SwiftImg,
  DartImg,
  GraphqlImg,
  RedisImg,
  DockerImg
];

const Languages = () => {
  return (
    <>
      <Container data-aos="flip-left">
        <Row>
          {images.slice(0, 8).map((i, k) => (
            <Img alt="img" src={i} key={k} />
          ))}
        </Row>
        <Row>
          {images.slice(8).map((i, k) => (
            <Img alt="img" src={i} key={k} />
          ))}
        </Row>
      </Container>
      <MContainer>
        <Row>
          {images.slice(0, 4).map((i, k) => (
            <Img alt="img" src={i} key={k} />
          ))}
        </Row>
        <Row>
          {images.slice(4, 8).map((i, k) => (
            <Img alt="img" src={i} key={k} />
          ))}
        </Row>
        <Row>
          {images.slice(8, 12).map((i, k) => (
            <Img alt="img" src={i} key={k} />
          ))}
        </Row>
        <Row>
          {images.slice(12).map((i, k) => (
            <Img alt="img" src={i} key={k} />
          ))}
        </Row>
      </MContainer>
    </>
  );
};

export default Languages;
