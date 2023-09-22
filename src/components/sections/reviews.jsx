import Subtitle from "../subtitle";
import TestimonialsFonPhoto from "../testimonialsFonPhoto";
import TitleSection from "../title";

const Review = () => {
  return (
    <section className="relative">
      <div className="container mx-auto py-[120px] min-h-[934px]">
        <TitleSection style={"mx-auto text-center z-10"}>Testimonials</TitleSection>
        <Subtitle style={"mx-auto text-center mt-3 mb-6 z-10"}>Our Clients Say</Subtitle>

        <TestimonialsFonPhoto />
      </div>
    </section>
  );
};

export default Review;
