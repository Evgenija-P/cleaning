import { MouseParallax } from "react-just-parallax";
import items from "../data/testimonials.json";

const styles = [
  "w-[88px] h-[88px] top-[313px] right-[300px] opacity-[.8]",
  "w-[64px] h-[64px] top-[308px] right-[161px] opacity-[.6]",
  "w-[44px] h-[44px] top-[472px] right-[253px] opacity-[.7]",
  "w-[44px] h-[44px] top-[572px] right-[157px]",
  "w-[44px] h-[44px] top-[585px] right-[295px] opacity-[.8]",
  "w-[64px] h-[64px] top-[723px] right-[234px]",
  "w-[44px] h-[44px] top-[840px] right-[455px] opacity-[.6]",
  "w-[64px] h-[64px] top-[899px] right-[752px]",
  "w-[44px] h-[44px] top-[880px] left-[492px] opacity-[.8]",
  "w-[88px] h-[88px] top-[717px] left-[244px]",
  "w-[44px] h-[44px] top-[615px] left-[305px] opacity-[.6]",
  "w-[44px] h-[44px] top-[542px] left-[142px] opacity-[.8]",
  "w-[44px] h-[44px] top-[470px] left-[256px]",
  "w-[88px] h-[88px] top-[336px] left-[300px] opacity-[.7]",
  "w-[64px] h-[64px] top-[225px] left-[145px]",
  "w-[44px] h-[44px] top-[340px] left-[484px] opacity-[.8]",
  "w-[64px] h-[64px] top-[215px] right-[485px] opacity-[.6]",
  "w-[64px] h-[64px] top-[265px] left-[610px] opacity-[.7]",
];

const TestimonialsFonPhoto = () => {
  return (
    <ul className="hidden xl:inline mt-64">
      {items.map((el) => (
        <li key={el.id} className={`${styles[el.id]} absolute`}>
          <MouseParallax>
            <img
              src={el.photo}
              alt="testimonials"
              className={`${styles[el.id]} rounded-full object-cover shadow-testimonials`}
            />
          </MouseParallax>
        </li>
      ))}
    </ul>
  );
};

export default TestimonialsFonPhoto;
