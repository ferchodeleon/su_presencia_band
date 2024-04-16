import { Link } from "react-router-dom";
import "../styles/error404.css";

export const Error404 = () => {
  return (
    <>
      <div className="error-container">
        <div>
          <div class="starsec"></div>
          <div class="starthird"></div>
          <div class="starfourth"></div>
          <div class="starfifth"></div>
        </div>

        <div class="lamp__wrap">
          <div class="lamp">
            <div class="cable"></div>
            <div class="cover"></div>
            <div class="in-cover">
              <div class="bulb"></div>
            </div>
            <div class="light"></div>
          </div>
        </div>
        <section class="error">
          <div class="error__content">
            <div class="error__message message">
              <h1 class="message__title">Página no encontrada</h1>
              <p class="message__text">
                Lo sentimos la página que buscas al parecer no existe
              </p>
            </div>
            <div class="error__nav e-nav">
              <Link to={"/"} class="e-nav__link"></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
