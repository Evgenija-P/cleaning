import { useTranslation } from "react-i18next";
import { Dots } from "../../icons";
import ProcessList from "../processList";
import Subtitle from "../subtitle";
import Text from "../text";
import TitleSection from "../title";

const HowWeWork = () => {
  const { t } = useTranslation();

  return (
    <section className="relative" id="how">
      <div className="min-h-[828px] mx-auto container py-[120px] relative">
        <TitleSection>{t(`how.title`)}</TitleSection>
        <Subtitle style={"w-[555px] mt-3 mb-[60px]"}>{t(`how.subtitle`)}</Subtitle>
        <Text style={"absolute top-[165px] right-[296px] w-[403px] "}>{t(`how.text`)}</Text>

        <ProcessList />
      </div>
      <Dots className={"absolute top-[-109px] right-[15px]"} />
    </section>
  );
};

export default HowWeWork;
