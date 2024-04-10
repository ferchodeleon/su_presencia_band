import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";

import backgroundJuan from "../assets/img/background_juan.png";
import VengaTuReino from "../assets/tutorial/vive_en_mi.jpg";
import TienesControl from "../assets/img/album_tienes_el_control.jpg";
import Promotion from "../assets/img/background-promotion.jpg";
import Juan from "../assets/img/venga_tu_reino.jpg";
import Pesadilla from "../assets/img/pesadilla.jpg";
import SoyPerdonado from "../assets/img/portada-soy-perdonado.jpg";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/banner_tutorial.css";

export const BannerTutorial = () => {
  const dataTutorial = [
    {
      image: VengaTuReino,
      name: "Tutorial Bajo",
      alt: "Imagen tutorial venga tu reino bajo",
    },
    {
      image: TienesControl,
      name: "Tutorial Piano",
      alt: "Imagen tutorial venga tu reino bajo",
    },
    {
      image: Juan,
      name: "Tutorial Violín",
      alt: "Imagen tutorial venga tu reino bajo",
    },
    {
      image: Promotion,
      name: "Tutorial Acordeon",
      alt: "Imagen tutorial venga tu reino bajo",
    },
    {
      image: Pesadilla,
      name: "Tutorial Acordeon",
      alt: "Imagen tutorial venga tu reino bajo",
    },
    {
      image: SoyPerdonado,
      name: "Tutorial Acordeon",
      alt: "Imagen tutorial venga tu reino bajo",
    },
    {
      image: VengaTuReino,
      name: "Tutorial Acordeon",
      alt: "Imagen tutorial venga tu reino bajo",
    },
  ];

  return (
    <>
      <section
        className="container-tutorial"
        style={{ backgroundImage: `url(${backgroundJuan})` }}
      >
        <div className="swiper-container">
          <p className="tutorial-title">Tutoriales</p>
          <Swiper
            pagination={{ dynamicBullets: true }}
            navigation={true}
            effect={"cards"}
            modules={[Navigation, Pagination, EffectCards]}
            className="mySwiper"
            initialSlide={3}
            grabCursor={true}
            mousewheel={{ invert: false }}
          >
            {dataTutorial.map((info, index) => (
              <>
                <SwiperSlide style={{ backgroundImage: `url(${info.image})` }}>
                  <p>{info.name}</p>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};
