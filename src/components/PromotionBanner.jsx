import { Link } from "react-router-dom";
import "../styles/promotion_banner.css";

export const PromotionBanner = ({ background, soyPerdonado }) => {
  return (
    <>
      <section className="promotion-container">
        <div
          className="promotion-background"
          style={{ backgroundImage: `url(${background})` }}
        />
        <div className="promotion-info">
          <div className="info-container">
            <img
              src={soyPerdonado}
              alt="Imagen de canción llamada Soy perdonado"
            />
            <div>
              <p>
                Lanzamiento <br /> soy perdonado
              </p>
              <Link
                target="__blank"
                to="https://www.youtube.com/watch?v=lN2Z_udKOVY&ab_channel=ElLugardeSuPresencia"
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
