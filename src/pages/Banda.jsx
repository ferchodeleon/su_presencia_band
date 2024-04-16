import { Header } from "../components/Header";
import { History } from "../components/History";
import { PortraitBanda } from "../components/PortraitBanda";

export const Banda = () => {
  return (
    <>
      <Header menuSelect="La banda" />
      <PortraitBanda />
      <History />
    </>
  );
};
