// import { useState } from "react";
import data from "../../data/price.json";
import TitleSection from "../title";
import Subtitle from "../subtitle";
import Text from "../text";
import PriceList from "../priceList";
import { Dots } from "../../icons";
import { useTranslation } from "react-i18next";

const Price = () => {
  const { t } = useTranslation();
  // const categories = [1, 2, 3];
  // const [filter, setFilter] = useState(t(`pricing.categories.0`));

  // data.forEach((el) => {
  //   if (!categories.includes(el.type)) {
  //     categories.push(el.type);
  //   }
  // });

  // const filteredItems = filter === t(`pricing.categories.0`) ? data : data.filter((el) => el.type === filter);

  return (
    <section className="relative" id="price">
      <div className="min-h-[1284px] container mx-auto pt-[120px]">
        <TitleSection style={"mx-auto text-center"}>{t(`pricing.title`)}</TitleSection>
        <Subtitle style={"mx-auto text-center mt-3 mb-5"}>{t(`pricing.subtitle`)}</Subtitle>
        <Text style={"mx-auto text-center w-[609px] mb-4"}>{t(`pricing.text`)}</Text>
        <Text style={"mx-auto text-center w-[609px] mb-5"}>{t(`pricing.second_text`)}</Text>

        {/* <div className="grid grid-cols-3 gap-x-2 mb-5">
          {categories.map((el) => (
            <button
              key={el}
              className={`rounded rounded-tr-3xl p-4 text-xl font-medium  ${
                el === filter
                  ? "bg-orange bg-opacity-100 text-white shadow-buttonOrange"
                  : "bg-blue bg-opacity-40 hover:shadow-button text-gray-400"
              }`}
              onClick={() => setFilter(t(`pricing.categories.${el - 1}`))}
            >
              {t(`pricing.categories.${el - 1}`)}
            </button>
          ))}
        </div> */}

        <PriceList data={data} />

        <div className="w-[275px] h-[275px] rounded-full bg-lightBlue  absolute top-[-140px] right-[15px]" />
        <Dots className={"absolute bottom-[-112px] left-[15px]"} />
      </div>
    </section>
  );
};

export default Price;
