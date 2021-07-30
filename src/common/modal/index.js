import React from "react";

import {
  StyledModal,
  CloseIcon,
  Title,
  Img,
  Download,
  Row,
  StyledSlider,
  SubTitle,
} from "./styles";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <></>,
  prevArrow: <></>,
};

const Overlay = ({ data, visible, setVisible, label, site }) => {
  return (
    <StyledModal visible={visible} footer={null} closable={false}>
      <CloseIcon
        onClick={() => {
          setVisible(false);
        }}
      />
      <Title>
        {data?.title} {data?.subTitle}{" "}
      </Title>
      <Title>{label}</Title>
      {data.images ? (
        <StyledSlider {...settings}>
          {data.images.map((i, k) => (
            <Img alt="img" src={i} slider />
          ))}
        </StyledSlider>
      ) : (
        <Img alt="img" src={data?.img} />
      )}
      {data?.download && (
        <Row>
          <Download />
          <Title>Download</Title>
        </Row>
      )}
      {site && (
        <SubTitle href={data.link} target="_blank" rel="noopener noreferrer">
          Visit Site
        </SubTitle>
      )}
    </StyledModal>
  );
};

export default Overlay;
