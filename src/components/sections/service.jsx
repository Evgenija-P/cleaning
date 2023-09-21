import ServicesList from "../servicesList";
import Subtitle from "../subtitle";
import Text from "../text";
import TitleSection from "../title";

const Service = () => {
  return (
    <section className="h-[1060px] bg-lightBlueSecond">
      <div className="container mx-auto py-[120px]">
        <TitleSection style={"mx-auto text-center"}>Service</TitleSection>
        <Subtitle style={"mx-auto text-center mt-3 mb-5"}>Our Best Services</Subtitle>
        <Text style={"mx-auto text-center w-[609px]"}>
          Our services go beyond the basic services and provide you with reenergize your home and enhance your life.
        </Text>

        <ServicesList />
      </div>
    </section>
  );
};

export default Service;
