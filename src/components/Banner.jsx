import firstImage from "../assets/img/tienes_el_control.jpg";
import albumTienesControl from "../assets/img/album_tienes_el_control.jpg";

import "../style/banner.css";

export const Banner = () => {
  const slider = document.querySelector(".banner-slider");

  function activate(e) {
    const items = document.querySelectorAll("banner-item");
  }

  return (
    <div className="banner-container">
      <div className="banner-main">
        <ul className="banner-slider">
          <li
            className="banner-item"
            style={{
              backgroundImage: `url(${albumTienesControl})`,
            }}
          >
            <div className="content">
              <p className="title">
                <span>Álbum tienes</span> el control
              </p>
              <p className="description">Tienes el control</p>
              <button>Ver concierto</button>
            </div>
          </li>
          <li
            className="banner-item"
            style={{
              backgroundImage: `url(${firstImage})`,
            }}
          >
            <div className="content">
              <p className="title">
                <span>Tienes el</span> control
              </p>
              <p className="description">Último lanzamiento</p>
              <button>Ver video</button>
            </div>
          </li>
          <li
            className="banner-item"
            style={{
              backgroundImage: `url(${albumTienesControl})`,
            }}
          >
            <div className="content">
              <p className="title">
                <span>Álbum tienes</span> el control
              </p>
              <p className="description">Disponible en todas las plataformas</p>
              <button>Ver video</button>
            </div>
          </li>
          <li
            className="banner-item"
            style={{
              backgroundImage: `url(${albumTienesControl})`,
            }}
          >
            <div className="content">
              <p className="title">
                <span>Álbum tienes</span> el control
              </p>
              <p className="description">Disponible en todas las plataformas</p>
              <button>Ver video</button>
            </div>
          </li>
        </ul>
        <nav className="nav">
          <span
            className="btn prev"
            // name="arrow-back-outline"
          ></span>
          <span
            className="btn next"
            // name="arrow-forward-outline"
          ></span>
        </nav>
      </div>
    </div>
  );
};
