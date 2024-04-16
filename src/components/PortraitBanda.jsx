import portrait from "../assets/img/banda/portrait.jpg";

import "../styles/portrait_banda.css";

export const PortraitBanda = () => {
  return (
    <>
      <div
        className="container-promotion"
        style={{ backgroundImage: `url(${portrait})` }}
      ></div>
    </>
  );
};
