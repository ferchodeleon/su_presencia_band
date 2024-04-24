import albumTienesControl from "../assets/img/album_tienes_el_control.webp";
import pesadilla from "../assets/img/pesadilla.webp";
import firstImage from "../assets/img/tienes_el_control.webp";
import vengaTuReino from "../assets/img/venga_tu_reino.webp";

import TienesControl from "../assets/img/discography/tienes_el_control.jpg";
import Adora247 from "../assets/img/discography/adora_24_7_v1.jpg";
import NavidadVol4 from "../assets/img/discography/navidad_vol4_Jesus_es_el_motivo.jpg";
import JesusAlbum from "../assets/img/discography/jesus.jpg";
import JesusAlbumCommentary from "../assets/img/discography/jesus_commentary.jpg";
import NavidadVol3 from "../assets/img/discography/navidad_vol3.jpg";
import ElCieloTierra from "../assets/img/discography/el_cielo_en_la_tierra_pianos_para_orar.jpg";
import FragmentosAlbum from "../assets/img/discography/fragmentos_del_cielo.jpg";
import ViveenMi from "../assets/img/discography/vive_en_mi.jpg";
import Himnos from "../assets/img/discography/himnos.jpg";
import FielAlbum from "../assets/img/discography/fiel.jpg";
import BichosFreak from "../assets/img/discography/bichos_freak_con_alex_campos.jpg";
import ElAlbum from "../assets/img/discography/el.jpg";
import JesusFreak from "../assets/img/discography/jesus_freak.jpg";
import CielosAbiertos from "../assets/img/discography/cielos_abiertos_en_vivo.jpg";
import VoyBuscando from "../assets/img/discography/voy_buscando.jpg";
import Piano1 from "../assets/img/tutorial/piano1.jpg";
import Piano2 from "../assets/img/tutorial/piano2.jpg";
import Piano3 from "../assets/img/tutorial/piano3.jpg";
import Bateria1 from "../assets/img/tutorial/bateria1.jpg";
import Bateria2 from "../assets/img/tutorial/bateria2.jpg";
import Bajo3 from "../assets/img/tutorial/bajo3.jpg";
import Guitarra1 from "../assets/img/tutorial/guitarra1.jpg";
import GuitarraGuitarra1 from "../assets/img/tutorial/guitarra_electrica1.jpg";
import GuitarraGuitarra2 from "../assets/img/tutorial/guitarra_electrica2.jpg";
import GuitarraGuitarra3 from "../assets/img/tutorial/guitarra_electrica3.jpg";

export const dataMainBanner = [
  {
    title: "<span>La</span> pesadilla",
    description: "Disponible en todas las plataformas",
    button: "Escuchar canción",
    link: "",
    image: pesadilla,
  },
  {
    title: "<span>Tienes el</span> control",
    description: "Concierto disponible en Youtube",
    button: "Ver concierto",
    link: "https://youtu.be/B6I17E3fhxs?si=qMrr3Xu5QrP96D4u",
    image: firstImage,
  },
  {
    title: "<span>Tienes el</span> Control",
    description: "Nuevo álbum ya disponible",
    button: "¡Escuchar ahora!",
    link: "",
    image: albumTienesControl,
  },
  {
    title: "<span>Venga tu</span> reino",
    description: "Disponible ya en youtube",
    button: "Ver video",
    link: "https://youtu.be/RgZQiXujo-0?si=QWXPBGSf8IITcAOy",
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
    to: "https://youtu.be/dSM9N4VEqRA?si=AUvu1Grjt4xWIwL9",
    target: true,
    url: "videos",
    name: "Videos",
  },
  {
    to: "https://www.youtube.com/watch?v=GfpgOBkwgmg&list=PLt7-BTVbUMJmX3Ol-4eNbWcLGdVea7CYc&ab_channel=SuPresenciaWorship",
    target: true,
    url: "resourse",
    name: "Recursos",
  },
  // {
  //   to: "/contact",
  //   url: "contact",
  //   name: "Contacto",
  // },
];

export const discography = [];
discography.push(
  {
    nameAlbum: "Tienes El Control",
    year: "2023",
    totalSongs: "14",
    image: TienesControl,
    songs: [
      {
        title: "Hay Fiesta",
        artist: "Su Presencia",
      },
      {
        title: "Más De Ti",
        artist: "Su Presencia, Alex Campos",
      },
      {
        title: "Profundamente Te Amo",
        artist: "Su Presencia",
      },
      {
        title: "Lo Tengo Todo En Ti",
        artist: "Su Presencia",
      },
      {
        title: "Tienes El Control",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "ADORA 24/7",
    year: "2023",
    totalSongs: "23",
    image: Adora247,
    songs: [
      {
        title: "La Bondad De Dios - Goodness Of God",
        artist: "Su Presencia",
      },
      {
        title: "Me Acerco Una Vez Más - Draw Close Again",
        artist: "Su Presencia",
      },
      {
        title: "Me Refugio - Shelter In",
        artist: "Su Presencia",
      },
      {
        title: "Mi Esperanza Está En Jesús - Living Hope",
        artist: "Su Presencia",
      },
      {
        title: "Mi Gran Deseo - One Desire",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "Navidad, Vol.4 (Jesús es el motivo)",
    year: "2022",
    totalSongs: "18",
    image: NavidadVol4,
    songs: [
      {
        title: "Ángeles cantando están",
        artist: "Nxtwave",
      },
      {
        title: "Hosanna - Nació el Salvador",
        artist: "Su Presencia",
      },
      {
        title: "Una Noche Sin Igual",
        artist: "Su Presencia, Nxtwave",
      },
      {
        title: "Al mundo paz (Soul)",
        artist: "Su Presencia",
      },
      {
        title: "Emanuel",
        artist: "Su Presencia, Naxtwave",
      },
    ],
  },
  {
    nameAlbum: "Jesús (Track By Track Commentary)",
    year: "2021",
    totalSongs: "14",
    image: JesusAlbumCommentary,
    songs: [
      {
        title: "Hay Que Celebrar (Commentary)",
        artist: "Su Presencia",
      },
      {
        title: "Salmo 91 (Commentary)",
        artist: "Su Presencia",
      },
      {
        title: "La Pesadilla (Commentary)",
        artist: "Su Presencia",
      },
      {
        title: "Pienso en Ti (Commentary)",
        artist: "Su Presencia",
      },
      {
        title: "Llegaste a Mí (Commentary)",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "Jesús",
    year: "2021",
    totalSongs: "15",
    image: JesusAlbum,
    songs: [
      {
        title: "Hay Que Celebrar",
        artist: "Su Presencia",
      },
      {
        title: "Salmo 91",
        artist: "Su Presencia",
      },
      {
        title: "La Pesadilla",
        artist: "Su Presencia",
      },
      {
        title: "Pienso en Ti",
        artist: "Su Presencia",
      },
      {
        title: "Llegaste a Mí",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "Navidad, Vol.3",
    year: "2020",
    totalSongs: "7",
    image: NavidadVol3,
    songs: [
      {
        title: "Todo Brilla",
        artist: "Su Presencia",
      },
      {
        title: "Se Oye un Canto En Alta Esfera (Bonus Track) [Live]",
        artist: "Su Presencia, Nxtwave",
      },
      {
        title: "Tú Eres la Luz Noche de Paz (Bonus Track) [Live]",
        artist: "Nxtwave",
      },
      {
        title: "Venid Fieles Todos (Bonus Track) [Live]",
        artist: "Su Presencia, Nxtwave",
      },
      {
        title: "Aleluya",
        artist: "Nxtwave",
      },
    ],
  },
  {
    nameAlbum: "El Cielo en la Tierra (Pianos para Orar)",
    year: "2020",
    totalSongs: "10",
    image: ElCieloTierra,
    songs: [
      {
        title: "Paz - Piano",
        artist: "Su Presencia",
      },
      {
        title: "Gozo - Piano",
        artist: "Su Presencia",
      },
      {
        title: "Restauración - Piano",
        artist: "Su Presencia",
      },
      {
        title: "Fe - Piano",
        artist: "Su Presencia",
      },
      {
        title: "Amor del Padre - Piano",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "Fragmentos del Cielo",
    year: "2018",
    totalSongs: "16",
    image: FragmentosAlbum,
    songs: [
      {
        title: "Alegras Mis Días",
        artist: "Su Presencia",
      },
      {
        title: "Eternamente Amor",
        artist: "Su Presencia",
      },
      {
        title: "Fragmentos del Cielo",
        artist: "Su Presencia, Nxtwave",
      },
      {
        title: "Mi Roca",
        artist: "Su Presencia",
      },
      {
        title: "Maestro de Milagros",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "Vive en Mí",
    year: "2015",
    totalSongs: "13",
    image: ViveenMi,
    songs: [
      {
        title: "Soy Libre",
        artist: "Su Presencia",
      },
      {
        title: "Voy a Surfear",
        artist: "Su Presencia",
      },
      {
        title: "En Tu Majestad",
        artist: "Su Presencia, Nxtwave",
      },
      {
        title: "No Hay Nadie Como Tú",
        artist: "Su Presencia",
      },
      {
        title: "Mi Tesoro Eres Tú",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "Himnos",
    year: "2014",
    totalSongs: "10",
    image: Himnos,
    songs: [
      {
        title: "Maravilloso Es Él",
        artist: "Su Presencia",
      },
      {
        title: "Solo De Jesús La Sangre",
        artist: "Su Presencia",
      },
      {
        title: "El Corazón De La Adoración",
        artist: "Su Presencia",
      },
      {
        title: "Grande Es Tú Fidelidad",
        artist: "Su Presencia",
      },
      {
        title: "Pon tus Ojos En Cristo",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "Fiel",
    year: "2013",
    totalSongs: "13",
    image: FielAlbum,
    songs: [
      {
        title: "Canta Sobre Mí",
        artist: "Su Presencia",
      },
      {
        title: "Dios Fiel",
        artist: "Su Presencia",
      },
      {
        title: "Fiel",
        artist: "Su Presencia",
      },
      {
        title: "El Héroe De La Humanidad",
        artist: "Su Presencia",
      },
      {
        title: "Eterna Relación",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "Bichos Freak Con Alex Campos",
    year: "2012",
    totalSongs: "10",
    image: BichosFreak,
    songs: [
      {
        title: "Eres",
        artist: "Su Presencia",
      },
      {
        title: "Goliat",
        artist: "Su Presencia",
      },
      {
        title: "El Cielo En La Tierra",
        artist: "Su Presencia",
      },
      {
        title: "Fuego",
        artist: "Su Presencia",
      },
      {
        title: "Hosanna",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "Él",
    year: "2011",
    totalSongs: "13",
    image: ElAlbum,
    songs: [
      {
        title: "Eres",
        artist: "Su Presencia",
      },
      {
        title: "Goliat",
        artist: "Su Presencia",
      },
      {
        title: "El Cielo En La Tierra",
        artist: "Su Presencia",
      },
      {
        title: "Fuego",
        artist: "Su Presencia",
      },
      {
        title: "Hosanna",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "Jesus Freak",
    year: "2009",
    totalSongs: "13",
    image: JesusFreak,
    songs: [
      {
        title: "Goliat",
        artist: "Su Presencia",
      },
      {
        title: "El Reino",
        artist: "Su Presencia",
      },
      {
        title: "Jesús Freak",
        artist: "Su Presencia",
      },
      {
        title: "Estrella De La Mañana",
        artist: "Su Presencia",
      },
      {
        title: "Conoceré",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "Cielos Abiertos (En Vivo)",
    year: "2007",
    totalSongs: "11",
    image: CielosAbiertos,
    songs: [
      {
        title: "Abre Tus Cielos - En Vivo",
        artist: "Su Presencia",
      },
      {
        title: "Todo Lo Bueno - En Vivo",
        artist: "Su Presencia",
      },
      {
        title: "La Cima - En Vivo",
        artist: "Su Presencia",
      },
      {
        title: "Como Un Trueno - En Vivo",
        artist: "Su Presencia",
      },
      {
        title: "Cerca De Mí - En Vivo",
        artist: "Su Presencia",
      },
    ],
  },
  {
    nameAlbum: "Voy Buscando",
    year: "2005",
    totalSongs: "12",
    image: VoyBuscando,
    songs: [
      {
        title: "Entre El Perfume",
        artist: "Su Presencia",
      },
      {
        title: "A Bailar",
        artist: "Su Presencia",
      },
      {
        title: "Siempre Estarás",
        artist: "Su Presencia",
      },
      {
        title: "Yo Te Magnifico",
        artist: "Su Presencia",
      },
      {
        title: "Voy Buscando",
        artist: "Su Presencia",
      },
    ],
  }
);

export const dataTutorial = [
  {
    image: Piano1,
    name: "Tutorial Piano",
    subname: "Tienes El Control",
    alt: "Imagen de un piano",
    link: "https://youtu.be/GfpgOBkwgmg?si=NoBz1OMb0EehuwNo",
  },
  {
    image: Bateria1,
    name: "Tutorial Batería",
    subname: "Venga Tu Reino",
    alt: "Imagen de una batería musical",
    link: "https://youtu.be/JdcDCihCn1o?si=yCFBA_sd5IO3zyBw",
  },
  {
    image: Piano2,
    name: "Tutorial Piano",
    subname: "Venga Tu Reino",
    alt: "Imagen de un piano",
    link: "https://youtu.be/qo75DJzLEj0?si=iYu3lrujVI08HRHW",
  },
  {
    image: Guitarra1,
    name: "Tutorial Guitarra acustica",
    subname: "Te Veré",
    alt: "Imagen de una Guitarra acustica",
    link: "https://youtu.be/5Cj7ICd8rCY?si=YvUopUPe-IdQLZG1",
  },
  {
    image: Bajo3,
    name: "Tutorial Bajo",
    subname: "Digno Eres Tú",
    alt: "Imagen de un bajo, instrumento musical",
    link: "https://youtu.be/Yb71fr_uPzE?si=6tueNr7ZxXVlpRH9",
  },
  {
    image: Piano3,
    name: "Tutorial Piano",
    subname: "Te Veré",
    alt: "Imagen de un piano",
    link: "https://youtu.be/fp122Tq3fkk?si=C3p-KvoGtaTbpXkc",
  },
  {
    image: Bateria2,
    name: "Tutorial Batería",
    subname: "Pienso En Tí",
    alt: "Imagen de una batería instrumento musical",
    link: "https://youtu.be/dSM9N4VEqRA?si=E3WmFk7eva4NTRWP",
  },
];
