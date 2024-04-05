import { useState } from "react";

import firstImage from "../assets/img/tienes_el_control.jpg";
import albumTienesControl from "../assets/img/album_tienes_el_control.jpg";
import vegaTuReino from "../assets/img/venga_tu_reino.jpg";
import pesadilla from "../assets/img/pesadilla.jpg";

import "../style/banner.css";

const data = [
  {
    title: "<span>Álbum tienes</span> el control",
    description: "Tienes el control",
    button: "Ver concierto",
    link: "",
    image: pesadilla,
  },
  {
    title: "<span>Tienes el</span> control",
    description: "Último lanzamiento",
    button: "Ver video",
    link: "",
    image: firstImage,
  },
  {
    title: "<span>Texto de</span> título",
    description: "Descripción corta",
    button: "Botón",
    link: "",
    image: albumTienesControl,
  },
  {
    title: "<span>Álbum tienes</span> el control",
    description: "Tienes el control",
    button: "Ver concierto",
    link: "",
    image: vegaTuReino,
  },
];

export const Banner = () => {
  const [, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const slider = document.querySelector(".banner-slider");
    const items = document.querySelectorAll(".banner-item");

    const texto = "Album tienes el control de mi";
    const textoModificado = texto.split(/(\s{1,})/g);
    console.log(textoModificado);

    setCurrentIndex(
      () => slider.append(items[0]) // Agregar la siguiente imagen al contenedor del slider
    );
  };

  const prevSlide = () => {
    const slider = document.querySelector(".banner-slider");
    const items = document.querySelectorAll(".banner-item");
    setCurrentIndex(() => slider.prepend(items[items.length - 1])); // Agregar la primera imagen al final del contenedor del slider
  };

  return (
    <div className="banner-container">
      <div className="banner-main">
        <ul className="banner-slider">
          {data.map((info, index) => (
            <li
              key={index}
              className="banner-item"
              style={{ backgroundImage: `url(${info.image})` }}
            >
              <div className="content">
                <p
                  className="title"
                  dangerouslySetInnerHTML={{ __html: info.title }}
                ></p>
                <p className="description">{info.description}</p>
                <button onClick={nextSlide}>{info.button}</button>
              </div>
            </li>
          ))}
        </ul>
        <nav className="nav">
          <button className="btn prev" onClick={prevSlide}></button>
          <button className="btn next" onClick={nextSlide}></button>
        </nav>
      </div>
    </div>
  );
};
