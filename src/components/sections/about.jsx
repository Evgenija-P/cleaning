import Button from "../UX/buttons";
import Subtitle from "../subtitle";
import Text from "../text";
import TitleSection from "../title";
import Girl from "../../images/about.png";
import GirlSecond from "../../images/about-1.png";
import { Dots } from "../../icons";

const About = () => {
  return (
    <section className="min-h-[800px]" id="about">
      <div className="container mx-auto h-full py-[120px] flex">
        <div>
          <TitleSection>About Us</TitleSection>
          <Subtitle style={"w-[492px] mt-3"}>Why will you choose our Services?</Subtitle>
          <ul className="flex flex-col gap-y-5 mt-6 w-[513px]">
            <Text>
              Our services go beyond the <span className="font-semibold">basic services</span> and provide you with a
              clean the that will{" "}
              <a href="#services" className="font-semibold text-orange underline cursor-pointer">
                Cleaning services
              </a>{" "}
              of the reenergize your home and enhance your life.
            </Text>
            <Text>
              Our services go beyond the basic services and provide you with reenergize your home and enhance your life.
            </Text>
          </ul>
          <Button btnClass={"mt-12 mb-[96px]"}>Read More</Button>
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
