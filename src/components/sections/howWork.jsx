import { Dots } from "../../icons";
import ProcessList from "../processList";
import Subtitle from "../subtitle";
import Text from "../text";
import TitleSection from "../title";

const HowWeWork = () => {
  return (
    <section className="relative">
      <div className="min-h-[828px] mx-auto container py-[120px] relative">
        <TitleSection>How we work</TitleSection>
        <Subtitle style={"w-[555px] mt-3 mb-[60px]"}>Our Cleaning Company Work Process for You </Subtitle>
        <Text style={"absolute top-[165px] right-[296px] w-[403px] "}>
          Our services go beyond the basic services and provide you with reenergize your in a home and enhance your
          life.
        </Text>

        <ProcessList />
      </div>
      <Dots className={"absolute top-[-109px] right-[15px]"} />
    </section>
  );
};

export default HowWeWork;
