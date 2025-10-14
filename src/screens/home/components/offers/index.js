import React from "react";
import {
  Container,
  Img,
  Label,
  ImgContainer,
  MediumImgContainer,
  SmallImgContainer,
} from "./styles";
import CREDImage from "assets/home/cred1.png";
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
// import PromoImg from "assets/home/promo.png";
import IntuitImg from "assets/home/intuit.jpeg";
import GrofersImg from "assets/home/grofers.png";
import UberImg from "assets/home/uber.png";
import EducativeImg from "assets/home/educative.png";
import I18n from "common/I18n";
import HeartComponent from "./components/heartComponent";
// import ProboImg from "assets/home/probo.svg";
import LambdaTestImg from "assets/home/lambda-test.png";
import WildsterImg from "assets/home/wildster.png";
import MindTickleImg from "assets/home/mindtickle.png";
import HotstarImg from "assets/home/hotstar.jpeg";
import InstahyreImg from "assets/home/instahyre.png";
import GoogleImg from "assets/home/google.png";
import PayPalImage from "assets/paypal.jpg";
import MicrosoftImg from "assets/microsoft.png";
import ExpediaGroupImg from "assets/home/expedia_group.jpeg";
import AptyImg from "assets/home/apty.png";
import JioImg from "assets/jio.png";
import QualcommImg from "assets/qualcomm.jpeg";
import DishImg from "assets/dishtv.png";
import TekionImg from "assets/tekion.jpeg";
import AmexImg from "assets/amex.png";
import DunzoImg from "assets/dunzo.png";
import NaviImg from "assets/navi.png";
import GrabImg from "assets/grab.jpeg";
import VoyceImg from "assets/voyce.png";
import FoxImage from "assets/fox.png";
import ChristyMedia from "assets/cm.jpeg";
import LaunchDarklyImg from "assets/launch_darkly.png";
import MasterCardImg from "assets/mastercard.jpeg";
import CricbuzzImg from "assets/cricbuzz.png";
import AgodaImg from "assets/agoda.jpeg";
import AutodeskImg from "assets/autodesk.png";
import UVImg from "assets/uv.png";
import CoupangImg from "assets/c.png";
import TessellImg from "assets/t.jpeg";
import HackerRankImg from "assets/h.png";
import GartnerImg from "assets/gartner.png";
import TargetImg from "assets/target.png";
import MythikImg from "assets/mythik.png";

function handleClick(link) {
  const win = window.open(link, "_blank");
  win.focus();
}

const images = [
  {
    img: GoogleImg,
    link: "https://www.google.com/",
  },
  {
    img: MicrosoftImg,
    link: "https://www.microsoft.com/",
  },
  {
    img: AmazonImage,
    link: "https://www.amazon.com/",
  },
  {
    img: UberImg,
    link: "https://www.uber.com/in/en/",
  },
  {
    img: PayPalImage,
    link: "https://www.paypal.com/in/home",
  },
  {
    img: FoxImage,
    link: "https://www.foxcorporation.com/",
  },
  // {
  //   img: TekionImg,
  //   link: "https://www.tekion.com/",
  // },
  {
    img: DishImg,
    link: "https://www.dish.com/",
  },
  // {
  //   img: CREDImage,
  //   link: "https://cred.club/",
  // },
  {
    img: ChristyMedia,
    link: "https://christy-media.com/",
  },
  {
    img: LaunchDarklyImg,
    link: "https://launchdarkly.com/",
  },
  {
    img: UVImg,
    link: "https://www.uniquevision.co.jp/",
  },
  // {
  //   img: LambdaTestImg,
  //   link: "https://www.lambdatest.com/",
  // },
  // {
  //   img: RazorpayImage,
  //   link: "https://razorpay.com/",
  // },
  // {
  //   img: PaytmImage,
  //   link: "https://paytm.com/",
  // },
  {
    img: HotstarImg,
    link: "https://hotstar.com",
  },
  {
    img: BrowserStackImage,
    link: "https://www.browserstack.com/",
  },
  {
    img: VmwareImage,
    link: "https://www.vmware.com/in.html",
  },
  // {
  //   img: GrowwImage,
  //   link: "https://groww.in/",
  // },

  {
    img: IntuitImg,
    link: "https://intuit.com",
  },
  {
    img: ExpediaGroupImg,
    link: "https://www.expediagroup.com/home/default.aspx",
  },

  // {
  //   img: PromoImg,
  //   link: "https://www.promo.com/",
  // },
  // {
  //   img: DunzoImg,
  //   link: "https://dunzo.com",
  // },
  {
    img: CricbuzzImg,
    link: "https://www.cricbuzz.com/",
  },
  // {
  //   img: WildsterImg,
  //   link: "https://wildster.com",
  // },
  // {
  //   img: AptyImg,
  //   link: "https://apty.io",
  // },
  {
    img: EducativeImg,
    link: "https://www.educative.io/",
  },
  // {
  //   img: GrofersImg,
  //   link: "https://www.grofers.com/",
  // },
  {
    img: NaviImg,
    link: "https://navi.com/",
  },
  // {
  //   img: GrabImg,
  //   link: "https://grab.com",
  // },
  {
    img: TargetImg,
    link: "https://www.target.com/",
  },
  {
    img: VoyceImg,
    link: "https://voyce.com",
  },
  // {
  //   img: TcsImage,
  //   link: "https://www.tcs.com/",
  // },
  // {
  //   img: UnluImage,
  //   link: "https://unlu.io/",
  // },
  {
    img: HackerRankImg,
    link: "https://www.hackerrank.com/",
  },
  // {
  //   img: OpenHouseImage,
  //   link: "https://openhouse.study/",
  // },
  {
    img: AmexImg,
    link: "https://www.amexglobalbusinesstravel.com/au/",
  },
  {
    img: TessellImg,
    link: "https://www.tessell.com/",
  },
  // {
  //   img: TuringImage,
  //   link: "https://turing.com/",
  // },
  {
    img: NetSkopeImg,
    link: "https://netskope.com",
  },
  // {
  //   img: ZeeveImg,
  //   link: "https://zeeve.io",
  // },
  // {
  //   img: QualcommImg,
  //   link: "https://qualcomm.com/",
  // },
  {
    img: GartnerImg,
    link: "https://www.gartner.com/en/",
  },
  {
    img: InstahyreImg,
    link: "https://www.instahyre.com/",
  },
  {
    img: CoupangImg,
    link: "https://www.coupang.com/",
  },
  // {
  //   img: MasterCardImg,
  //   link: "https://www.mastercard.com/",
  // },
  // {
  //   img: MoonshotImg,
  //   link: "https://moonshotjr.com",
  // },
  {
    img: AvisoImg,
    link: "https://aviso.com",
  },
  {
    img: VerizonImg,
    link: "https://verizon.com",
  },
  // {
  //   img: ProboImg,
  //   link: "https://probo.in",
  // },
  {
    img: AutodeskImg,
    link: "https://www.autodesk.com/",
  },
  // {
  //   img: JioImg,
  //   link: "https://jio.com",
  // },
  // {
  //   img: MindTickleImg,
  //   link: "http://mindtickle.com/",
  // },
  {
    img: MythikImg,
    link: "https://www.instagram.com/mythikentertainment/reels/",
  },
  {
    img: AgodaImg,
    link: "https://www.agoda.com/",
  },
  // {
  //   img: MindbowserImg,
  //   link: "https://mindbowser.com",
  // },
];

const OffersComponent = () => {
  return (
    <Container data-aos="fade-up">
      <Label>
        <I18n t="invite" />
      </Label>
      <HeartComponent />
      <Label m>
        <I18n t="messages" />
      </Label>
      <ImgContainer>
        {images.slice(0, 16).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </ImgContainer>
      <ImgContainer>
        {images.slice(16).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </ImgContainer>
      <MediumImgContainer>
        {images.slice(0, 8).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </MediumImgContainer>
      <MediumImgContainer>
        {images.slice(8, 16).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </MediumImgContainer>
      <MediumImgContainer>
        {images.slice(16, 24).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </MediumImgContainer>
      <MediumImgContainer>
        {images.slice(24).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </MediumImgContainer>
      <SmallImgContainer>
        {images.slice(0, 8).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </SmallImgContainer>
      <SmallImgContainer>
        {images.slice(8, 16).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </SmallImgContainer>
      <SmallImgContainer>
        {images.slice(16, 24).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </SmallImgContainer>
      {/* <SmallImgContainer>
        {images.slice(18, 24).map((i, k) => (
          <Img
            key={k}
            alt="img"
            src={i.img}
            onClick={() => handleClick(i.link)}
          />
        ))}
      </SmallImgContainer> */}
      <SmallImgContainer>
        {images.slice(24).map((i, k) => (
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
