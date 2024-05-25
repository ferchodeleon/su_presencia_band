import { Link } from "react-router-dom";
import "../styles/discography.css";

export const Discography = ({
  id,
  discographyName,
  year,
  totalSongs,
  image,
  songs,
}) => {
  return (
    <>
      <Link to={`/discography/${id}`}>
        <div id="container">
          <div id="vinyl">
            <ol id="tracklist">
              {songs.map((song, index) => (
                <li key={index}>
                  <p className="tracklist-title">{song.title}</p>
                  <p className="tracklist-artist">{song.artist}</p>
                </li>
              ))}
            </ol>
          </div>

          <div id="album" style={{ backgroundImage: `url(${image})` }} />
          <div className="discography-title">
            <p>{discographyName}</p>
            <p>
              {year} | {totalSongs} canciones
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
