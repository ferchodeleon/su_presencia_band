import { Header } from "../components/Header";
import { History } from "../components/History";
import { PortraitBanda } from "../components/PortraitBanda";

import Portrait from "../assets/img/banda/portrait.jpg";
import Loading from "../components/Loading";

import { dataBand } from "../assets/local_data";

export const Banda = () => {
  return (
    <Loading
      children={
        <>
          <Header menuSelect="La banda" />
          <PortraitBanda ImagePortrait={Portrait} />
          <History dataBand={dataBand} />
        </>
      }
      imageUrls={[Portrait]}
    />
  );
};
