import { discography } from "../assets/local_data";
import { Discography } from "../components/Discography";

import "../styles/discography_page.css";

export const DiscographyPage = () => {
  return (
    <div className="main-discography">
      <h1>Discography</h1>
      <div className="discography-page-container">
        {discography.map((album, index) => (
          <Discography
            key={index}
            discographyName={album.nameAlbum}
            year={album.year}
            image={album.image}
            songs={album.songs}
          />
        ))}
      </div>
    </div>
  );
};
