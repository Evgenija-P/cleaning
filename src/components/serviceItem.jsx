import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { /* ArrowRight */ Services } from "../icons";

const ServiceItem = ({ item }) => {
  const { t } = useTranslation();
  const bgColor = item.color === "yellow" ? "bg-yellow" : item.color === "green" ? "bg-green" : "bg-orange";

  return (
    <ul className="w-[420px] min-h-[441px] bg-white rounded-xl p-8 border-[1px] border-[#E3E3E3] relative">
      <li
        className={`w-[128px] h-[128px] rounded-full flex justify-center items-center ${bgColor} bg-opacity-20 mb-10`}
      >
        <Services color={item.color} />
      </li>
      <li className="text-[32px] font-semibold text-serviceTitle font-title mb-5">
        {t(`servise_items.${item.id - 1}.title`)}
      </li>
      <li className="text-lg text-grey mb-10">{t(`servise_items.${item.id - 1}.text`)}</li>
      {/* <li className="absolute bottom-5 right-5">
        <button className="hover:scale-125">
          <ArrowRight color={item.color} />
        </button>
      </li> */}
    </ul>
  );
};

ServiceItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ServiceItem;
