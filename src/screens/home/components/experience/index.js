import React, { useState } from "react";

import {
  Container,
  Img,
  Label,
  Content,
  Title,
  Parent,
  MParent,
  SParent,
} from "./styles";

import AppTownImg from "assets/home/appTown.png";
import PracifyImg from "assets/home/pracify.png";
import InuvestImg from "assets/home/inuvest.png";
import Nex2MeImg from "assets/home/nex2me.png";
import UVRobotsImg from "assets/home/uvrobots.png";
import VelvetImg from "assets/home/velvet.svg";
import PayTMImg from "assets/home/paytm.jpeg";
import SearchVaccinesImg from "assets/searchVaccines.png";
import LambdaTestImg from "assets/home/lambda-test.png";
import CareMedicoImg from "assets/home/care-medico.png";
import CMImg1 from "assets/home/cm1.jpeg";
import CMImg2 from "assets/home/cm2.jpeg";
import CMImg3 from "assets/home/cm3.jpeg";
import CMImg4 from "assets/home/cm4.jpeg";
import CMImg5 from "assets/home/cm5.jpeg";
import CMImg6 from "assets/home/cm6.jpeg";
import CMImg7 from "assets/home/cm7.jpeg";
import CMImg8 from "assets/home/cm8.jpeg";
import SwiftRoboticsImg from "assets/swiftRobotics.jpeg";
import SwiftShopsImg from "assets/swiftShops.png";
import FeelAtHomeImg from "assets/feelAtHome.png";
import TekionImg from "assets/tekion.jpeg";
import VideoVerseImg from "assets/vverse.jpg";
import MagnifiImg from "assets/magnifi.jpeg";
import RGSOCImg from "assets/rgsoc.jpeg";
import MsftDevChallengeImg from "assets/msftdevchallenge.jpeg";
import SigIQImg from "assets/sigiq.jpeg";
import PadhAIImg from "assets/padhai.png";

import I18n from "common/I18n";

import Overlay from "common/modal";

const data = [
  {
    img: TekionImg,
    label: <I18n t="tekion" />,
    position: <I18n t="backend" />,
    link: "https://www.tekion.com",
    exp: 18,
    yr: true,
    id: 0,
  },
  {
    img: VideoVerseImg,
    label: <I18n t="videoverse" />,
    position: <I18n t="fullstack" />,
    link: "https://www.vverse.ai",
    exp: 6,
    id: 1,
  },
  {
    img: MagnifiImg,
    label: <I18n t="magnifi" />,
    position: <I18n t="fullstack" />,
    link: "https://magnifi.ai/",
    exp: 6,
    id: 2,
  },
  {
    img: SigIQImg,
    label: <I18n t="sigiq" />,
    position: <I18n t="applicationDev" />,
    link: "https://sigiq.ai",
    exp: 2,
    id: 3,
  },
  {
    img: PadhAIImg,
    label: <I18n t="padhai" />,
    position: <I18n t="applicationDev" />,
    link: "https://padhai.ai/",
    exp: 2,
    id: 4,
  },
  {
    img: LambdaTestImg,
    label: <I18n t="lambda-test" />,
    position: <I18n t="sde-intern" />,
    link: "https://www.lambdatest.com/support/docs/getting-started-with-xcuitest/",
    exp: 5,
    id: 5,
  },
  {
    img: PayTMImg,
    label: <I18n t="paytm" />,
    position: <I18n t="sde-intern" />,
    exp: 3,
    id: 6,
    images: [
      "https://res.cloudinary.com/saiashish/image/upload/v1633857822/WhatsApp_Image_2021-10-10_at_14.53.29_jlnfcb.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1633857709/WhatsApp_Image_2021-10-10_at_14.48.57_1_meqy86.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1633857709/WhatsApp_Image_2021-10-10_at_14.48.57_fefetd.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1634480128/WhatsApp_Image_2021-10-15_at_19.55.26_yyocec.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1643580585/Screenshot_2022-01-31_at_3.37.58_AM_v1e6nn.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1643580585/Screenshot_2022-01-31_at_3.38.07_AM_hzbuud.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1643580585/Screenshot_2022-01-31_at_3.38.32_AM_ich2pd.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1643580585/Screenshot_2022-01-31_at_3.38.20_AM_ryompq.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1643580585/Screenshot_2022-01-31_at_3.38.39_AM_yoalcn.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1643580585/Screenshot_2022-01-31_at_3.38.54_AM_uzfchh.png",
    ],
    link: "https://paytm.com/blog/engineering/plutus-a-cloud-cost-optimization-tool/",
  },
  {
    img: VelvetImg,
    label: <I18n t="velvet" />,
    position: <I18n t="applicationDevIntern" />,
    exp: 18,
    yr: true,
    id: 7,
    link: "https://dev.velvet.video",
    images: [
      "https://res.cloudinary.com/saiashish/image/upload/v1627712155/Screenshot_from_2021-07-31_11-45-29_vz8jyd.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627712156/Screenshot_from_2021-07-31_11-45-17_x53zed.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627709820/stewards1_kptfk4.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711837/Screenshot_2021-07-30_at_12.47.31_PM_xrbfzl.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711836/Screenshot_2021-07-30_at_12.50.44_PM_dllewu.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711835/Screenshot_20210622_170550_idlzx2.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711835/Screenshot_20210701_182441_bimm3e.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711835/Screenshot_20210625_163115_fuirgr.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711834/Screenshot_20210619_170407_jd4hxp.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711684/Screenshot_from_2021-05-30_17-16-26_qxxpys.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711668/Screenshot_from_2021-06-14_13-13-15_ufjc5o.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711593/Screenshot_from_2021-04-24_15-10-16_g5kyjg.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711557/Screenshot_from_2021-04-21_22-51-28_hz0jdb.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711543/Screenshot_from_2021-04-21_22-31-58_z4olme.png",
    ],
  },
  {
    img: UVRobotsImg,
    label: <I18n t="uvrobots" />,
    position: <I18n t="applicationDevIntern" />,
    exp: 5,
    id: 8,
    link: "https://uvrobots.io",
  },
  {
    img: InuvestImg,
    label: <I18n t="inuvest" />,
    position: <I18n t="fullStackPyIntern" />,
    exp: 5,
    id: 9,
    link: "https://inuvest.tech",
    images: [
      "https://res.cloudinary.com/saiashish/image/upload/v1627679809/inuvest2_yqyqv0.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627679808/inuvest1_kch4vg.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708672/inuvest20_gv4agu.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708672/inuvest18_wlaxok.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708673/inuvest23_jaeucr.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708673/inuvest19_xm2rur.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708672/inuvest15_ntxoek.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708673/inuvest22_m6k7yr.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708672/inuvest21_a06j9e.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708672/inuvest16_dvailg.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708671/inuvest9_pabvbg.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708672/inuvest14_dx24ek.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708672/inuvest17_t8ccz5.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708671/inuvest9_pabvbg.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708671/inuvest11_u4nm61.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708671/inuvest13_sya6hd.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708671/inuvest10_g6g9hk.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708670/inuvest8_dejsqi.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708670/inuvest6_jqk0vs.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708670/inuvest3_hxd4kt.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708670/inuvest5_zsuuf8.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627708670/inuvest7_sqtzwp.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770116/Screenshot_from_2021-03-26_12-14-22_dz9jx4.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770160/Screenshot_from_2021-03-27_02-19-48_w4g8f1.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770367/Screenshot_from_2021-03-26_11-07-55_dorddr.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770366/Screenshot_from_2021-03-26_10-01-28_pijsjr.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770363/Screenshot_from_2021-03-26_09-58-59_ajyrmm.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711613/Screenshot_from_2021-05-02_18-27-04_khqy9t.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770932/Screenshot_from_2021-12-18_01-23-07_sj98sl.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770931/Screenshot_from_2021-12-18_01-24-33_dvwayg.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770931/Screenshot_from_2021-12-18_01-23-51_swzvhd.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770931/Screenshot_from_2021-12-18_01-24-17_tpdfyn.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770930/Screenshot_from_2021-12-18_01-23-31_sxx8kd.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770930/Screenshot_from_2021-12-18_01-20-34_xjp2u3.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770930/Screenshot_from_2021-12-18_01-20-23_ozuzvl.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770930/Screenshot_from_2021-12-18_01-22-56_p2xbt1.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770930/Screenshot_from_2021-12-18_01-22-21_azdzv3.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770930/Screenshot_from_2021-12-18_01-22-10_l0w5jk.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770930/Screenshot_from_2021-12-18_01-22-00_ioj1ip.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639770929/Screenshot_from_2021-12-18_01-20-47_wpvkuy.png",
    ],
  },
  {
    img: SearchVaccinesImg,
    label: <I18n t="searchVaccines" />,
    position: <I18n t="applicationDevIntern" />,
    exp: 2,
    id: 10,
    searchVaccinesImg: true,
    images: [
      "https://res.cloudinary.com/saiashish/image/upload/v1639765449/Screenshot_from_2021-03-10_23-36-29_f4zst4.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639768930/Screenshot_from_2021-12-18_00-51-18_tvjmwr.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639768329/Screenshot_from_2021-04-07_18-19-16_mj3df6.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639768277/Screenshot_from_2021-04-07_16-12-22_wblzoa.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639768667/Screenshot_from_2021-04-10_21-26-30_onwxf0.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639768757/Screenshot_from_2021-04-12_21-07-49_swws2l.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639768467/Screenshot_from_2021-04-09_16-19-18_sdclo8.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639768458/Screenshot_from_2021-04-09_00-26-20_r7akvl.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639768456/Screenshot_from_2021-04-08_23-43-37_d9l9jp.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639768374/Screenshot_from_2021-04-08_15-38-54_w62dmu.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639767998/Screenshot_from_2021-04-05_16-18-03_sx2kwh.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639767703/Screenshot_from_2021-04-03_01-51-50_bmqurj.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639767699/Screenshot_from_2021-04-03_01-13-38_awnvfk.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639767538/Screenshot_from_2021-04-02_15-49-24_xwldpz.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639766446/Screenshot_from_2021-03-19_20-14-15_p7pv4y.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639766419/Screenshot_from_2021-03-19_19-36-00_ow6cpx.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639766401/Screenshot_from_2021-03-19_19-08-45_x8khk3.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639766385/Screenshot_from_2021-03-19_18-58-11_wfhfml.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639766381/Screenshot_from_2021-03-19_17-38-56_brnaj2.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639766430/Screenshot_from_2021-03-19_19-34-18_cbh7zr.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639766692/Screenshot_from_2021-04-02_03-35-50_bugi22.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639766621/Screenshot_from_2021-03-26_18-03-56_kjxyam.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639766577/Screenshot_from_2021-03-24_00-20-46_juyjf9.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639766460/Screenshot_from_2021-03-19_21-46-42_vnzvc1.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639764119/Screenshot_from_2021-03-15_15-11-13_cxuxuy.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639766110/Screenshot_from_2021-03-19_00-34-25_tqvf0m.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639763002/Screenshot_from_2021-03-07_21-50-20_mgoknv.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710326/Screenshot_from_2021-03-08_17-48-54_oh6z8x.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627709820/stewards1_kptfk4.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710554/Screenshot_from_2021-03-08_18-33-06_bhju4m.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710543/Screenshot_from_2021-03-07_22-31-37_gqshgw.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710517/Screenshot_from_2021-03-28_02-10-52_amzlcf.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710508/Screenshot_from_2021-03-29_01-09-13_nqeicp.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710500/Screenshot_from_2021-03-26_17-49-25_lymv9i.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710490/Screenshot_from_2021-03-25_15-29-22_nph597.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710481/Screenshot_from_2021-03-23_18-04-45_xizs1h.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710476/Screenshot_from_2021-03-23_22-06-40_ulo0zk.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710469/Screenshot_from_2021-03-23_17-54-26_kupjwh.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710454/Screenshot_from_2021-03-20_23-33-20_kug3qw.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710427/Screenshot_from_2021-03-18_17-19-23_mo1xio.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710420/Screenshot_from_2021-03-17_00-49-16_b9erdc.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710409/Screenshot_from_2021-03-16_15-45-31_ibzhan.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710403/Screenshot_from_2021-03-16_00-32-00_eczapi.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710394/Screenshot_from_2021-03-12_22-31-14_lsmge3.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710385/Screenshot_from_2021-03-10_20-38-26_kmlmwn.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710384/Screenshot_from_2021-03-10_00-07-04_mw2yz5.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710361/Screenshot_from_2021-03-09_19-59-13_lle5th.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710352/Screenshot_from_2021-03-08_22-08-08_xciupk.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710344/Screenshot_from_2021-03-08_22-12-37_p5rzh7.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710326/Screenshot_from_2021-03-08_17-48-54_oh6z8x.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627710303/Screenshot_from_2021-03-08_17-03-17_a7hh03.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627711876/Screenshot_from_2021-04-02_02-25-02_gwyoti.png",
    ],
    link: "https://searchvaccines.com",
  },
  {
    img: AppTownImg,
    label: <I18n t="appTown" />,
    position: <I18n t="reactIntern" />,
    exp: 8,
    id: 11,
    images: [
      "https://res.cloudinary.com/saiashish/image/upload/v1627675715/appTown1_r5y84v.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627675715/appTown2_wd65xx.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627675716/appTown3_vaazd5.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676739/appTown4_noirvp.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676739/appTown5_gqd0nr.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676739/appTown6_w7urwl.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676738/appTown7_akdolr.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676737/appTown10_qkmrvg.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676737/appTown8_deupnf.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676736/appTown9_xo5vlv.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676736/appTown12_ikqrvm.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676736/appTown11_am1e7p.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676736/appTown14_t1fbhl.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676735/appTown13_kd2rxv.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676734/appTown20_dplzna.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676734/appTown21_j7tdie.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676734/appTown19_e9zen0.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676734/appTown17_xhzrrk.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676734/appTown18_uv1zvv.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627676734/appTown16_w71vmz.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540147/WhatsApp_Image_2021-12-26_at_22.57.45_3_qc7wdq.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540146/WhatsApp_Image_2021-12-26_at_22.57.45_sw6hul.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540146/WhatsApp_Image_2021-12-26_at_22.57.46_f1m70l.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540146/WhatsApp_Image_2021-12-26_at_22.57.45_2_crv2ar.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540145/WhatsApp_Image_2021-12-26_at_22.57.45_1_xrppne.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540145/WhatsApp_Image_2021-12-26_at_22.57.44_whbgpn.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540145/WhatsApp_Image_2021-12-26_at_22.57.44_2_bfijln.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540145/WhatsApp_Image_2021-12-26_at_22.57.39_1_p4kfi2.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540145/WhatsApp_Image_2021-12-26_at_22.57.44_1_vlnbhh.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540145/WhatsApp_Image_2021-12-26_at_22.57.42_fog9qs.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540144/WhatsApp_Image_2021-12-26_at_22.57.40_dvh8ye.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540145/WhatsApp_Image_2021-12-26_at_22.57.43_gmpdr6.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540145/WhatsApp_Image_2021-12-26_at_22.57.42_2_xvx69a.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540145/WhatsApp_Image_2021-12-26_at_22.57.42_1_xspq8i.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540145/WhatsApp_Image_2021-12-26_at_22.57.41_tgo2ps.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540144/WhatsApp_Image_2021-12-26_at_22.57.41_1_wutxle.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540144/WhatsApp_Image_2021-12-26_at_22.57.41_3_bhapl0.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540144/WhatsApp_Image_2021-12-26_at_22.57.41_2_wp3pta.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540144/WhatsApp_Image_2021-12-26_at_22.57.40_2_q4ssuj.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540144/WhatsApp_Image_2021-12-26_at_22.57.38_lhx1d4.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540144/WhatsApp_Image_2021-12-26_at_22.57.38_2_scv4ms.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540144/WhatsApp_Image_2021-12-26_at_22.57.39_nf5l7r.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540144/WhatsApp_Image_2021-12-26_at_22.57.40_1_rgaahk.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640540143/WhatsApp_Image_2021-12-26_at_22.57.38_1_clx58a.jpg",
    ],
    link: "https://apptown.in",
  },
  {
    img: PracifyImg,
    label: <I18n t="pracify" />,
    position: <I18n t="mernIntern" />,
    exp: 3,
    id: 12,
    link: "https://pracify.com",
    images: [
      "https://res.cloudinary.com/saiashish/image/upload/v1627678325/pracify1_amuf2g.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678325/pracify2_qlqqe1.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678326/pracify3_yengyx.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678326/pracify5_tblcjh.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678325/pracify4_seq5ph.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678324/pracify6_tq2m77.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678324/pracify9_uwjzqf.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678324/pracify8_nv74s5.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678324/pracify15_pmogcg.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678324/pracify7_upkmxj.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678324/pracify10_rlsoub.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678323/pracify12_avpv1l.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678323/pracify11_auc8xf.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678323/pracify14_e24hfg.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678323/pracify13_idhey2.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678322/pracify20_gyetlr.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678322/pracify17_xsg3dv.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678322/pracify16_iimjj3.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678322/pracify18_laejgl.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678322/pracify19_ds7gjw.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1627678322/pracify21_jx6g4p.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639771264/Screenshot_from_2021-04-12_16-53-11_w7qs3q.png",
    ],
  },
  {
    img: Nex2MeImg,
    label: <I18n t="nex2Me" />,
    position: <I18n t="javaIntern" />,
    exp: 1,
    id: 13,
    link: "https://www.linkedin.com/company/nex2me-introtuce/",
    images: [
      "https://res.cloudinary.com/saiashish/image/upload/v1639780030/Screenshot_from_2021-12-18_03-52-59_rlzlpm.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639780029/Screenshot_from_2021-12-18_03-53-38_memtkx.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639780029/Screenshot_from_2021-12-18_03-53-21_zv4qg5.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1640538293/WhatsApp_Image_2021-12-18_at_02.25.45_2_nrjkhx.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640538292/WhatsApp_Image_2021-12-18_at_02.25.45_svbm4o.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640538291/WhatsApp_Image_2021-12-18_at_02.25.46_nhcrrj.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640538291/WhatsApp_Image_2021-12-18_at_02.25.44_t0kerm.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640538291/WhatsApp_Image_2021-12-18_at_02.25.44_1_wmidd9.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1640538291/WhatsApp_Image_2021-12-18_at_02.25.45_1_nyrrrs.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1627679349/nex2Me_hy2jr9.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639771365/Screenshot_from_2021-03-29_13-25-20_wjsx8n.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639771594/Screenshot_from_2021-03-22_19-48-19_zjryql.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639771753/Screenshot_from_2021-03-22_13-59-49_kkggmn.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639771739/Screenshot_from_2021-03-22_14-10-10_yaznwr.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639771732/Screenshot_from_2021-03-22_14-27-03_slxef8.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639771799/Screenshot_from_2021-03-22_13-14-28_tmvoky.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772013/Screenshot_from_2021-04-03_12-17-20_xsvsrd.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772046/Screenshot_from_2021-04-03_14-43-34_jzn0da.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772112/Screenshot_from_2021-04-01_17-57-45_chz7w7.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772112/Screenshot_from_2021-04-01_17-57-45_chz7w7.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772282/Screenshot_from_2021-03-24_16-50-30_xtsxdq.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772291/Screenshot_from_2021-03-24_16-15-06_nyjmzf.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772291/Screenshot_from_2021-03-24_16-15-06_nyjmzf.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772282/Screenshot_from_2021-03-24_16-50-30_xtsxdq.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772334/Screenshot_from_2021-03-22_19-48-19_wbmoqt.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772447/Screenshot_from_2021-03-13_17-35-09_pwcbei.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772448/Screenshot_from_2021-03-13_17-54-25_oqqd62.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772459/Screenshot_from_2021-03-13_18-17-41_yd2gy5.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772622/Screenshot_from_2021-03-06_18-09-34_johoua.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772570/Screenshot_from_2021-03-27_20-16-50_pznu1b.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639773325/Screenshot_from_2021-12-18_01-43-47_i8t9vu.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639772622/Screenshot_from_2021-03-06_17-48-23_knyjri.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639774022/Screenshot_from_2021-03-19_14-58-55_hul2uf.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639780030/Screenshot_from_2021-12-18_03-52-51_jmhdjn.png",
      "https://res.cloudinary.com/saiashish/image/upload/v1639780030/Screenshot_from_2021-12-18_03-53-08_eexmt5.png",
    ],
  },
  {
    img: CareMedicoImg,
    label: <I18n t="care-medico" />,
    position: <I18n t="sde-intern" />,
    exp: 1,
    id: 14,
    images: [CMImg1, CMImg2, CMImg3, CMImg4, CMImg5, CMImg6, CMImg7, CMImg8],
  },
  {
    img: SwiftRoboticsImg,
    label: <I18n t="swiftRobotics" />,
    position: <I18n t="sde-intern" />,
    link: "https://www.swiftrobotics.ai/",
    exp: 18,
    yr: true,
    id: 15,
  },
  {
    img: SwiftShopsImg,
    label: <I18n t="swiftShops" />,
    position: <I18n t="sde-intern" />,
    link: "https://www.linkedin.com/company/swiftrobots/posts/?feedView=all",
    exp: 3,
    id: 16,
  },
  {
    img: RGSOCImg,
    label: <I18n t="rgsoc" />,
    position: <I18n t="mentor" />,
    link: "https://railsgirlssummerofcode.org/",
    exp: 1,
    id: 17,
  },
  {
    img: FeelAtHomeImg,
    label: <I18n t="feelAtHome" />,
    position: <I18n t="contributor" />,
    link: "https://devfolio.co/projects/feel-at-home-1",
    exp: 1,
    id: 18,
  },
  {
    img: MsftDevChallengeImg,
    label: <I18n t="teamsDevC" />,
    position: <I18n t="contributor" />,
    link: "https://devpost.com/software/teams-by-sai",
    exp: 1,
    id: 19,
  },
];

const Experience = () => {
  const [visible, setVisible] = useState(false);
  const [selectedExp, setSelectedExp] = useState(0);

  function handleClick(k) {
    if (
      k === 0 ||
      k == 1 ||
      k == 2 ||
      k == 3 ||
      k === 4 ||
      k == 5 ||
      k == 8 ||
      k > 14
    ) {
      const win = window.open(data[k]["link"], "_blank");
      win.focus();
    } else {
      setSelectedExp(k);
      setVisible(true);
    }
  }

  return (
    <div data-aos="zoom-in">
      <Container>
        <Parent>
          {data.slice(0, 10).map((i, k) => (
            <Content key={k} id={k} onClick={() => handleClick(i.id)}>
              <Img svImg={+i.searchVaccinesImg} src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp > 11 ? parseFloat(i.exp / 12).toFixed(1) : i.exp}{" "}
                {i.yr && i.exp > 12 ? (
                  <I18n t="years" />
                ) : i.yr ? (
                  <I18n t="year" />
                ) : i.exp > 1 ? (
                  <I18n t="month's" />
                ) : (
                  <I18n t="month" />
                )}
              </Title>
            </Content>
          ))}
        </Parent>
        <Parent>
          {data.slice(10).map((i, k) => (
            <Content key={k + 10} id={10 + k} onClick={() => handleClick(i.id)}>
              <Img svImg={+i.searchVaccinesImg} src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp > 11 ? parseFloat(i.exp / 12).toFixed(1) : i.exp}{" "}
                {i.yr && i.exp > 12 ? (
                  <I18n t="years" />
                ) : i.yr ? (
                  <I18n t="year" />
                ) : i.exp > 1 ? (
                  <I18n t="month's" />
                ) : (
                  <I18n t="month" />
                )}
              </Title>
            </Content>
          ))}
        </Parent>
        <MParent>
          {data.slice(0, 4).map((i, k) => (
            <Content key={k} id={k} onClick={() => handleClick(i.id)}>
              <Img svImg={+i.searchVaccinesImg} src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp > 11 ? parseFloat(i.exp / 12).toFixed(1) : i.exp}{" "}
                {i.yr && i.exp > 12 ? (
                  <I18n t="years" />
                ) : i.yr ? (
                  <I18n t="year" />
                ) : i.exp > 1 ? (
                  <I18n t="month's" />
                ) : (
                  <I18n t="month" />
                )}
              </Title>
            </Content>
          ))}
        </MParent>
        <MParent>
          {data.slice(4, 8).map((i, k) => (
            <Content key={k + 4} id={4 + k} onClick={() => handleClick(i.id)}>
              <Img svImg={+i.searchVaccinesImg} src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp > 11 ? parseFloat(i.exp / 12).toFixed(1) : i.exp}{" "}
                {i.yr && i.exp > 12 ? (
                  <I18n t="years" />
                ) : i.yr ? (
                  <I18n t="year" />
                ) : i.exp > 1 ? (
                  <I18n t="month's" />
                ) : (
                  <I18n t="month" />
                )}
              </Title>
            </Content>
          ))}
        </MParent>
        <MParent>
          {data.slice(8, 12).map((i, k) => (
            <Content key={k + 8} id={8 + k} onClick={() => handleClick(i.id)}>
              <Img svImg={+i.searchVaccinesImg} src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp > 11 ? parseFloat(i.exp / 12).toFixed(1) : i.exp}{" "}
                {i.yr && i.exp > 12 ? (
                  <I18n t="years" />
                ) : i.yr ? (
                  <I18n t="year" />
                ) : i.exp > 1 ? (
                  <I18n t="month's" />
                ) : (
                  <I18n t="month" />
                )}
              </Title>
            </Content>
          ))}
        </MParent>
        <MParent>
          {data.slice(12, 16).map((i, k) => (
            <Content key={k + 12} id={12 + k} onClick={() => handleClick(i.id)}>
              <Img svImg={+i.searchVaccinesImg} src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp > 11 ? parseFloat(i.exp / 12).toFixed(1) : i.exp}{" "}
                {i.yr && i.exp > 12 ? (
                  <I18n t="years" />
                ) : i.yr ? (
                  <I18n t="year" />
                ) : i.exp > 1 ? (
                  <I18n t="month's" />
                ) : (
                  <I18n t="month" />
                )}
              </Title>
            </Content>
          ))}
        </MParent>
        <MParent>
          {data.slice(16).map((i, k) => (
            <Content key={k + 16} id={16 + k} onClick={() => handleClick(i.id)}>
              <Img svImg={+i.searchVaccinesImg} src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp > 11 ? parseFloat(i.exp / 12).toFixed(1) : i.exp}{" "}
                {i.yr && i.exp > 12 ? (
                  <I18n t="years" />
                ) : i.yr ? (
                  <I18n t="year" />
                ) : i.exp > 1 ? (
                  <I18n t="month's" />
                ) : (
                  <I18n t="month" />
                )}
              </Title>
            </Content>
          ))}
        </MParent>
        <SParent>
          {data.map((i, k) => (
            <Content key={k} id={k} onClick={() => handleClick(i.id)}>
              <Img svImg={+i.searchVaccinesImg} src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp > 11 ? parseFloat(i.exp / 12).toFixed(1) : i.exp}{" "}
                {i.yr && i.exp > 12 ? (
                  <I18n t="years" />
                ) : i.yr ? (
                  <I18n t="year" />
                ) : i.exp > 1 ? (
                  <I18n t="month's" />
                ) : (
                  <I18n t="month" />
                )}
              </Title>
            </Content>
          ))}
        </SParent>
      </Container>
      {visible && data[selectedExp] && (
        <Overlay
          data={data[selectedExp]}
          visible={visible}
          setVisible={setVisible}
          label={<I18n t="images" />}
          site={data[selectedExp].id !== 9}
        />
      )}
    </div>
  );
};

export default Experience;
