import Advantages from "../advantages";
import Subtitle from "../subtitle";
import Text from "../text";
import TitleSection from "../title";
import FirstImg from "../../images/why_1.jpg";
import { useTranslation } from "react-i18next";
import SecondImg from "../../images/why_2.jpg";
import ThirdImg from "../../images/why_3.jpg";
import { Dots } from "../../icons";
import Button from "../UX/buttons";

const WhyWe = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-lightBlueSecond relative" id="why">
      <div className="min-h-[1046px] py-[120px] container mx-auto relative flex gap-x-[110px]">
        <div>
          <TitleSection>{t(`why.title`)}</TitleSection>
          <Subtitle style={"mt-3 w-[496px] mb-5"}>{t(`why.subtitle`)}</Subtitle>
          <Text style={"w-[609px]"}>{t(`why.text`)}</Text>

          <Advantages />
          <Button style={"regular"} clickFn={() => (window.location.href = "#contact")} btnClass={"mt-[68px]"}>
            {t(`why.button`)}
          </Button>
        </div>
        <ul className="flex flex-col gap-y-5 relative">
          <li className="flex gap-x-5 items-end">
            <img src={FirstImg} alt="" className="w-[293px] h-[371px]" />
            <img src={SecondImg} alt="" className="w-[422px] h-[514px]" />
          </li>
          <li>
            <img src={ThirdImg} alt="" className="w-[741px] h-[272px]" />
          </li>
          <li className="w-[61px] h-[61px] rounded-full bg-lightBlue absolute top-[34px] left-[186px]" />
        </ul>
      </div>
      <Dots className={"absolute top-[-110px] left-[10px]"} />
    </section>
  );
};

export default WhyWe;
