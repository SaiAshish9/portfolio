import React from "react";

import { Container, Img } from "./styles";

import Slider from "react-slick";

import SpringImg from "assets/home/spring.png";
import SwiftImg from "assets/home/swift.png";
import FlaskImg from "assets/home/flask.png";
import DjangoImg from "assets/home/django.png";
import ReactImg from "assets/home/react.png";
import AngularImg from "assets/home/angular.png";
import GolangImg from "assets/home/golang.png";
import AndroidImg from "assets/home/android.png";
import VueImg from "assets/home/vue.png";
import GatsbyImg from "assets/home/gatsby.png";
import GrahpQLImg from "assets/home/graphql.png";
import NodeImg from "assets/home/nodejs.png";
import FlutterImg from "assets/home/flutter.png";
import DockerImg from "assets/home/docker.png";
import KubernetesImg from "assets/home/kubernetes.png";
import AWSImg from "assets/home/aws.png";
import NextImg from "assets/home/next.png";
import NuxtImg from "assets/home/nuxt.png";
import NestImg from "assets/home/nest.png";
import DigitalOceanImg from "assets/home/digitalOcean.png";
import IonicImg from "assets/home/ionic.png";
import GCPImg from "assets/home/gcp.png";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 10,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

const images = [
  SpringImg,
  SwiftImg,
  FlaskImg,
  DjangoImg,
  ReactImg,
  AngularImg,
  GolangImg,
  AndroidImg,
  VueImg,
  GatsbyImg,
  GrahpQLImg,
  NodeImg,
  FlutterImg,
  DockerImg,
  KubernetesImg,
  AWSImg,
  NestImg,
  NextImg,
  NuxtImg,
  DigitalOceanImg,
  IonicImg,
  GCPImg
];

const Skills = () => {
  return (
    <Container>
      <Slider {...settings}>
        {images.map((i, k) => (
          <Img key={k} src={i} alt="img" />
        ))}
      </Slider>
    </Container>
  );
};

export default Skills;
