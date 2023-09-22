import { useState } from "react";
import data from "../../data/price.json";
import TitleSection from "../title";
import Subtitle from "../subtitle";
import Text from "../text";
import PriceList from "../priceList";
import { Dots } from "../../icons";

const Price = () => {
  const categories = ["All prices"];
  const [filter, setFilter] = useState("All prices");

  data.forEach((el) => {
    if (!categories.includes(el.type)) {
      categories.push(el.type);
    }
  });

  const filteredItems = filter === "All prices" ? data : data.filter((el) => el.type === filter);

  return (
    <section className="relative" id="price">
      <div className="min-h-[1284px] container mx-auto pt-[120px]">
        <TitleSection style={"mx-auto text-center"}>Pricing</TitleSection>
        <Subtitle style={"mx-auto text-center mt-3 mb-5"}>Our Cleaning Company Work Process for You </Subtitle>
        <Text style={"mx-auto text-center w-[609px] mb-4"}>
          Our services go beyond the basic services and provide you with reenergize your in a home and enhance your
          life.
        </Text>
        <Text style={"mx-auto text-center w-[609px] mb-5"}>
          Our services go beyond the basic services and and enhance your life.
        </Text>

        <div className="grid grid-cols-3 gap-x-2 mb-5">
          {categories.map((el, index) => (
            <button
              key={index + 1}
              className={`rounded rounded-tr-3xl p-4 text-xl font-medium  ${
                el === filter
                  ? "bg-orange bg-opacity-100 text-white shadow-buttonOrange"
                  : "bg-blue bg-opacity-40 hover:shadow-button text-gray-400"
              }`}
              onClick={() => setFilter(el)}
            >
              {el}
            </button>
          ))}
        </div>

        <PriceList data={filteredItems} />

        <div className="w-[275px] h-[275px] rounded-full blur-lg bg-lightBlue  absolute top-[-140px] right-[15px]" />
        <Dots className={"absolute bottom-[-112px] left-[15px]"} />
      </div>
    </section>
  );
};

export default Price;
