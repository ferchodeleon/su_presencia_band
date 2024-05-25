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
import backgroundHistory from "../assets/img/banda/background-history-1.jpg";
import JuanMunoz from "../assets/img/banda/juan_munoz.jpg";
import backgroundJuanMunoz from "../assets/img/banda/background_Juan_Muñoz.jpg";
import HenryGonzalez from "../assets/img/banda/henry_gonzalez.jpg";
import BackgroundHenry from "../assets/img/banda/background-henry.jpg";
import TutiVega from "../assets/img/banda/tuti_vega.jpg";
import BackgroundTuti from "../assets/img/banda/background-tuti.jpg";
import GermanMarino from "../assets/img/banda/german_marino.jpg";
import BackgroundGerman from "../assets/img/banda/background-german.jpg";
import DanielaReyes from "../assets/img/banda/daniela_reyes.jpg";
import BackgroundDaniela from "../assets/img/banda/background-daniela.jpg";

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
    to: "https://www.youtube.com/@SuPresenciaWorship/videos",
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
  {
    to: "https://www.nxtwave.band",
    target: true,
    url: "nxtwave",
    name: "Nxtwave",
  },
];

export const dataBand = [
  {
    background: backgroundHistory,
    text: `Somos el equipo de alabanza de la iglesia Su Presencia, en Bogotá,
            Colombia.
            <br />
            <br />
            Hacemos música para Dios con fusiones de ritmos latinos, pop y rock.
            <br />
            <br />
            Nuestra historia: Tienes el control (2023), Jesús (2021)
            <br />
            Fragmentos del cielo (2018), Vive en mí (2015)
            <br />
            Himnos (2014), Fiel (2013), Él (2011), Jesus Freak (2009)
            <br />
            Cielos abiertos (2007) y Voy buscando (2006)
            <br />
            <br />
            Nuestros pastores: Andrés y Rocío Corson
            <br />
            <br />
            Nuestro líder: Juan David Muñoz
            <br />
            <br />
            CREEMOS QUE NUESTRA MÚSICA SANARÁ LA TIERRA`,
    title: "<span>¿Quiénes</span> Somos?",
    textLeft: false,
  },
  {
    background: backgroundJuanMunoz,
    ArtistImage: JuanMunoz,
    text: ` <span>«Llévame, Señor, pegaíto entre tus brazos...».</span>
            <br/>
            Líder de alabanza.
            <br />
            <br />
            Voz, guitarrista, compositor, arreglista y productor.
            <br />
            <br />
            Esposo de Paola y papá de Ester.
            <br />
            Cumple años el 25 de abril.
            <br />
            Es parte de la banda desde el año 2007.
            <br />
            Ama las guitarras vintage y odia los audios de WhatsApp.
            <br />
            <br />
            <span>@juan_munoz_</span>`,
    title: "<span>Juan</span> Muñoz",
    textLeft: true,
  },
  {
    background: BackgroundHenry,
    ArtistImage: HenryGonzalez,
    text: ` <span>«Te anhelo, te deseo, ven camina junto a mí, tú me puedes entender».</span>
            <br/>
            Voz principal y compositor.
            <br />
            <br />
            Esposo de Tuti y papá de Benjamín.
            <br />
            Cumple años el 4 de abril.
            <br />
            Es parte de la banda desde el año 2007.
            <br />
            Ama cocinar para las personas que ama y odia el desorden.
            <br />
            <br />
            <span>@henryxgonzalez</span>`,
    title: "<span>Henry</span> González",
    textLeft: false,
  },
  {
    background: BackgroundTuti,
    ArtistImage: TutiVega,
    text: ` <span>«Y verte a ti, y verme en ti, y recibir tu gracia y paz».</span>
            <br/>
            Voz principal, compositora y productora.
            <br />
            <br />
            Su nombre es Maria Laura,
            <br />
            Esposa de Henry y mamá de Benjamín.
            <br />
            Cumple años el 19 de diciembre.
            <br />
            Es parte de la banda desde el año 2009.
            <br />
            Ama los tulipanes y odia madrugar.
            <br />
            <br />
            <span>@tutivega</span>`,
    title: "<span>TUTI</span> VEGA",
    textLeft: true,
  },
  {
    background: BackgroundGerman,
    ArtistImage: GermanMarino,
    text: ` <span>«Cristo vive en mí, mi esperanza de gloria».</span>
            <br/>
            Voz principal, productor, compositor y arreglista.
            <br />
            <br />
            Esposo de Laura.
            <br />
            Cumple años el 19 de agosto.
            <br />
            Es parte de la banda desde el año  2013.
            <br />
            Ama el café de especialidad y odia las telenovelas.
            <br />
            <br />
            <span>@germanino_</span>`,
    title: "<span>GERMÁN</span> MARIÑO",
    textLeft: false,
  },
  {
    background: BackgroundDaniela,
    ArtistImage: DanielaReyes,
    text: ` <span>«Vivo y respiro a Dios, nada temeré».</span>
            <br/>
            Voz principal y compositora.
            <br />
            <br />
            Esposa de Andrés.
            <br />
            Cumple años el 22 de agosto.
            <br />
            Es parte de la banda desde el 2013.
            <br />
            Ama hacer postres y odia los roedores.
            <br />
            <br />
            <span>@daniela_reyes_</span>`,
    title: "<span>DANIELA</span> REYES",
    textLeft: true,
  },
];

export const discographyPdf = [
  {
    id: 1,
    nameAlbum: "Tienes El Control",
    year: "2023",
    totalSongs: "14",
    image: TienesControl,
    urlMultitrack: "https://bfan.link/Tienes-El-Control1",
    songs: [
      {
        title: "Hay fiesta",
        tono: "Tono: A",
        compas: "Compas: 4/4",
        tempo: "Tempo: 128 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/M4rvX7S3LEE?si=Tc94y2P0oqiRiCOR",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/1-hay-fiesta.pdf",
      },
      {
        title: "Más de ti",
        tono: "Tono: A",
        compas: "Compas: 4/4",
        tempo: "Tempo: 90 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/XwrW2QDvzJU?si=IL_o7L0TOhinCg8E",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/2-mas-de-ti.pdf",
      },
      {
        title: "Profundamente te amo",
        tono: "Tono: E",
        compas: "Compas: 4/4",
        tempo: "Tempo: 70 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/dNfM7SGRNpA?si=3gLWEOD5awqtoag8",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/3-profundamente-te-amo.pdf",
      },
      {
        title: "Lo tengo todo en ti",
        tono: "Tono: D",
        compas: "Compas: 6/8",
        tempo: "Tempo: 156 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/HqXsbZeaXYg?si=sFoTGuaXveyHzGq3",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/4-lo-tengo-todo-en-ti.pdf",
      },
      {
        title: "Tienes el control",
        tono: "Tono: C",
        compas: "Compas: 4/4",
        tempo: "Tempo: 72 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/PX8eoO2noCk?si=JlwUj3suQTCesWlg",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/5-tienes-el-control.pdf",
      },
      {
        title: "Grande como el cielo",
        tono: "Tono: C",
        compas: "Compas: 4/4",
        tempo: "Tempo: 128 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/1NfMiWmqK34?si=Fh3I90fCP5hGbBh2",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/6-grande-como-el-cielo.pdf",
      },
      {
        title: "Te veré",
        tono: "Tono: Db",
        compas: "Compas: 4/4",
        tempo: "Tempo: 86 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/xfJVshCiRGA?si=OE6yCYv93QgtX6CL",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/7-te-vere.pdf",
      },
      {
        title: "Tu rostro",
        tono: "Tono: G",
        compas: "Compas: 4/4",
        tempo: "Tempo: 76 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/cS4KRK8Ycy4?si=CmTkz899otwQ01rj",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/8-tu-rostro.pdf",
      },
      {
        title: "Hijo de Dios",
        tono: "Tono: G",
        compas: "Compas: 6/8",
        tempo: "Tempo: 148 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/nwLVO2Of5KY?si=a-nzkO4Zl-5y3EjG",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/9-hijo-de-dios.pdf",
      },
      {
        title: "Te siento en mi ser",
        tono: "Tono: D",
        compas: "Compas: 4/4",
        tempo: "Tempo: 128 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/DPmSiYTFij4?si=1yjaxbQ-b4ZbCPED",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/10-te-siento-en-mi-ser.pdf",
      },
      {
        title: "Despierta",
        tono: "Tono: F",
        compas: "Compas: 4/4",
        tempo: "Tempo: 90 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/1hU-u2NbRnM?si=f4TPXyP58ih7DnyD",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/11-despierta.pdf",
      },
      {
        title: "Venga tu reino",
        tono: "Tono: Db",
        compas: "Compas: 6/8",
        tempo: "Tempo: 160 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/RgZQiXujo-0?si=CP_tVMDpBxs_bcZb",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/12-venga-tu-reino.pdf",
      },
      {
        title: "Reflejo de tu gloria",
        tono: "Tono: F-F#",
        compas: "Compas: 6/8",
        tempo: "Tempo: 154 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/rHwFWst9gWU?si=OScAY-5VUHtxNvF6",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/13-reflejo-de-tu-gloria.pdf",
      },
      {
        title: "Tú estás aquí",
        tono: "Tono: F",
        compas: "Compas: 4/4",
        tempo: "Tempo: 135 bpm",
        urlYoutube:
          "https://www.youtube.com/embed/HhYFcONZj-k?si=rsJLRVViV88QPFdj",
        pdf: "https://iglesia-web.s3.us-west-2.amazonaws.com/SPM/Tienes+el+control/14-tu-estas-aqui.pdf",
      },
    ],
  },
  {
    id: 2,
    nameAlbum: "ADORA 24/7",
    year: "2023",
    totalSongs: "23",
    image: Adora247,
    songs: [
      {
        title: "La Bondad De Dios - Goodness Of God",
        tono: "Tono F",
        compas: "Compas 4/4",
        duration: "Duración: 5:03",
        urlYoutube:
          "https://www.youtube.com/embed/PX8eoO2noCk?si=U8FLWfVSMqVEAPnk",
        pdf: "/pdf/tienes_el_control.pdf",
      },
      {
        title: "Me Acerco Una Vez Más - Draw Close Again",
        tono: "Tono F",
        compas: "Compas 4/4",
        duration: "Duración: 5:03",
        urlYoutube:
          "https://www.youtube.com/embed/PX8eoO2noCk?si=U8FLWfVSMqVEAPnk",
        pdf: "/pdf/tienes_el_control.pdf",
      },
      {
        title: "Me Refugio - Shelter In",
        tono: "Tono F",
        compas: "Compas 4/4",
        duration: "Duración: 5:03",
        urlYoutube:
          "https://www.youtube.com/embed/PX8eoO2noCk?si=U8FLWfVSMqVEAPnk",
        pdf: "/pdf/tienes_el_control.pdf",
      },
      {
        title: "Mi Esperanza Está En Jesús - Living Hope",
        tono: "Tono F",
        compas: "Compas 4/4",
        duration: "Duración: 5:03",
        urlYoutube:
          "https://www.youtube.com/embed/PX8eoO2noCk?si=U8FLWfVSMqVEAPnk",
        pdf: "/pdf/tienes_el_control.pdf",
      },
      {
        title: "Mi Gran Deseo - One Desire",
        tono: "Tono F",
        compas: "Compas 4/4",
        duration: "Duración: 5:03",
        urlYoutube:
          "https://www.youtube.com/embed/PX8eoO2noCk?si=U8FLWfVSMqVEAPnk",
        pdf: "/pdf/tienes_el_control.pdf",
      },
    ],
  },
];

export const discography = [];
discography.push(
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
