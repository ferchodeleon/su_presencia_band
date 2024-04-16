import { Banner } from "../components/Banner";
import { BannerTutorial } from "../components/BannerTutorial";
import { PromotionBanner } from "../components/PromotionBanner";

import albumTienesControl from "../assets/img/album_tienes_el_control.webp";
import pesadilla from "../assets/img/pesadilla.webp";
import firstImage from "../assets/img/tienes_el_control.webp";
import vengaTuReino from "../assets/img/venga_tu_reino.webp";

const dataMainBanner = [
  {
    title: "<span>la</span> pesadilla",
    description: "Disponible en todas las plataformas",
    button: "Ver video",
    link: "",
    image: pesadilla,
  },
  {
    title: "<span>Tienes el</span> control",
    description: "Concierto disponible en Youtube",
    button: "Ver concierto",
    link: "",
    image: firstImage,
  },
  {
    title: "<span>tienes el</span> Control",
    description: "Nuevo álbum ya disponible",
    button: "¡Escuchar ahora!",
    link: "",
    image: albumTienesControl,
  },
  {
    title: "<span>Venga tu</span> reino",
    description: "Disponible ya en youtube",
    button: "Ver video",
    link: "",
    image: vengaTuReino,
  },
];

export const Home = () => {
  return (
    <>
      <Banner data={dataMainBanner} />
      <PromotionBanner />
      <BannerTutorial />
    </>
  );
};
