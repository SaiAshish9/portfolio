import React from "react";

import { Container } from "./styles";

import Card from "./components/card";

import CoverLetterImg from "assets/home/cover-letter.png";
import ResumeImg from "assets/home/resume.png";
import AcademicsImg from "assets/home/academics.png";
import GithubImg from "assets/home/github.png";
import LinkedInImg from "assets/home/linkedIn.png";

import Slider from "react-slick";

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
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};

const Info = () => {
  return (
    <Container>
      <Slider {...settings}>
        {data.map((i, k) => (
          <Card key={k} data={i} />
        ))}
      </Slider>
    </Container>
  );
};

export default Info;
