import { discography } from "../assets/local_data";
import { Discography } from "../components/Discography";
import Loading from "../components/Loading";

import "../styles/discography_page.css";

export const DiscographyPage = () => {
  return (
    <Loading
      children={
        <div className="main-discography">
          <h2>Discografía</h2>
          <div className="discography-page-container">
            {discography.map((album) => (
              <Discography
                key={album.id}
                id={album.id}
                discographyName={album.nameAlbum}
                year={album.year}
                totalSongs={album.totalSongs}
                image={album.image}
                songs={album.songs}
              />
            ))}
          </div>
        </div>
      }
      imageUrls={[discography.image]}
    />
  );
};
