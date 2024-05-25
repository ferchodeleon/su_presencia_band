import { Banner } from "../components/Banner";
import { BannerTutorial } from "../components/BannerTutorial";
import { PromotionBanner } from "../components/PromotionBanner";

import { dataMainBanner } from "../assets/local_data";
import backgroundPromotion from "../assets/img/background-promotion.webp";
import soyPerdonadoImage from "../assets/img/portada-soy-perdonado.webp";
import Loading from "../components/Loading";

export const Home = () => {
  return (
    <Loading
      children={
        <>
          <Banner data={dataMainBanner} />
          <PromotionBanner
            background={backgroundPromotion}
            soyPerdonado={soyPerdonadoImage}
          />
          <BannerTutorial />
        </>
      }
      imageUrls={[dataMainBanner.image, backgroundPromotion, soyPerdonadoImage]}
    />
  );
};
