import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banda } from "./pages/Banda";

import "./styles/main.css";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Error404 } from "./pages/Error404";
import { Footer } from "./components/Footer";
import { DiscographyPage } from "./pages/DiscographyPage";

function App() {
  return (
    <>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <Header
      // color={"rgba(6, 6, 6, 0.5)"}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/band" element={<Banda />} />
        <Route path="/discography" element={<DiscographyPage />} />
        <Route path="/videos" element={<Home />} />
        <Route path="/resourse" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="*" element={<Banda />} />
      </Routes>
      <Footer />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
