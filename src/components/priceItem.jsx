import Proptypes from "prop-types";
import Button from "./UX/buttons";
import { Check } from "../icons";

const PriceItem = ({ item }) => {
  const { title, text, one, regular, type, oneCent, regularCent } = item;

  function getChoiseType(price, cents, period) {
    console.log(price, cents, period);
  }

  return (
    <ul className="w-[400px] h-[765px] rounded-md border-[1.5px] border-[#ECECEC] py-[60px] px-5 flex flex-col justify-between">
      <li className="text-main text-[45px] font-title font-medium text-center min-h-[135px]">{title}</li>
      <li className="flex flex-col gap-y-2">
        {text.map((t, index) => (
          <p key={index + 1} className="flex gap-x-2">
            <Check /> {t}
          </p>
        ))}
      </li>
      <li className="grid grid-cols-2 gap-x-2">
        <Button style={"priceBlue"} btnClass={"w-full ordinal"} clickFn={() => getChoiseType(one, oneCent, "once")}>
          <span className="font-bold">{one}.</span> <sup>{oneCent}</sup>$ / once
        </Button>
        <Button
          style={"priceOrange"}
          btnClass={"w-full"}
          clickFn={() => getChoiseType(regular, regularCent, "regular")}
        >
          <span className="font-bold">{regular}.</span>
          <sup>{regularCent}</sup>$ / regular
        </Button>
      </li>
      <li className="text-main text-2xl italic">Category: {type}</li>
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
  }),
};

export default PriceItem;
