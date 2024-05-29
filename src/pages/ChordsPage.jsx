import { useParams } from "react-router-dom";
import { tienesElControl } from "../assets/data_album";
import { Chords } from "../components/Chords";
import Loading from "../components/Loading";
import NotAlbum from "../components/NotAlbum";

export const ChordsPage = () => {
  const { id } = useParams();
  const albumId = parseInt(id, 10);
  const album = tienesElControl.find((album) => album.id === albumId);

  if (!album) {
    return <NotAlbum />;
  }

  return (
    <Loading
      children={<Chords discography={album} />}
      imageUrls={[album.image]}
    />
  );
};
