import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Polygon } from "../icons";

const ProcessItem = ({ item }) => {
  const { t } = useTranslation();

  const currentTextColor =
    item.color === "blue"
      ? "text-blue"
      : item.color === "green"
      ? "text-green"
      : item.color === "yellow"
      ? "text-yellow"
      : "text-orange";

  return (
    <ul
      className={`mx-auto w-[337px] h-[372px] px-6 py-[40px] border-l-[1px] ${
        item.color === "blue"
          ? "border-blue"
          : item.color === "green"
          ? "border-green"
          : item.color === "yellow"
          ? "border-yellow"
          : "border-orange"
      } shadow-priceItem`}
    >
      <li className="w-[97px] h-[97px] flex items-center relative mx-auto">
        <Polygon color={item.color} className={"absolute top-0 left-0"} />
        <p className={`text-2xl font-bold ${currentTextColor} mx-auto`}>0{item.id}</p>
      </li>
      <li className="text-2xl text-navy font-bold mx-auto mt-8 font-title text-center">
        {t(`how_items.${item.id - 1}.title`)}
      </li>
      <li className="text-lg text-grey mt-4 text-center">{t(`how_items.${item.id - 1}.text`)}</li>
    </ul>
  );
};

ProcessItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProcessItem;
