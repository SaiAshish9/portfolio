import React from "react";

import { Container } from "./styles";

import Card from "./components/card";

import CoverLetterImg from "assets/home/cover-letter.png";
import ResumeImg from "assets/home/resume.png";
import AcademicsImg from "assets/home/academics.png";
import GithubImg from "assets/home/github.png";
import LinkedInImg from "assets/home/linkedIn.png";

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

const Info = () => {
  return (
    <Container>
      {data.map((i, k) => (
        <Card key={k} data={i} />
      ))}
    </Container>
  );
};

export default Info;
