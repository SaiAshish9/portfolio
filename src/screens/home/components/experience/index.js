import React, { useState } from "react";

import {
  Container,
  Img,
  Label,
  Content,
  MContainer,
  SContainer,
  ParentContainer,
  Title,
} from "./styles";

import AppTownImg from "assets/home/appTown.png";
import PracifyImg from "assets/home/pracify.png";
import InuvestImg from "assets/home/inuvest.png";
import Nex2MeImg from "assets/home/nex2me.png";
import UVRobotsImg from "assets/home/uvrobots.png";
import VelvetImg from "assets/home/velvet.svg";

import I18n from "common/I18n";

import Overlay from "common/modal";

const data = [
  {
    img: AppTownImg,
    label: <I18n t="appTown" />,
    position: <I18n t="reactIntern" />,
    exp: 8,
    id: 0,
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
    id: 1,
    link: "https://pracify.tech",
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
    img: InuvestImg,
    label: <I18n t="inuvest" />,
    position: <I18n t="fullStackPyIntern" />,
    exp: 5,
    id: 2,
    link: "https://inuvest.tech",
    images: [],
  },
  {
    img: VelvetImg,
    label: <I18n t="velvet" />,
    position: <I18n t="applicationDevIntern" />,
    exp: 5,
    id: 3,
    link: "https://velvet.video",
    images: [],
  },
  {
    img: UVRobotsImg,
    label: <I18n t="uvrobots" />,
    position: <I18n t="applicationDevIntern" />,
    exp: 5,
    id: 4,
    link: "https://uvrobots.io",
    images: [],
  },
  {
    img: Nex2MeImg,
    label: <I18n t="nex2Me" />,
    position: <I18n t="javaIntern" />,
    exp: 1,
    id: 5,
    link: "https://www.linkedin.com/company/nex2me-introtuce/",
    images: [
      "https://res.cloudinary.com/saiashish/image/upload/v1627679349/nex2Me_hy2jr9.png",
    ],
  },
];

const Experience = () => {
  const [visible, setVisible] = useState(false);
  const [selectedExp, setSelectedExp] = useState(0);

  function handleClick(k) {
    setSelectedExp(k);
    setVisible(true);
  }

  return (
    <>
      <Container>
        {data.map((i, k) => (
          <Content key={k} onClick={() => handleClick(i.id)}>
            <Img src={i.img} alt="img" />
            <Label>{i.label}</Label>
            <Title>{i.position}</Title>
            <Title>
              {i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}
            </Title>
          </Content>
        ))}
      </Container>
      <MContainer>
        <ParentContainer>
          {data.slice(0, 3).map((i, k) => (
            <Content key={k} onClick={() => handleClick(i.id)}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}
              </Title>
            </Content>
          ))}
        </ParentContainer>
        <ParentContainer>
          {data.slice(3).map((i, k) => (
            <Content key={k} onClick={() => handleClick(i.id)}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}
              </Title>
            </Content>
          ))}
        </ParentContainer>
      </MContainer>
      <SContainer>
        <ParentContainer>
          {data.slice(0, 2).map((i, k) => (
            <Content key={k} onClick={() => handleClick(i.id)}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}
              </Title>
            </Content>
          ))}
        </ParentContainer>
        <ParentContainer>
          {data.slice(2, 4).map((i, k) => (
            <Content key={k} onClick={() => handleClick(i.id)}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}
              </Title>
            </Content>
          ))}
        </ParentContainer>
        <ParentContainer>
          {data.slice(4).map((i, k) => (
            <Content key={k} onClick={() => handleClick(i.id)}>
              <Img src={i.img} alt="img" />
              <Label>{i.label}</Label>
              <Title>{i.position}</Title>
              <Title>
                {i.exp} {i.exp > 1 ? <I18n t="month's" /> : <I18n t="month" />}
              </Title>
            </Content>
          ))}
        </ParentContainer>
      </SContainer>
      <Overlay
        data={data[selectedExp]}
        visible={visible}
        setVisible={setVisible}
        label={<I18n t="images" />}
        site
      />
    </>
  );
};

export default Experience;
