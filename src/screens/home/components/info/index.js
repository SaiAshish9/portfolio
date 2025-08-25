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

import ResumeImg from "assets/resume_latest.png";
import AcademicsImg from "assets/home/academics.png";
import GithubImg from "assets/github.png";
import NightCodingSetupImg from "assets/home/nightCodingSetup.jpeg";
import CollegeImg from "assets/home/college.jpeg";
import ParentsImg from "assets/parents.jpeg";
import AndhraImg from "assets/andhra.jpeg";
import IPUCETImg from "assets/ipu_cet.jpeg";
import Class11thImg from "assets/11th.jpeg";
import CricketImg from "assets/cricket.jpeg";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import I18n from "common/I18n";

import Overlay from "common/modal";

const data = [
  // {
  //   title: <I18n t="coverLetter" />,
  //   subTitle: "😊",
  //   img: CoverLetterImg,
  //   download: true,
  //   downloadableLink: "https://drive.google.com/file/d/1L98zTiG-66aEHfk8BUocVWwRMWwaj3gO/view",
  // },
  // {
  //   title: <I18n t="resume" />,
  //   subTitle: "🚀",
  //   img: ResumeImg,
  //   download: true,
  //   downloadableLink: "https://drive.google.com/file/d/15HtqPTjjafafS4HgeCOhVMO1TeMKgN95/view?usp=sharing",
  // },
  {
    title: <I18n t="parents" />,
    subTitle: <>❤️</>,
    img: ParentsImg,
  },
  // https://media.licdn.com/dms/image/v2/D5622AQFbPp3ToZ9sIw/feedshare-shrink_2048_1536/B56ZQOQaKSH0Ao-/0/1735405974630?e=1758758400&v=beta&t=nma099hHG8a72sNiJTEwMNOmwCJ86w6BHbHi0a637jg
  {
    title: <I18n t="fitness" />,
    subTitle: <I18n t="healthy_mind" />,
    img: "https://media.licdn.com/dms/image/v2/D5622AQFbPp3ToZ9sIw/feedshare-shrink_2048_1536/B56ZQOQaKSH0Ao-/0/1735405974630?e=1758758400&v=beta&t=nma099hHG8a72sNiJTEwMNOmwCJ86w6BHbHi0a637jg",
  },
  {
    title: <I18n t="bTech" />,
    subTitle: <I18n t="cgpa" />,
    img: AcademicsImg,
    link: "https://ipuranklist.com/student/09315002718",
  },
  {
    title: <I18n t="resume" />,
    subTitle: <>🚀</>,
    img: ResumeImg,
    link: "https://drive.google.com/file/d/1zs8to52Trgo85URqHfW0riARVO-pcd_P/view",
  },
  {
    title: <I18n t="resume" />,
    subTitle: <>🚀</>,
    img: ResumeImg,
    link: "https://drive.google.com/file/d/1zs8to52Trgo85URqHfW0riARVO-pcd_P/view",
  },
  {
    title: <I18n t="ipu_cet_rank" />,
    subTitle: <>1890/40636</>,
    img: IPUCETImg,
  },
  {
    title: <I18n t="github" />,
    subTitle: <I18n t="repos" />,
    img: GithubImg,
    link: "https://github.com/SaiAshish9",
  },
  // {
  //   title: <I18n t="linkedIn" />,
  //   subTitle: "😉",
  //   img: LinkedInImg,
  //   link: "https://www.linkedin.com/in/%F0%9F%9A%80-sai-ashish-237784188/",
  // },
  // {
  //   title: <I18n t="medium" />,
  //   subTitle: "🎓 ",
  //   img: MediumImg,
  //   link: "https://medium.com/@saiashish3760",
  // },
  // {
  //   title: "Leetcode Profile",
  //   subTitle: "450+ repo's",
  //   img: GithubImg,
  // },
  // {
  //   title: <I18n t="youtube" />,
  //   subTitle: "🔥",
  //   img: YoutubeImg,
  //   link: "https://www.youtube.com/channel/UCRrkV11YNkirkWEQSBTEtvg",
  // },
  {
    title: <I18n t="nightCodingSetup" />,
    subTitle: "😎",
    img: NightCodingSetupImg,
  },
  {
    title: <I18n t="class11" />,
    subTitle: <I18n t="topper" />,
    img: CollegeImg,
  },
  {
    title: <I18n t="class12" />,
    subTitle: <I18n t="awardWinner" />,
    img: AndhraImg,
  },
  {
    title: <I18n t="class11th" />,
    subTitle: <I18n t="10on10" />,
    img: Class11thImg,
  },
  {
    title: <I18n t="class9th" />,
    subTitle: <I18n t="memories" />,
    img: "https://media.licdn.com/dms/image/v2/D562DAQE3ioV52kfSiA/profile-treasury-image-shrink_800_800/B56ZjbyJwIG0AY-/0/1756034015479?e=1756717200&v=beta&t=uv6GG_RJGZqL0T7OY60nS8Q1ddWJN-WBbzXIr9EMHzE",
  },
  {
    title: <I18n t="cricket" />,
    subTitle: "🏏",
    img: CricketImg,
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
  nextArrow: <NextArrow curr={9} />,
  prevArrow: <PrevArrow />,
};

const mSettings = {
  ...settings,
  slidesToShow: 3,
  nextArrow: <NextArrow curr={10} />,
};

const sSettings = {
  ...settings,
  slidesToShow: 2,
  nextArrow: <NextArrow curr={11} />,
};

const Info = () => {
  const [selectedInfo, setSelectedInfo] = useState(0);
  const [visible, setVisible] = useState(false);

  function onClick(e, k) {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    setSelectedInfo(k);
    if ([0, 2, 4, 5, 6, 7, 8].includes(k)) {
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
