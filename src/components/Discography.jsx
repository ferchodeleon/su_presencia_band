import "../styles/discography.css";

export const Discography = ({
  discographyName,
  year,
  totalSongs,
  image,
  songs,
}) => {
  return (
    <>
      <a target="__blank" href="https://www.google.com">
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
      </a>
    </>
  );
};
