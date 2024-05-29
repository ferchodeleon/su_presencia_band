import LogoBrown from "../assets/logo/logo_brown.svg";
import Spotify from "../assets/icons/spotify.svg";
import Youtube from "../assets/icons/youtube_music.svg";
import Apple from "../assets/icons/apple_music.svg";
import "../styles/footer.css";
import { Link } from "react-router-dom";

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
        <Link
          target="__blank"
          to="https://open.spotify.com/intl-es/artist/2gaFnEQydJdWNkT17NLZm3?si=EBgkqmKrQjybnOlEz8vq9g"
        >
          <img
            className="footer-spotify"
            src={Spotify}
            alt="Icono de Spotify en color café"
          />
        </Link>
        <Link target="__blank" to="https://www.youtube.com/@SuPresenciaWorship">
          <img
            className="footer-youtube"
            src={Youtube}
            alt="Icono de youtube music en color café"
          />
        </Link>
        <Link
          target="__blank"
          to="https://music.apple.com/us/artist/su-presencia/322571579"
        >
          <img
            className="footer-apple"
            src={Apple}
            alt="Icono de apple music en color café"
          />
        </Link>
      </div>
    </footer>
  );
};
