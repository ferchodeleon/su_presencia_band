import { useState } from "react";

import Logo from "../assets/logo/logo_white.svg";
import "../style/header.css";

const links = [
  "Inicio",
  "La banda",
  "Discografía",
  "Videos",
  "Recursos",
  "Contacto",
];

export const Header = ({ color }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isOpen = isMenuOpen ? "open" : "";

  return (
    <header className="header-container" style={{ background: color ?? color }}>
      <div className={`image-logo ${isOpen}`}>
        <img src={Logo} alt="imagen en logo de la banda su presencia worship" />
      </div>
      <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`header-background ${isOpen}`}></div>
      <div className={`header-menu ${isOpen}`}>
        <ul>
          {links.map((link, index) => (
            <li>
              <a
                className={`${isMenuOpen ? "appear" : ""}`}
                style={{ animationDelay: `0.${index + 2}s` }}
                href={`${link !== "La banda" ? link.toLowerCase() : "banda"}`}
              >
                {link}
              </a>
            </li>
          ))}
          {/* <li>
            <a className={`${isMenuOpen ? "appear" : ""}`} href="#inicio">
              Inicio
            </a>
          </li>
          <li>
            <a className={`${isMenuOpen ? "appear" : ""}`} href="#banda">
              La banda
            </a>
          </li>
          <li>
            <a className={`${isMenuOpen ? "appear" : ""}`} href="#discografia">
              Discografia
            </a>
          </li>
          <li>
            <a className={`${isMenuOpen ? "appear" : ""}`} href="#videos">
              Videos
            </a>
          </li>
          <li>
            <a className={`${isMenuOpen ? "appear" : ""}`} href="#recursos">
              Recursos
            </a>
          </li>
          <li>
            <a className={`${isMenuOpen ? "appear" : ""}`} href="#contact">
              Contacto
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
};
