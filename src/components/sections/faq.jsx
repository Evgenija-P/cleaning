import { useTranslation } from "react-i18next";
import QuestionsList from "../questionsList";
import Subtitle from "../subtitle";
import TitleSection from "../title";
import data from "../../data/questions.json";

const Faq = () => {
  const { t } = useTranslation();
  const point = Math.ceil(data.length / 2);
  const firstData = data.slice(0, point);
  const secondData = data.slice(point, data.length);

  return (
    <section className="bg-lightBlueSecond" id="faq">
      <div className="container mx-auto py-[120px] min-h-[880px]">
        <TitleSection style={"mx-auto text-center"}>{t(`question.title`)}</TitleSection>
        <Subtitle style={"mx-auto text-center mt-3 mb-[60px]"}>{t(`question.subtitle`)}</Subtitle>

        <div className="grid grid-cols-2 gap-x-3">
          <QuestionsList data={firstData} />
          <QuestionsList data={secondData} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
