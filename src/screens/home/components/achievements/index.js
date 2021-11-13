import React, { useState } from "react";

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
import BvpImg from "assets/home/bvp_pic.jpeg";
import Class8AwardImg from "assets/home/school.jpeg";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import I18n from "common/I18n";

import Overlay from "common/modal";

const data = [
  {
    title: <I18n t="girlscript" />,
    subTitle: <I18n t="winner" />,
    img: DoritosImg,
    images: [
      DoritosImg,
      "https://res.cloudinary.com/saiashish/image/upload/v1627655423/dtu_room_voc9cy.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1627655422/dtuSwags_kynaao.jpg",
    ],
  },
  {
    title: <I18n t="hackVSIT" />,
    subTitle: <I18n t="awardWinner" />,
    img: VSITImg,
    images: [
      VSITImg,
      "https://res.cloudinary.com/saiashish/image/upload/v1627664568/hackVSIT3_guokhx.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1627664568/hackVSIT2_m4olv9.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1627664568/hackVSIT4_xveakx.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1627664568/hackVSIT5_cscssy.jpg",
    ],
  },
  {
    title: <I18n t="avensis" />,
    subTitle: <I18n t="winner" />,
    img: MSITImg,
    images: [
      MSITImg,
      "https://res.cloudinary.com/saiashish/image/upload/v1627665640/hackMSIT2_uppjdp.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1627665639/hackMSIT1_ahyfje.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1627665639/hackMSIT3_u3wkli.jpg",
    ],
  },
  {
    title: <I18n t="class11" />,
    subTitle: <I18n t="topper" />,
    img: CollegeImg,
  },
  {
    title: <I18n t="hackBVP" />,
    subTitle: <I18n t="memories" />,
    img: BvpImg,
    images: [
      BvpImg,
      "https://res.cloudinary.com/saiashish/image/upload/v1627665900/bvp1_y5uqqu.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1627665900/bvp2_xewa4f.jpg",
    ],
  },
  {
    title: <I18n t="iemis" />,
    subTitle: <I18n t="publication" />,
    img: IEMISImg,
  },
  {
    title: <I18n t="class12" />,
    subTitle: <I18n t="awardWinner" />,
    img: "https://res.cloudinary.com/saiashish/image/upload/v1636813139/class_12th_dz9j9q.jpg",
  },
  {
    title: <I18n t="class8" />,
    subTitle: <I18n t="topper" />,
    img: Class8AwardImg,
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

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(0);

  const [visible, setVisible] = useState(false);

  function onClick(e, k) {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setSelectedAchievement(k);
    setVisible(true);
  }

  return (
    <Container data-aos="fade-left">
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
          data={data[selectedAchievement]}
          visible={visible}
          setVisible={setVisible}
          slider
        />
      )}
    </Container>
  );
};

export default Achievements;
