import { Dots } from "../../icons";
import Button from "../UX/buttons";
import IndicatorsList from "../indicators";
import Girl from "../../images/hero-girl.png";

const Hero = () => {
  return (
    <section className="bg-bgHero h-[907px] overflow-hidden">
      <div className="container mx-auto flex ">
        <div className="pt-[133px]">
          <h1 className="text-7xl text-navy font-title font-bold w-[641px] leading-[1.4]">
            Cleaning Service From World Class Agency.
          </h1>
          <h2 className="w-[617px] text-2xl text-grey mt-6 mb-12 leading-[1.7]">
            Our services go beyond the basic services and provide you with clean your home and enhance your life.
          </h2>

          <Button>Learn More</Button>

          <IndicatorsList />
        </div>
        <div className="relative border-slate-950">
          <Dots className={"absolute top-[23px] left-[22px]"} />
          <div className="w-[733px] h-[733px]  absolute top-0 flex items-center justify-center">
            <div className="w-[633px] h-[633px] rounded-full bg-lightBlue absolute top-[95px]" />
            <img src={Girl} alt="Cleaning-girl" className="h-[800px] absolute top-[110px] left-[84px]" />
            <div className="w-[733px] h-[733px] rounded-full border-lightBlue border-[2px] border-dashed absolute top-[46px] flex items-center justify-center">
              {" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
