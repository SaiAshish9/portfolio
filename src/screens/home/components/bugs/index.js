import React from "react";

import { Container, Img, Row, MContainer } from "./styles";

import FirebaseImg from "assets/bugs/firebase.png";
import LinkedInImg from "assets/bugs/linked-in.png";
import MicrosoftImg from "assets/bugs/microsoft.png";
import GFGImg from "assets/bugs/gfg.png";
import StripeImg from "assets/bugs/stripe1.png";
import WhatsappImg from "assets/bugs/whatsapp.png";
import SentryImg from "assets/bugs/sentry.png";
import CREDImg from "assets/home/cred1.png";
import I18n from "common/I18n";
import { Label } from "../offers/styles";
import { goTo } from "utils";

const images = [
  {
    img: SentryImg,
    link: "https://www.linkedin.com/posts/%F0%9F%9A%80-sai-ashish-237784188_sentry-activity-6881519764125081600-0hkU",
  },
  {
    img: FirebaseImg,
    link: "https://www.linkedin.com/posts/%F0%9F%9A%80-sai-ashish-237784188_firebase-google-activity-6868979111851900928-3bBv",
  },
  {
    img: LinkedInImg,
    link: "https://www.linkedin.com/posts/%F0%9F%9A%80-sai-ashish-237784188_bug-activity-6869609356883849216-F2T2",
  },
  {
    img: MicrosoftImg,
    link: "https://www.linkedin.com/posts/%F0%9F%9A%80-sai-ashish-237784188_microsoft-activity-6865598829408866304-T6NS",
  },
  {
    img: GFGImg,
    link: "https://www.linkedin.com/posts/%F0%9F%9A%80-sai-ashish-237784188_geeksforgeeks-activity-6871923789240913920-CRqp",
  },
  {
    img: StripeImg,
    link: "https://www.linkedin.com/posts/%F0%9F%9A%80-sai-ashish-237784188_stripe-activity-6867165190501339136-dAk5",
  },
  {
    img: WhatsappImg,
    link: "https://www.linkedin.com/posts/%F0%9F%9A%80-sai-ashish-237784188_whatsappbusiness-whatsapp-meta-activity-6870017467322912768-kr9V",
  },
  {
    img: CREDImg,
    link: "https://www.linkedin.com/posts/%F0%9F%9A%80-sai-ashish-237784188_cred-activity-6863131141751361536-69Yt",
  },
];
// https://www.linkedin.com/posts/%F0%9F%9A%80-sai-ashish-237784188_geeksforgeeks-activity-6871923789240913920-CRqp

function handleClick(e, i) {
  e.preventDefault();
  e.stopPropagation();
  goTo(i.link);
}

const Bugs = () => {
  return (
    <div style={{ position: "relative", top: "-1.8rem" }}>
      <Label m>
        <I18n t="bugs" />
      </Label>
      <Container data-aos="flip-right">
        <Row>
          {images.slice(0, 8).map((i, k) => (
            <Img
              alt="img"
              onClick={(e) => handleClick(e, i)}
              src={i.img}
              key={k}
            />
          ))}
        </Row>
        <Row>
          {images.slice(8).map((i, k) => (
            <Img
              alt="img"
              onClick={(e) => handleClick(e, i)}
              src={i.img}
              key={k}
            />
          ))}
        </Row>
      </Container>
      <MContainer>
        <Row>
          {images.slice(0, 4).map((i, k) => (
            <Img
              alt="img"
              onClick={(e) => handleClick(e, i)}
              src={i.img}
              key={k}
            />
          ))}
        </Row>
        <Row>
          {images.slice(4, 8).map((i, k) => (
            <Img
              alt="img"
              onClick={(e) => handleClick(e, i)}
              src={i.img}
              key={k}
            />
          ))}
        </Row>
        <Row>
          {images.slice(8, 12).map((i, k) => (
            <Img
              alt="img"
              onClick={(e) => handleClick(e, i)}
              src={i.img}
              key={k}
            />
          ))}
        </Row>
        <Row>
          {images.slice(12).map((i, k) => (
            <Img
              alt="img"
              onClick={(e) => handleClick(e, i)}
              src={i.img}
              key={k}
            />
          ))}
        </Row>
      </MContainer>
    </div>
  );
};

export default Bugs;
