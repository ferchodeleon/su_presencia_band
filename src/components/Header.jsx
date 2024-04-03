import { useState } from "react";

import Logo from "../assets/logo/logo_white.svg";
import "../style/header.css";

export const Header = ({ color }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOpen = isMenuOpen ? "open" : "";
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header-container" style={{ background: color ?? color }}>
      <div className="image-logo">
        <img src={Logo} alt="imagen en logo de la banda su presencia worship" />
      </div>
      <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`header-background ${isOpen}`}></div>
      <div className="header-menu">
        <ul>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#banda">La banda</a>
          </li>
          <li>
            <a href="#discografia">Discografia</a>
          </li>
          <li>
            <a href="#videos">Videos</a>
          </li>
          <li>
            <a href="#recursos">Recursos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
