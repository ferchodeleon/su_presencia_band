import { useParams } from "react-router-dom";
import { discographyPdf } from "../assets/local_data";
import { Chords } from "../components/Chords";

export const ChordsPage = () => {
  const { id } = useParams();
  const albumId = parseInt(id, 10);
  const album = discographyPdf.find((album) => album.id === albumId);

  if (!album) {
    return <h2>No se encontro el álbum</h2>;
  }

  return <Chords discography={album} />;
};
