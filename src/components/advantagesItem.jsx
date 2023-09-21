import PropTypes from "prop-types";

const AdvantagesItem = ({ item }) => {
  const bgColor = item.color === "yellow" ? "bg-yellow" : item.color === "green" ? "bg-green" : "bg-orange";
  return (
    <li>
      <ul className="flex gap-x-6 items-center">
        <li className={`w-[80px] h-[80px] rounded-full p-4 ${bgColor} bg-opacity-10`}>{item.icon}</li>
        <li className="flex flex-col gap-y-3">
          <div className="text-[32px] text-navy font-title font-semibold">{item.title}</div>
          <div className="w-[505px] text-lg text-text">{item.text}</div>
        </li>
      </ul>
    </li>
  );
};

AdvantagesItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default AdvantagesItem;
