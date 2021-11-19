import React, { useState } from "react";

import {
  StyledModal,
  CloseIcon,
  Title,
  Img,
  Download,
  Row,
  StyledSlider,
  SubTitle,
  NextIconContainer,
  PrevIconContainer,
  ImgContainer,
} from "./styles";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

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
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Overlay = ({ data: selectedData, visible, setVisible, label, site }) => {
  const [data, setData] = useState(selectedData);

  return (
    <StyledModal visible={visible} footer={null} closable={false}>
      <CloseIcon
        onClick={() => {
          setVisible(false);
          setData(null);
        }}
      />
      <Title>
        {data?.title} {data?.subTitle}{" "}
      </Title>
      <Title>{label}</Title>
      {data?.images ? (
        <StyledSlider {...settings}>
          {data?.images.map((i, k) => (
            <ImgContainer key={k}>
              <Img alt="img" src={i} slider />
            </ImgContainer>
          ))}
        </StyledSlider>
      ) : (
        <Img
          style={{
            position: "relative",
            alignSelf: "flex-start",
          }}
          alt="img"
          src={data?.image ?? data?.img}
        />
      )}
      {data?.download && (
        <Row style={{ cursor: "pointer" }}>
          <Download />
          <Title
            onClick={() => {
              const win = window.open(
                "https://www.linkedin.com/in/sai-ashish-237784188/",
                "_blank"
              );
              win.focus();
            }}
          >
            Download
          </Title>
        </Row>
      )}
      {site && (
        <SubTitle href={data?.link} target="_blank" rel="noopener noreferrer">
          Visit Site
        </SubTitle>
      )}
    </StyledModal>
  );
};

export default Overlay;
