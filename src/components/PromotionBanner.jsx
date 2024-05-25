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
              <button>Ver más</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
