import { useState } from "react";

import "../styles/banner.css";

export const Banner = ({ data }) => {
  const [, setCurrentIndex] = useState(0);
  const [data1] = useState(data);

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
          {data1.map((info, index) => (
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
          <button
            className="btn prev"
            aria-label="botón mostrar imagen anterior"
            onClick={prevSlide}
          ></button>
          <button
            className="btn next"
            aria-label="botón mostrar imagen siguiente"
            onClick={nextSlide}
          ></button>
        </nav>
      </div>
    </div>
  );
};
