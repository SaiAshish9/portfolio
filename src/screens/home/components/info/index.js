import React, { useState } from "react";

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

const data = [
  {
    title: <I18n t="coverLetter" />,
    subTitle: "😊",
    img: CoverLetterImg,
    download: true,
    downloadableLink: "https://drive.google.com/file/d/1L98zTiG-66aEHfk8BUocVWwRMWwaj3gO/view",
  },
  {
    title: <I18n t="resume" />,
    subTitle: "❤️",
    img: ResumeImg,
    download: true,
    downloadableLink: "https://drive.google.com/file/d/1bxTmyH1ZTPKBgwC4C20xtniDB4Stn-Yp/view?usp=sharing",
  },
  {
    title: <I18n t="bTech" />,
    subTitle: <I18n t="cgpa" />,
    img: AcademicsImg,
    link: "https://ipuranklist.com/student/09315002718",
  },
  {
    title: <I18n t="github" />,
    subTitle: <I18n t="repos" />,
    img: GithubImg,
    link: "https://github.com/SaiAshish9",
  },
  {
    title: <I18n t="linkedIn" />,
    subTitle: "😉",
    img: LinkedInImg,
    link: "https://www.linkedin.com/in/%F0%9F%9A%80-sai-ashish-237784188/",
  },
  {
    title: <I18n t="medium" />,
    subTitle: "🎓 ",
    img: MediumImg,
    link: "https://medium.com/@saiashish3760",
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
    link: "https://www.youtube.com/channel/UCRrkV11YNkirkWEQSBTEtvg",
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
  const [selectedInfo, setSelectedInfo] = useState(0);
  const [visible, setVisible] = useState(false);

  function onClick(e, k) {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setSelectedInfo(k);
    if (k < 2 || k === data.length - 1) {
      setVisible(true);
    } else {
      const win = window.open(data[k].link, "_blank");
      win.focus();
    }
  }

  return (
    <Container data-aos="fade-right">
      <StyledSlider {...settings}>
        {data.map((i, k) => (
          <Card key={k} data={i} onClick={(e) => onClick(e, k)} />
        ))}
      </StyledSlider>
      <MediumStyledSlider {...mSettings}>
        {data.map((i, k) => (
          <Card key={k} data={i} onClick={(e) => onClick(e, k)} />
        ))}
      </MediumStyledSlider>
      <SmallStyledSlider {...sSettings}>
        {data.map((i, k) => (
          <Card key={k} data={i} onClick={(e) => onClick(e, k)} />
        ))}
      </SmallStyledSlider>
      {visible && (
        <Overlay
          data={data[selectedInfo]}
          visible={visible}
          setVisible={setVisible}
        />
      )}
    </Container>
  );
};

export default Info;
