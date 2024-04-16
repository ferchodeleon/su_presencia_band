import albumTienesControl from "../assets/img/album_tienes_el_control.webp";
import pesadilla from "../assets/img/pesadilla.webp";
import firstImage from "../assets/img/tienes_el_control.webp";
import vengaTuReino from "../assets/img/venga_tu_reino.webp";

export const dataMainBanner = [
  {
    title: "<span>la</span> pesadilla",
    description: "Disponible en todas las plataformas",
    button: "Ver video",
    link: "",
    image: pesadilla,
  },
  {
    title: "<span>Tienes el</span> control",
    description: "Concierto disponible en Youtube",
    button: "Ver concierto",
    link: "",
    image: firstImage,
  },
  {
    title: "<span>tienes el</span> Control",
    description: "Nuevo álbum ya disponible",
    button: "¡Escuchar ahora!",
    link: "",
    image: albumTienesControl,
  },
  {
    title: "<span>Venga tu</span> reino",
    description: "Disponible ya en youtube",
    button: "Ver video",
    link: "",
    image: vengaTuReino,
  },
];

export const links = [
  {
    to: "/",
    url: "Home",
    name: "Inicio",
  },
  {
    to: "/band",
    url: "band",
    name: "La banda",
  },
  {
    to: "/discography",
    url: "discography",
    name: "Discografía",
  },
  {
    to: "/videos",
    url: "videos",
    name: "Videos",
  },
  {
    to: "/resourse",
    url: "resourse",
    name: "Recursos",
  },
  {
    to: "/contact",
    url: "contact",
    name: "Contacto",
  },
];
