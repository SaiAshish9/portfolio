import React from "react";

import {
  StyledModal,
  CloseIcon,
  Title,
  Img,
  Download,
  Row,
  StyledSlider,
} from "./styles";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 2700,
  cssEase: "linear",
  nextArrow: <></>,
  prevArrow: <></>,
};

const Overlay = ({ data, visible, setVisible }) => {
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
    </StyledModal>
  );
};

export default Overlay;
