import "../styles/discography.css";

export const Discography = ({ discographyName, year, image, songs }) => {
  return (
    <>
      <section id="discography-container">
        <div id="album-container">
          <div class="vinyl">
            <ol class="tracklist">
              {songs.map((song, index) => (
                <li key={index}>
                  <p className="tracklist-title">{song.title}</p>
                  <p className="tracklist-artist">{song.artist}</p>
                </li>
              ))}
            </ol>
          </div>

          <div id="album" style={{ backgroundImage: `url(${image})` }}>
            {/* <div id="title">
              <div id="artist">
                <h1>Par</h1>
                <h1>am</h1>
                <h1>ore</h1>
              </div>
              <div id="album-1">
                <h1>A</h1>
                <h1>fte</h1>
                <h1>r</h1>
              </div>
              <div id="album-2">
                <h1>Lau</h1>
                <h1>gh</h1>
                <h1>ter</h1>
              </div>
            </div>

            <div id="symbol">
              <div class="line">
                <div class="shadow"></div>
              </div>
              <div class="line">
                <div class="shadow"></div>
              </div>
              <div class="line">
                <div class="shadow"></div>
              </div>
              <div class="line">
                <div class="shadow"></div>
              </div>
              <div class="line">
                <div class="shadow"></div>
              </div>
              <div class="line">
                <p>hover me!</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="discography-title">
          <p>{discographyName}</p>
          <p>{year}</p>
        </div>
      </section>
    </>
  );
};
