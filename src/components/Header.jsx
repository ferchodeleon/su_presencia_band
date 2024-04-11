import { useState } from "react";

import Logo from "../assets/logo/logo_white.svg";
import "../styles/header.css";

const links = [
  "inicio",
  "La banda",
  "Discografía",
  "Videos",
  "Recursos",
  "Contacto",
];

export const Header = ({ color, menuSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSelect] = useState(menuSelect);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isOpen = isMenuOpen ? "open" : "";

  return (
    <header style={{ position: "fixed", width: "100%", zIndex: 2 }}>
      <div className="header-container" style={{ background: color ?? color }}>
        <div className={`image-logo ${isOpen}`}>
          <img
            src={Logo}
            alt="imagen en logo de la banda su presencia worship"
          />
        </div>
        <button
          className={`burger ${isOpen}`}
          aria-label="Botón para abrir y cerrar el menú"
          onClick={toggleMenu}
        ></button>
        <div className={`header-background ${isOpen}`}></div>
        <div className={`header-menu ${isOpen}`}>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  className={`${isMenuOpen ? "appear" : ""} ${
                    isSelect === link ? "active" : ""
                  }`}
                  style={{ animationDelay: `0.${index + 2}s` }}
                  href={`${link !== "La banda" ? link.toLowerCase() : "banda"}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
