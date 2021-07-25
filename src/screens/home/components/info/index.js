import React from "react";

import { Container, NextIconContainer, PrevIconContainer } from "./styles";

import Card from "./components/card";

import CoverLetterImg from "assets/home/cover-letter.png";
import ResumeImg from "assets/home/resume.png";
import AcademicsImg from "assets/home/academics.png";
import GithubImg from "assets/home/github.png";
import LinkedInImg from "assets/home/linkedIn.png";

import Slider from "react-slick";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const data = [
  {
    title: "Cover Letter",
    subTitle: "😊",
    img: CoverLetterImg,
    download: true,
  },
  {
    title: "Resume",
    subTitle: "❤️",
    img: ResumeImg,
    download: true,
  },
  {
    title: "BTech Performance",
    subTitle: "CGPA: 9.401",
    img: AcademicsImg,
  },
  {
    title: "Github Profile",
    subTitle: "350+ repo's",
    img: GithubImg,
  },
  {
    title: "LinkedIn Profile",
    subTitle: "😉",
    img: LinkedInImg,
  },
  {
    title: "Medium Profile",
    subTitle: "😉",
    img: AcademicsImg,
  },
  // {
  //   title: "Leetcode Profile",
  //   subTitle: "350+ repo's",
  //   img: GithubImg,
  // },
  {
    title: "Youtube Channel",
    subTitle: "😉",
    img: LinkedInImg,
  },
  {
    title: "Insta Profile",
    subTitle: "😉",
    img: LinkedInImg,
  },
];

const NextArrow = (props) => {
  const { onClick, currentSlide } = props;

  return (
    <NextIconContainer hide={currentSlide === 4} onClick={onClick}>
      <FiChevronRight />
    </NextIconContainer>
  );
};

const PrevArrow = (props) => {
  const { onClick, currentSlide } = props;

  return (
    <PrevIconContainer onClick={onClick} hide={currentSlide === 0}>
      <FiChevronLeft />
    </PrevIconContainer>
  );
};

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Info = () => {
  return (
    <Container>
      <Slider {...settings} style={{ width: "72vw", margin: "auto" }}>
        {data.map((i, k) => (
          <Card key={k} data={i} />
        ))}
      </Slider>
    </Container>
  );
};

export default Info;
