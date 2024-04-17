import { Banner } from "../components/Banner";
import { BannerTutorial } from "../components/BannerTutorial";
import { PromotionBanner } from "../components/PromotionBanner";

import { dataMainBanner } from "../assets/local_data";

export const Home = () => {
  return (
    <>
      <Banner data={dataMainBanner} />
      <PromotionBanner />
      <BannerTutorial />
    </>
  );
};
