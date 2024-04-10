import "./styles/main.css";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";

import albumTienesControl from "./assets/img/album_tienes_el_control.jpg";
import pesadilla from "./assets/img/pesadilla.jpg";
import firstImage from "./assets/img/tienes_el_control.jpg";
import vengaTuReino from "./assets/img/venga_tu_reino.jpg";
import { PromotionBanner } from "./components/PromotionBanner";
import { Footer } from "./components/Footer";
import { BannerTutorial } from "./components/BannerTutorial";

const data = [
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

function App() {
  return (
    <div className="App">
      <Header />
      <Banner data={data} />
      <PromotionBanner />
      <BannerTutorial />
      <Footer />
    </div>
  );
}

export default App;
