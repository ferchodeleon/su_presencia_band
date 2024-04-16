import LogoBrown from "../assets/logo/logo_brown.svg";
import Spotify from "../assets/icons/spotify.svg";
import Youtube from "../assets/icons/youtube_music.svg";
import Apple from "../assets/icons/apple_music.svg";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={LogoBrown} alt="Logo de Su presencia worship en color café" />
      <p>
        <span>Invitaciones:</span> invitaciones@supresencia.com
      </p>
      <p>
        <span>Contacto personal:</span> abetancur@supresencia.com
      </p>
      <div className="footer-music">
        <img
          className="footer-spotify"
          src={Spotify}
          alt="Icono de Spotify en color café"
        />
        <img
          className="footer-youtube"
          src={Youtube}
          alt="Icono de youtube music en color café"
        />
        <img
          className="footer-apple"
          src={Apple}
          alt="Icono de apple music en color café"
        />
      </div>
    </footer>
  );
};
