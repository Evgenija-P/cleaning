import Button from "../UX/buttons";

const Hero = () => {
  return (
    <section className="bg-bgHero h-[907px]">
      <div className="container mx-auto pt-[133px]">
        <h1 className="text-7xl text-navy font-title font-bold w-[641px] leading-[1.4]">
          Cleaning Service From World Class Agency.
        </h1>
        <h2 className="w-[617px] text-2xl text-grey mt-6 mb-12 leading-[1.7]">
          Our services go beyond the basic services and provide you with clean your home and enhance your life.
        </h2>

        <Button>Learn More</Button>
      </div>
    </section>
  );
};

export default Hero;
