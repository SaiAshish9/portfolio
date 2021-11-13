import React, { useState } from "react";

import { Container, Img, Label, Content, Title } from "./styles";

import AppTownImg from "assets/home/appTown.png";
import PracifyImg from "assets/home/pracify.png";
import InuvestImg from "assets/home/inuvest.png";
import Nex2MeImg from "assets/home/nex2me.png";
import UVRobotsImg from "assets/home/uvrobots.png";
import VelvetImg from "assets/home/velvet.svg";
import PayTMImg from "assets/home/paytm.jpeg";
import SearchVaccinesImg from "assets/home/searchVaccines.png";

import I18n from "common/I18n";

import Overlay from "common/modal";

const data = [
  {
    img: PayTMImg,
    label: <I18n t="paytm" />,
    position: <I18n t="intern" />,
    exp: 3,
    id: 0,
    images: [
      "https://res.cloudinary.com/saiashish/image/upload/v1633857822/WhatsApp_Image_2021-10-10_at_14.53.29_jlnfcb.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1633857709/WhatsApp_Image_2021-10-10_at_14.48.57_1_meqy86.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1633857709/WhatsApp_Image_2021-10-10_at_14.48.57_fefetd.jpg",
      "https://res.cloudinary.com/saiashish/image/upload/v1634480128/WhatsApp_Image_2021-10-15_at_19.55.26_yyocec.jpg",
    ],
    link: "https://paytm.com",
  },
  {
    img: VelvetImg,
    label: <I18n t="velvet" />,
    position: <I18n t="applicationDevIntern" />,
    exp: 8,
    id: 1,
    link: "https://velvet.video",
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
    id: 2,
    link: "https://uvrobots.io",
  },
  {
    img: InuvestImg,
    label: <I18n t="inuvest" />,
    position: <I18n t="fullStackPyIntern" />,
    exp: 5,
    id: 3,
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
      "https://res.cloudinary.com/saiashish/image/upload/v1627711613/Screenshot_from_2021-05-02_18-27-04_khqy9t.png",
    ],
  },
  {
    img: SearchVaccinesImg,
    label: <I18n t="searchVaccines" />,
    position: <I18n t="applicationDevIntern" />,
    exp: 2,
    id: 4,
    searchVaccinesImg: true,
    images: [
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
    id: 5,
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
    ],
    link: "https://apptown.in",
  },
  {
    img: PracifyImg,
    label: <I18n t="pracify" />,
    position: <I18n t="mernIntern" />,
    exp: 3,
    id: 6,
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
    ],
  },
  {
    img: Nex2MeImg,
    label: <I18n t="nex2Me" />,
    position: <I18n t="javaIntern" />,
    exp: 1,
    id: 7,
    link: "https://www.linkedin.com/company/nex2me-introtuce/",
    image:
      "https://res.cloudinary.com/saiashish/image/upload/v1627679349/nex2Me_hy2jr9.png",
  },
];

const Experience = () => {
  const [visible, setVisible] = useState(false);
  const [selectedExp, setSelectedExp] = useState(0);

  function handleClick(k) {
    if (k === 2) {
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
        {data.map((i, k) => (
          <Content key={k} onClick={() => handleClick(i.id)}>
            <Img svImg={+i.searchVaccinesImg} src={i.img} alt="img" />
            <Label>{i.label}</Label>
            <Title>{i.position}</Title>
            <Title>
              {i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}
            </Title>
          </Content>
        ))}
      </Container>

      <Overlay
        data={data[selectedExp]}
        visible={visible}
        setVisible={setVisible}
        label={<I18n t="images" />}
        site
      />
    </div>
  );
};

export default Experience;
