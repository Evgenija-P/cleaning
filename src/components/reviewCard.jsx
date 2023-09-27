import PropTypes from "prop-types";
// import { useTranslation } from "react-i18next";

const ReviewCard = ({ item }) => {
  //   const { t } = useTranslation();
  return (
    <ul className="w-[750px] mx-auto">
      <li className="w-[88px] mx-auto mb-8">
        <img src={item.photo} alt="response photo" className="object-cover w-[88px] h-[88px] rounded-full" />
      </li>
      <li className="text-xl font-bold text-center mb-10">{item.name}</li>
      <li className="text-base text-center mb-6">{item.text}</li>
    </ul>
  );
};

ReviewCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ReviewCard;
