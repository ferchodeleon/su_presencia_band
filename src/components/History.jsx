import backgroundHistory from "../assets/img/banda/background-history-1.jpg";
import backgroundJuanMunoz from "../assets/img/banda/background_Juan_Muñoz.jpg";
import JuanMunoz from "../assets/img/banda/juan_munoz.jpg";
import HenryGonzalez from "../assets/img/banda/henry_gonzalez.jpg";
import BackgroundHenry from "../assets/img/banda/background-henry.jpg";

import "../styles/history.css";

const data = [
  {
    background: backgroundHistory,
    text: `Somos el equipo de alabanza de la iglesia Su Presencia, en Bogotá,
            Colombia.
            <br />
            <br />
            Hacemos música para Dios con fusiones de ritmos latinos, pop y rock.
            <br />
            <br />
            Nuestra historia: Tienes el control (2023), Jesús (2021)
            <br />
            Fragmentos del cielo (2018), Vive en mí (2015)
            <br />
            Himnos (2014), Fiel (2013), Él (2011), Jesus Freak (2009)
            <br />
            Cielos abiertos (2007) y Voy buscando (2006)
            <br />
            <br />
            Nuestros pastores: Andrés y Rocío Corson
            <br />
            <br />
            Nuestro líder: Juan David Muñoz
            <br />
            <br />
            CREEMOS QUE NUESTRA MÚSICA SANARÁ LA TIERRA`,
    title: "<span>¿Quiénes</span> Somos?",
    textLeft: false,
  },
  {
    background: backgroundJuanMunoz,
    ArtistImage: JuanMunoz,
    text: `Somos el equipo de alabanza de la iglesia Su Presencia, en Bogotá,
            Colombia.
            <br />
            <br />
            Hacemos música para Dios con fusiones de ritmos latinos, pop y rock.
            <br />
            <br />
            Nuestra historia: Tienes el control (2023), Jesús (2021)
            <br />
            Fragmentos del cielo (2018), Vive en mí (2015)
            <br />
            Himnos (2014), Fiel (2013), Él (2011), Jesus Freak (2009)
            <br />
            Cielos abiertos (2007) y Voy buscando (2006)
            <br />
            <br />
            Nuestros pastores: Andrés y Rocío Corson
            <br />
            <br />
            Nuestro líder: Juan David Muñoz
            <br />
            <br />
            CREEMOS QUE NUESTRA MÚSICA SANARÁ LA TIERRA`,
    title: "<span>Juan</span> Muñoz",
    textLeft: true,
  },
  {
    background: BackgroundHenry,
    ArtistImage: HenryGonzalez,
    text: `Somos el equipo de alabanza de la iglesia Su Presencia, en Bogotá,
            Colombia.
            <br />
            <br />
            Hacemos música para Dios con fusiones de ritmos latinos, pop y rock.
            <br />
            <br />
            Nuestra historia: Tienes el control (2023), Jesús (2021)
            <br />
            Fragmentos del cielo (2018), Vive en mí (2015)
            <br />
            Himnos (2014), Fiel (2013), Él (2011), Jesus Freak (2009)
            <br />
            Cielos abiertos (2007) y Voy buscando (2006)
            <br />
            <br />
            Nuestros pastores: Andrés y Rocío Corson
            <br />
            <br />
            Nuestro líder: Juan David Muñoz
            <br />
            <br />
            CREEMOS QUE NUESTRA MÚSICA SANARÁ LA TIERRA`,
    title: "<span>Henry</span> Gonzalez",
    textLeft: false,
  },
];

export const History = () => {
  return (
    <>
      {data.map((info, index) => (
        <section
          className="history-container"
          style={{ backgroundImage: `url(${info.background})` }}
          key={index}
        >
          <div
            className="history-text"
            style={{ order: `${info.textLeft ? "2" : null}` }}
          >
            <p dangerouslySetInnerHTML={{ __html: info.text }}></p>
          </div>
          <div
            className="history-title"
            style={{
              justifySelf: `${info.textLeft ? "start" : "end"}`,
              direction: `${info.textLeft ? "rtl" : "ltr"}`,
            }}
          >
            <div className="history-container-img">
              {info.ArtistImage !== undefined ? (
                <img src={info.ArtistImage} alt="Prueba" />
              ) : (
                <span />
              )}
            </div>
            <p
              style={{
                ...{ transform: `rotate(${info.textLeft ? "180deg" : ""})` },
              }}
              dangerouslySetInnerHTML={{ __html: info.title }}
            />
          </div>
        </section>
      ))}
    </>
  );
};
