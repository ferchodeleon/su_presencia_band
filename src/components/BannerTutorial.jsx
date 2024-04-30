import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";

import backgroundJuan from "../assets/img/background_juan.webp";
import { dataTutorial } from "../assets/local_data";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/banner_tutorial.css";

export const BannerTutorial = () => {
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
              <SwiperSlide
                key={index}
                style={{
                  backgroundImage: `url(${info.image})`,
                  backgroundSize: "cover",
                }}
              >
                <a
                  style={{ width: "100%" }}
                  href={info.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div
                    style={{
                      padding: "10px",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <p style={{ padding: 0 }}>{info.name}</p>
                    <p style={{ padding: 0 }}>{info.subname}</p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};
