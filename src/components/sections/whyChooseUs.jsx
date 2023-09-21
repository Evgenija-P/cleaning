import Advantages from "../advantages";
import Subtitle from "../subtitle";
import Text from "../text";
import TitleSection from "../title";
import FirstImg from "../../images/why_1.jpg";
import SecondImg from "../../images/why_2.jpg";
import ThirdImg from "../../images/why_3.jpg";

const WhyWe = () => {
  return (
    <section className="bg-lightBlueSecond">
      <div className="min-h-[1046px] py-[120px] container mx-auto relative flex gap-x-[110px]">
        <div>
          <TitleSection>Why Choose Us</TitleSection>
          <Subtitle style={"mt-3 w-[496px] mb-5"}>Your Happyness is Our First Priority</Subtitle>
          <Text style={"w-[609px]"}>
            Our services go beyond the basic services and provide you with reenergize your home and enhance your life.
          </Text>

          <Advantages />
        </div>
        <ul className="flex flex-col gap-y-5 relative">
          <li className="flex gap-x-5 items-end">
            <img src={FirstImg} alt="" className="w-[293px] h-[371px]" />
            <img src={SecondImg} alt="" className="w-[422px] h-[514px]" />
          </li>
          <li>
            <img src={ThirdImg} alt="" className="w-[741px] h-[272px]" />
          </li>
          <li className="w-[61px] h-[61px] rounded-full bg-lightBlue blur-md absolute top-[34px] left-[186px]" />
        </ul>
      </div>
    </section>
  );
};

export default WhyWe;
