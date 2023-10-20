import { useTranslation } from "react-i18next";
import ReviewList from "../reviewList";
import Subtitle from "../subtitle";
import TestimonialsFonPhoto from "../testimonialsFonPhoto";
import TitleSection from "../title";

const Review = () => {
  const { t } = useTranslation();

  return (
    <section className="relative" id="testimonials">
      <div className="container mx-auto py-[120px] min-h-[1040px]">
        <TitleSection style={"mx-auto text-center z-10"}>{t(`review.title`)}</TitleSection>
        <Subtitle style={"mx-auto text-center mt-3 mb-6 z-10"}>{t(`review.subtitle`)}</Subtitle>

        <TestimonialsFonPhoto />

        <ReviewList />
      </div>
    </section>
  );
};

export default Review;
