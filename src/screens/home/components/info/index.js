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

import I18n from "common/I18n";

import Overlay from "common/modal";

import { useStore } from "store";

const data = [
  {
    title: <I18n t="coverLetter" />,
    subTitle: "😊",
    img: CoverLetterImg,
    download: true,
  },
  {
    title: <I18n t="resume" />,
    subTitle: "❤️",
    img: ResumeImg,
    download: true,
  },
  {
    title: <I18n t="bTech" />,
    subTitle: <I18n t="cgpa" />,
    img: AcademicsImg,
  },
  {
    title: <I18n t="github" />,
    subTitle: <I18n t="repos" />,
    img: GithubImg,
  },
  {
    title: <I18n t="linkedIn" />,
    subTitle: "😉",
    img: LinkedInImg,
  },
  {
    title: <I18n t="medium" />,
    subTitle: "🎓 ",
    img: MediumImg,
  },
  // {
  //   title: "Leetcode Profile",
  //   subTitle: "350+ repo's",
  //   img: GithubImg,
  // },
  {
    title: <I18n t="youtube" />,
    subTitle: "🔥",
    img: YoutubeImg,
  },
  {
    title: <I18n t="nightCodingSetup" />,
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
  const {
    state: { visible },
    actions: { setVisible },
  } = useStore();

  function onClick() {
    setVisible(true);
  }

  return (
    <Container>
      <StyledSlider {...settings}>
        {data.map((i, k) => (
          <Card key={k} data={i} onClick={onClick} />
        ))}
      </StyledSlider>
      <MediumStyledSlider {...mSettings}>
        {data.map((i, k) => (
          <Card key={k} data={i} onClick={onClick} />
        ))}
      </MediumStyledSlider>
      <SmallStyledSlider {...sSettings}>
        {data.map((i, k) => (
          <Card key={k} data={i} onClick={onClick} />
        ))}
      </SmallStyledSlider>
      {visible && <Overlay />}
    </Container>
  );
};

export default Info;
