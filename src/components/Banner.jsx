import firstImage from "../assets/img/tienes_el_control.jpg";
import albumTienesControl from "../assets/img/album_tienes_el_control.jpg";

import "../style/banner.css";

export const Banner = () => {
  return (
    <>
      <div className="banner-main">
        <ul className="banner-slider">
          <li
            className="banner-item"
            style={{
              backgroundImage: `url(${firstImage})`,
            }}
          >
            <div className="content">
              <h2 className="title">Último lanzamiento</h2>
              <p className="description">Tienes el control</p>
              <button>Ver concierto</button>
            </div>
          </li>
          <li
            className="banner-item"
            style={{
              backgroundImage: `url(${albumTienesControl})`,
            }}
          >
            <div className="content">
              <h2 className="title">Álbum tienes el control</h2>
              <p className="description">Disponible en todas las plataformas</p>
              <button>Ver video</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
