import { Dots } from "../../icons";
import ContactForm from "../contactForm";
import Subtitle from "../subtitle";
import Text from "../text";
import TitleSection from "../title";

const Contact = () => {
  return (
    <section className="h-[840px] relative" id="contact">
      <div className="h-[441px] w-full bg-lightBlueSecond" />
      <div className="absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 container mx-auto pt-[120px]">
        <div className="w-[1157px] py-[55px] pl-[120px] pr-10 bg-white shadow-form mx-auto flex justify-between items-center">
          <div className="w-[400px]">
            <TitleSection>Contact</TitleSection>
            <Subtitle style={"mt-3 mb-5"}>Contact with Us </Subtitle>
            <Text style={"w-full mb-4"}>
              Our services go beyond the basic services and provide you with a reenergize your home.
            </Text>
            <a href="tel:+001122334455" className="text-2xl font-semibold text-blue mt-8">
              +00 11 22 33 44 55
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
      <div className="w-[328px] h-[328px] rounded-full bg-lightBlue absolute top-[-140px] left-[-162px]" />
      <Dots className={"absolute top-[-112px] right-[15px]"} />
    </section>
  );
};

export default Contact;
