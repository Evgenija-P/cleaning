import QuestionsList from "../questionsList";
import Subtitle from "../subtitle";
import TitleSection from "../title";
import data from "../../data/questions.json";

const Faq = () => {
  const firstData = data.slice(0, 5);
  const secondData = data.slice(5, 10);
  return (
    <section className="bg-lightBlueSecond">
      <div className="container mx-auto py-[120px] min-h-[880px]">
        <TitleSection style={"mx-auto text-center"}>FAQ</TitleSection>
        <Subtitle style={"mx-auto text-center mt-3 mb-[60px]"}>Question & Answer</Subtitle>

        <div className="grid grid-cols-2 gap-x-3">
          <QuestionsList data={firstData} />
          <QuestionsList data={secondData} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
