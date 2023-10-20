import Proptypes from "prop-types";
import { useTranslation } from "react-i18next";
import Button from "./UX/buttons";
import { Check } from "../icons";

const PriceItem = ({ item }) => {
  const { t } = useTranslation();
  const { one, regular, oneCent, regularCent, id } = item;
  const ITEMS = [1, 2, 3, 4, 5];

  function getChoiseType(price, cents, period) {
    console.log(price, cents, period);
  }

  return (
    <ul className="w-[400px] h-[600px] rounded-md border-[1.5px] border-[#ECECEC] py-[30px] px-5 flex flex-col justify-between mx-auto shadow-priceItem">
      <li className="text-main text-[45px] font-title font-medium text-center min-h-[135px]">
        {t(`price_items.${id - 1}.title`)}
      </li>
      <li className="flex flex-col gap-y-2">
        {ITEMS.map((el) => (
          <p key={el} className="flex gap-x-2">
            <Check />
            <span className="w-[90%]">{t(`price_items.${id - 1}.text.${el - 1}`)}</span>
          </p>
        ))}
      </li>
      <li className="grid grid-cols-2 gap-x-2">
        <Button style={"priceBlue"} btnClass={"w-full ordinal"} clickFn={() => getChoiseType(one, oneCent, "once")}>
          <span className="font-bold">{one}.</span> <sup>{oneCent}</sup>$ / {t(`pricing.once`)}
        </Button>
        <Button
          style={"priceOrange"}
          btnClass={"w-full"}
          clickFn={() => getChoiseType(regular, regularCent, "regular")}
        >
          <span className="font-bold">{regular}.</span>
          <sup>{regularCent}</sup>$ / {t(`pricing.regular`)}
        </Button>
      </li>
      <li className="text-main text-2xl italic">
        {t(`pricing.category`)}: {t(`price_items.${id - 1}.type`)}
      </li>
    </ul>
  );
};

PriceItem.propTypes = {
  item: Proptypes.shape({
    title: Proptypes.string.isRequired,
    text: Proptypes.array.isRequired,
    one: Proptypes.string.isRequired,
    regular: Proptypes.string.isRequired,
    type: Proptypes.string.isRequired,
    oneCent: Proptypes.string.isRequired,
    regularCent: Proptypes.string.isRequired,
    id: Proptypes.string.isRequired,
  }),
};

export default PriceItem;
