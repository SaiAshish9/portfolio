import React, { useState } from "react";

import { Tooltip } from "antd";

import {
  Container,
  Label,
  Moon,
  Sun,
  Row,
  Eye,
  Mute,
  UnMute,
  ViewCountContainer,
  ContainerLabel,
  Player,
  SmallLabel,
} from "./styles";

import { useStore } from "store";

import { Theme } from "constants/index";

import Dropdown from "./components/dropdown";

import ReactPlayer from "react-player";

import NeverSayNeverImg from "assets/home/neverSayNever.jpg";

import { useHistory } from "react-router-dom";

import I18n from "common/I18n";

const Header = ({ scrolled }) => {
  const {
    state: { theme, count },
    actions: { setTheme },
  } = useStore();

  function handleIconClick() {
    const t = theme === Theme.dark ? Theme.light : Theme.dark;
    setTheme(t);
    localStorage.setItem("theme", t);
  }

  const history = useHistory();

  const [isMuted, setIsMuted] = useState(false);

  let iconContent = <Sun onClick={handleIconClick} ismuted={isMuted ? 1 : 0} />;

  if (theme === Theme.dark) {
    iconContent = <Moon onClick={handleIconClick} ismuted={isMuted ? 1 : 0} />;
  }

  function handleMuteIconClick() {
    setIsMuted((muted) => setIsMuted(!muted));
  }

  let muteIconContent = <Mute onClick={handleMuteIconClick} />;

  if (isMuted) {
    muteIconContent = <UnMute onClick={handleMuteIconClick} />;
  }

  const songs = [
    {
      img: NeverSayNeverImg,
      title: "Never Say Never",
      subTitle: "3:50",
      id: 0,
      songUrl:
        "https://res.cloudinary.com/saiashish/video/upload/v1627480882/Justin_Bieber_Never_Say_Never_Official_Music_Video_ft_Jaden_Smith_iywywm.mp3",
    },
    {
      img: "https://a10.gaanacdn.com/images/albums/57/64957/crop_480x480_64957.jpg",
      title: "Deva Shree Ganesha",
      subTitle: "5:57",
      id: 1,
      songUrl:
        "https://res.cloudinary.com/saiashish/video/upload/v1627499908/Deva_Shree_Ganesha_-_Agneepath_128_Kbps_gtb4vq.mp3",
    },
    {
      img: "http://a10.gaanacdn.com/images/albums/50/1893750/crop_480x480_1893750.jpg",
      title: "Despacito",
      subTitle: "3:30",
      id: 2,
      songUrl:
        "https://res.cloudinary.com/saiashish/video/upload/v1627503986/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_128_kbps_wruuxz.mp3",
    },
    {
      img: "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/01/shirdi-temple-1579414291.jpg",
      title: "Shirdi Sai",
      subTitle: "5:58",
      id: 3,
      songUrl:
        "https://res.cloudinary.com/saiashish/video/upload/v1627500532/MP3DOWNLOAD.TO_Shirdi_Wale_Sai_Baba_Full_Video_-_Amar_Akbar_Anthony___Rishi_Kapoor_Nirupa_Roy___Mohammed_Rafi-128k_shotvc.mp3",
    },
    {
      img: "https://a10.gaanacdn.com/gn_img/albums/qa4WEkqKP1/a4WE0QJg3P/size_xxl_1554294067.webp",
      title: "Achyutam Keshavam",
      subTitle: "10:20",
      id: 4,
      songUrl:
        "https://res.cloudinary.com/saiashish/video/upload/v1627501135/Achyutam_Keshavam___%E0%A4%85%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A5%81%E0%A4%A4%E0%A4%AE_%E0%A4%95%E0%A5%87%E0%A4%B6%E0%A4%B5%E0%A4%82_%E0%A4%95%E0%A5%83%E0%A4%B7%E0%A5%8D%E0%A4%A3_%E0%A4%A6%E0%A4%BE%E0%A4%AE%E0%A5%8B%E0%A4%A6%E0%A4%B0%E0%A4%82___Shreya_Ghoshal___Krishna_Bhajan_64_kbps_ztnsdt.mp3",
    },
    {
      img: "http://a10.gaanacdn.com/images/albums/55/3354355/crop_480x480_3354355.jpg",
      title: "Satisfya",
      subTitle: "3:00",
      id: 5,
      songUrl:
        "https://res.cloudinary.com/saiashish/video/upload/v1627501325/Satisfya_128_kbps_wqoceu.mp3",
    },
    {
      img: "https://a10.gaanacdn.com/images/albums/6/58306/crop_480x480_58306.jpg",
      title: "Why This Kolavari Di ?",
      subTitle: "4:10",
      id: 6,
      songUrl:
        "https://res.cloudinary.com/saiashish/video/upload/v1627501711/WHY_THIS_KOLAVERI_DI_-_Official_Movie_Full_Song_Video_from_the_movie_3_feat_Dhanush_exclusive_128_kbps_k1e1mu.mp3",
    },
    {
      img: "http://a10.gaanacdn.com/images/albums/27/2207027/crop_480x480_2207027.jpg",
      title: "Baby",
      subTitle: "3:50",
      id: 7,
      songUrl: "3:38",
    },
    {
      img: "https://a10.gaanacdn.com/gn_img/albums/XzVWRyL3dq/zVWRam8L3d/size_l.jpg",
      title: "Enna Sona",
      subTitle: "3:52",
      id: 8,
      songUrl:
        "https://res.cloudinary.com/saiashish/video/upload/v1627502191/Enna_Sona_Lyric_Video___Shraddha_Kapoor___Aditya_Roy_Kapur___A.R._Rahman___Arijit_Singh_128_kbps_patiu0.mp3",
    },
  ];

  const languages = [
    {
      id: 0,
      title: "🇬🇧 English",
      code: "en",
    },
    {
      id: 1,
      title: "🇮🇳 हिंदी",
      code: "hi",
    },
    {
      id: 2,
      title: "🇮🇳 తెలుగు",
      code: "te",
    },
    {
      id: 3,
      title: "🇩🇪 Deutsche",
      code: "de",
    },
    {
      id: 4,
      title: "🇷🇺 русский",
      code: "ru",
    },
    {
      id: 5,
      title: "🇫🇷 français",
      code: "FR",
    },
    {
      id: 6,
      title: "🇵🇹 Português",
      code: "pt",
    },
    {
      id: 7,
      title: "🇨🇳 中國人",
      code: "zh",
    },
  ];

  const [selected, setSelected] = useState(0);

  const [selectedLanguage, setSelectedLanguage] = useState(0);

  console.log(history);

  return (
    <Container scrolled={scrolled}>
      <Tooltip placement="bottomLeft" title="D. D. V. Sai Ashish">
        <Label>
          <I18n t="Sai Ashish" />
        </Label>
        <SmallLabel>Sai</SmallLabel>
      </Tooltip>

      <Row>
        {muteIconContent}
        {isMuted && (
          <Dropdown
            songs={songs}
            selected={selected}
            setSelected={setSelected}
          />
        )}
        {iconContent}
        <Tooltip placement="bottomRight" title="Viewer's Count">
          <ViewCountContainer>
            <Eye />
            <ContainerLabel>{count}</ContainerLabel>
          </ViewCountContainer>
        </Tooltip>
        <Dropdown
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          language
          languages={languages}
        />
      </Row>
      <Player>
        <ReactPlayer
          playing={isMuted}
          loop
          height="0px"
          width="0px"
          url={songs[selected]["songUrl"]}
        />
      </Player>
    </Container>
  );
};

export default Header;
