import React from "react";
import {
  Container,
  Img,
  Label,
  ImgContainer,
  MediumImgContainer,
  SmallImgContainer,
} from "./styles";
import CREDImage from "assets/home/cred.png";
import RazorpayImage from "assets/home/razorpay.png";
import BrowserStackImage from "assets/home/browserstack.jpeg";
import VmwareImage from "assets/home/vmware.png";
import AmazonImage from "assets/home/amazon.png";
import TcsImage from "assets/home/tcs.png";
import PaytmImage from "assets/home/paytm.jpeg";
import UnluImage from "assets/home/unlu.png";
import GrowwImage from "assets/home/groww.jpeg";
import OpenHouseImage from "assets/home/openhouse.png";
import TuringImage from "assets/home/turing.png";
import ZeeveImg from "assets/home/zeeve.png";
import NetSkopeImg from "assets/home/netskope.png";
import MoonshotImg from "assets/home/moonshot.png";
import AvisoImg from "assets/home/aviso.png";
import MindbowserImg from "assets/home/minbowser.png";
import VerizonImg from "assets/home/verizon.jpeg";
import IntuitImg from "assets/home/intuit.jpeg";
import I18n from "common/I18n";
import HeartComponent from "./components/heartComponent";

function handleClick(link) {
  const win = window.open(link, "_blank");
  win.focus();
}

const images = [
  {
    img: CREDImage,
    link: "https://cred.club/",
  },
  {
    img: RazorpayImage,
    link: "https://razorpay.com/",
  },
  {
    img: PaytmImage,
    link: "https://paytm.com/",
  },
  {
    img: BrowserStackImage,
    link: "https://www.browserstack.com/",
  },
  {
    img: VmwareImage,
    link: "https://www.vmware.com/in.html",
  },
  {
    img: GrowwImage,
    link: "https://groww.in/",
  },
  {
    img: AmazonImage,
    link: "https://www.amazon.com/",
  },
  {
    img: IntuitImg,
    link: "https://intuit.com",
  },
  {
    img: TcsImage,
    link: "https://www.tcs.com/",
  },
  {
    img: UnluImage,
    link: "https://unlu.io/",
  },
  {
    img: OpenHouseImage,
    link: "https://openhouse.study/",
  },
  {
    img: TuringImage,
    link: "https://turing.com/",
  },
  {
    img: NetSkopeImg,
    link: "https://netskope.com",
  },
  {
    img: ZeeveImg,
    link: "https://zeeve.io",
  },
  {
    img: MoonshotImg,
    link: "https://moonshotjr.com",
  },
  {
    img: AvisoImg,
    link: "https://aviso.com",
  },
  {
    img: MindbowserImg,
    link: "https://mindbowser.com",
  },
  {
    img: VerizonImg,
    link: "https://verizon.com",
  },
];

const OffersComponent = () => {
  return (
    <Container data-aos="fade-up">
      <Label>
        <I18n t="invite" />
      </Label>
      <HeartComponent />
      <Label>
        <I18n t="messages" />
      </Label>
      <ImgContainer>
        {images.slice(0, 9).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </ImgContainer>
      <ImgContainer>
        {images.slice(9).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </ImgContainer>
      <MediumImgContainer>
        {images.slice(0, 6).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </MediumImgContainer>
      <MediumImgContainer>
        {images.slice(6, 12).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </MediumImgContainer>
      <MediumImgContainer>
        {images.slice(12).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </MediumImgContainer>
      <SmallImgContainer>
        {images.slice(0, 6).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </SmallImgContainer>
      <SmallImgContainer>
        {images.slice(6, 12).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </SmallImgContainer>
      <SmallImgContainer>
        {images.slice(12, 18).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </SmallImgContainer>
    </Container>
  );
};

export default OffersComponent;