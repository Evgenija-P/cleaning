import { useTranslation } from "react-i18next";
import Button from "../UX/buttons";
import Subtitle from "../subtitle";
import Text from "../text";
import TitleSection from "../title";
import Girl from "../../images/about.png";
import GirlSecond from "../../images/about-1.png";
import { Dots } from "../../icons";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[800px]" id="about">
      <div className="container mx-auto h-full py-[120px] flex">
        <div>
          <TitleSection>{t(`about.title`)}</TitleSection>
          <Subtitle style={"w-[492px] mt-3"}>{t(`about.subtitle`)}</Subtitle>
          <ul className="flex flex-col gap-y-5 mt-6 w-[513px]">
            <Text>
              {t(`about.text.0`)}
              <span className="font-semibold">{t(`about.text.1`)}</span> {t(`about.text.2`)}{" "}
              <a href="#services" className="font-semibold text-orange underline cursor-pointer">
                {t(`about.text.3`)}
              </a>{" "}
              {t(`about.text.4`)}
            </Text>
            <Text>{t(`about.text.5`)}</Text>
          </ul>
          <Button style={"regular"} btnClass={"mt-12 mb-[96px]"}>
            {t(`about.button`)}
          </Button>
        </div>
        <div className="relative ml-[126px] w-full">
          <div className="w-[73px] h-[73px] rounded-full bg-lightBlue absolute top-5 left-[178px]" />
          <ul>
            <li className="w-[373px] h-[440px] rounded-lg bg-lightBlue absolute top-[112px] left-[55px] z-20">
              <img src={Girl} alt="" className="w-[403px] h-[383px] absolute bottom-0 right-[35px] z-20" />
            </li>
            <li className="absolute top-0 left-[273px] z-10">
              <img src={GirlSecond} alt="" className="" />
            </li>
            <li>
              <Dots className={"absolute right-[93px] bottom-0"} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
