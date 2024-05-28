import { Header } from "../components/Header";
import { History } from "../components/History";
import { PortraitBanda } from "../components/PortraitBanda";

import Portrait from "../assets/img/banda/portrait.jpg";
import Loading from "../components/Loading";

export const Banda = () => {
  return (
    <Loading
      children={
        <>
          <Header menuSelect="La banda" />
          <PortraitBanda ImagePortrait={Portrait} />
          <History />
        </>
      }
      imageUrls={[Portrait]}
    />
  );
};
