import React from "react";

import {
  Container,
  NextIconContainer,
  PrevIconContainer,
  StyledSlider,
  MediumStyledSlider,
  SmallStyledSlider,
} from "./styles";

import Card from "common/card";

import CoverLetterImg from "assets/home/cover-letter.png";
import ResumeImg from "assets/home/resume.png";
import AcademicsImg from "assets/home/academics.png";
import GithubImg from "assets/home/github.png";
import LinkedInImg from "assets/home/linkedIn.png";
import MediumImg from "assets/home/medium.png";
import YoutubeImg from "assets/home/youtube.png";
import NightCodingSetupImg from "assets/home/nightCodingSetup.jpeg";

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
    subTitle: "🎓 ",
    img: MediumImg,
  },
  // {
  //   title: "Leetcode Profile",
  //   subTitle: "350+ repo's",
  //   img: GithubImg,
  // },
  {
    title: "Youtube Channel",
    subTitle: "🔥",
    img: YoutubeImg,
  },
  {
    title: "Night Coding Setup",
    subTitle: "😎",
    img: NightCodingSetupImg,
  },
];

const NextArrow = (props) => {
  const { onClick, currentSlide, curr } = props;

  return (
    <NextIconContainer hide={currentSlide === curr} onClick={onClick}>
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
  nextArrow: <NextArrow curr={4} />,
  prevArrow: <PrevArrow />,
};

const mSettings = {
  ...settings,
  slidesToShow: 3,
  nextArrow: <NextArrow curr={5} />,
};

const sSettings = {
  ...settings,
  slidesToShow: 2,
  nextArrow: <NextArrow curr={6} />,
};

const Info = () => {
  return (
    <Container>
      <StyledSlider {...settings}>
        {data.map((i, k) => (
          <Card key={k} data={i} />
        ))}
      </StyledSlider>
      <MediumStyledSlider {...mSettings}>
        {data.map((i, k) => (
          <Card key={k} data={i} />
        ))}
      </MediumStyledSlider>
      <SmallStyledSlider {...sSettings}>
        {data.map((i, k) => (
          <Card key={k} data={i} />
        ))}
      </SmallStyledSlider>
    </Container>
  );
};

export default Info;
