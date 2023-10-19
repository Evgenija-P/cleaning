import { useTranslation } from "react-i18next";
import ServicesList from "../servicesList";
import Subtitle from "../subtitle";
import Text from "../text";
import TitleSection from "../title";

const Service = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[1060px] bg-lightBlueSecond relative" id="services">
      <div className="container mx-auto py-[120px] relative">
        <TitleSection style={"mx-auto text-center"}>{t(`service.title`)}</TitleSection>
        <Subtitle style={"mx-auto text-center mt-3 mb-5"}>{t(`service.subtitle`)}</Subtitle>
        <Text style={"mx-auto text-center w-[609px]"}>{t(`service.text`)}</Text>

        <ServicesList />
      </div>
      <div className="w-[256px] h-[256px] rounded-full bg-lightBlue absolute top-[-70px] left-[-55px]" />
    </section>
  );
};

export default Service;
