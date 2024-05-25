import { Link } from "react-router-dom";
import "../styles/chords.css";
import { useState } from "react";

export const Chords = ({ discography }) => {
  const [youtubeUrl, setYoutubeUrl] = useState(discography.songs[0].urlYoutube);
  const [pdfUrl, setPdfUrl] = useState(discography.songs[0].pdf);
  const [tono, setTono] = useState(discography.songs[0].tono);
  const [compas, setCompas] = useState(discography.songs[0].compas);
  const [tempo, setTempo] = useState(discography.songs[0].tempo);
  const [selectedSongId, setSelectedSongId] = useState(null);

  console.log("ALBUM", discography);

  const handleSongClick = (url) => {
    setYoutubeUrl(url);
  };

  const handlePdfClick = (pdf) => {
    setPdfUrl(pdf);
  };

  const handleDetailClick = (song) => {
    setTono(song.tono);
    setCompas(song.compas);
    setTempo(song.tempo);
    setSelectedSongId(song.title);
  };

  return (
    <>
      <div className="chords-image">
        <div className="chords-album-section">
          <div className="chords-album-container">
            <img
              className="chords-album"
              src={discography.image}
              alt="Imagen del álbum"
            />
          </div>
          <h2 className="chords-album-title">{discography.nameAlbum}</h2>
        </div>
      </div>
      <div className="chords-columns">
        <div className="chords-list">
          <h2 className="chords-desktop-title">Acordes</h2>
          <h2 className="chords-mobile-title">{discography.nameAlbum}</h2>
          <div className="chords-details">
            {tono ? (
              <div className="chords-detail chords-tono">{tono}</div>
            ) : null}
            {compas ? (
              <div className="chords-detail chords-tono">{compas}</div>
            ) : null}
            {tempo ? (
              <div className="chords-detail chords-tono">{tempo}</div>
            ) : null}
          </div>
          <div className="chords-list-title">
            {discography.songs.map((song) => (
              <Link
                className={`chords-title-song ${
                  selectedSongId === song.title ? "selected" : ""
                }`}
                onClick={() => {
                  handleSongClick(song.urlYoutube);
                  handlePdfClick(song.pdf);
                  handleDetailClick(song);
                }}
              >
                {song.title}
              </Link>
            ))}
          </div>
          <iframe
            width="600rem"
            height="315"
            src={youtubeUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
          {discography.urlMultitrack ? (
            <Link
              className="chords-listen"
              target="__blank"
              to={discography.urlMultitrack}
            >
              Escucha el álbum aquí
            </Link>
          ) : null}
        </div>
        {pdfUrl ? (
          <div className="chords-notas">
            <div style={{ height: "80vh", width: "100%" }}>
              <iframe
                title="PDF viewer"
                allow="autoplay"
                width="100%"
                height="100%"
                src={pdfUrl}
              />
            </div>
          </div>
        ) : (
          <p className="chords-soon">
            ¡Pronto tendrás las notas musicales aquí!
          </p>
        )}
      </div>
    </>
  );
};
