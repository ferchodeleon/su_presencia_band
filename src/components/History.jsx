// import { dataBand } from "../assets/local_data";
import "../styles/history.css";

export const History = ({ dataBand }) => {
  return (
    <>
      {dataBand.map((info, index) => (
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
                <div
                  style={{ backgroundImage: `url(${info.ArtistImage})` }}
                  alt="Prueba"
                />
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
