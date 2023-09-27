import PropTypes from "prop-types";

const buttonsStyle = {
  regular: "w-[177px] h-[66px] bg-blue hover:shadow-button p-4",
  priceOrange: "w-[120px] h-[66px] bg-orange hover:shadow-buttonPrice py-4 px-2",
  priceBlue: "w-[120px] h-[66px] bg-blue hover:shadow-buttonPrice py-4 px-2",
  form: "w-[466px] h-[66px] bg-blue hover:shadow-buttonPrice py-4 px-10",
};

const Button = ({ children, btnType, icon, clickFn, btnClass, style, ...restProps }) => {
  const handleClick = () => (clickFn ? clickFn() : null);
  const additionalStyle = btnClass || "";
  const currentStyle = `rounded-md text-white text-lg font-medium flex items-center justify-center ${buttonsStyle[style]} ${additionalStyle}`;

  return (
    <button type={btnType || "button"} className={currentStyle} onClick={handleClick} {...restProps}>
      {children}
      {icon}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  btnType: PropTypes.string,
  icon: PropTypes.element,
  clickFn: PropTypes.func,
  btnClass: PropTypes.string,
  style: PropTypes.oneOf(["regular", "priceOrange", "priceBlue", "form"]).isRequired,
};

export default Button;
