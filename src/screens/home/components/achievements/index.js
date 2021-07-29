import React from "react";

import Card from "common/card";

import {
  Container,
  NextIconContainer,
  PrevIconContainer,
  StyledSlider,
  MediumStyledSlider,
  SmallStyledSlider,
} from "./styles";

import DoritosImg from "assets/home/hackathonprize.jpg";
import MSITImg from "assets/home/award.png";
import VSITImg from "assets/home/vsit.jpeg";
import CollegeImg from "assets/home/college.jpeg";
import IEMISImg from "assets/home/iemis.jpeg";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import I18n from "common/I18n";

const data = [
  {
    title: <I18n t="girlscript" />,
    subTitle: <I18n t="winner" />,
    img: DoritosImg,
  },
  {
    title: <I18n t="avensis" />,
    subTitle: <I18n t="winner" />,
    img: MSITImg,
  },
  {
    title: <I18n t="hackVSIT" />,
    subTitle: <I18n t="awardWinner" />,
    img: VSITImg,
  },
  {
    title: <I18n t="class11" />,
    subTitle: <I18n t="topper" />,
    img: CollegeImg,
  },
  {
    title: <I18n t="iemis" />,
    subTitle: <I18n t="publication" />,
    img: IEMISImg,
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
  nextArrow: <NextArrow curr={1} />,
  prevArrow: <PrevArrow />,
};

const mSettings = {
  ...settings,
  slidesToShow: 3,
  nextArrow: <NextArrow curr={2} />,
};

const sSettings = {
  ...settings,
  slidesToShow: 2,
  nextArrow: <NextArrow curr={3} />,
};

const Achievements = () => {
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

export default Achievements;
