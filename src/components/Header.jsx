import { useState } from "react";
import { NavLink } from "react-router-dom";

import { links } from "../assets/local_data";
import Logo from "../assets/logo/logo_white.svg";
import "../styles/header.css";

export const Header = ({ color, menuSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isOpen = isMenuOpen ? "open" : "";

  return (
    <header style={{ position: "fixed", width: "100%", zIndex: 2 }}>
      <div className="header-container" style={{ background: color ?? color }}>
        <div className={`image-logo ${isOpen}`}>
          <NavLink to="/">
            <img
              src={Logo}
              alt="imagen en logo de la banda su presencia worship"
            />
          </NavLink>
        </div>
        <button
          className={`burger ${isOpen}`}
          aria-label="Botón para abrir y cerrar el menú"
          onClick={toggleMenu}
        ></button>
        <div className={`header-background ${isOpen}`}></div>
        <div className={`header-menu ${isOpen}`}>
          <nav>
            <ul>
              {links.map((route, index) => (
                <li key={index}>
                  <NavLink
                    to={route.to}
                    target={route.target ? "_blank" : ""}
                    style={{ animationDelay: `0.${index + 2}s` }}
                    reloadDocument={true}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
