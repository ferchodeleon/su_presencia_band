import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banda } from "./pages/Banda";

import "./styles/main.css";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Error404 } from "./pages/Error404";
import { Footer } from "./components/Footer";
import { DiscographyPage } from "./pages/DiscographyPage";
import ScrollToTop from "./components/ScrollTop";
import { ChordsPage } from "./pages/ChordsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/band" element={<Banda />} />
          <Route path="/discography" element={<DiscographyPage />} />
          <Route path="/discography/:id" element={<ChordsPage />} />
          <Route path="/videos" element={<Home />} />
          <Route path="/resourse" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
