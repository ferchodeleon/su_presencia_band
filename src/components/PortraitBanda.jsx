import "../styles/portrait_banda.css";

export const PortraitBanda = ({ ImagePortrait }) => {
  return (
    <>
      <div
        className="container-promotion"
        style={{ backgroundImage: `url(${ImagePortrait})` }}
      ></div>
    </>
  );
};
