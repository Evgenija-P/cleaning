import PropTypes from "prop-types";

const Button = ({ children, btnType, icon, clickFn, btnClass, ...restProps }) => {
  const handleClick = () => (clickFn ? clickFn() : null);
  const additionalStyle = btnClass || "";

  return (
    <button
      type={btnType || "button"}
      className={`rounded-md w-[177px] h-[66px] p-4 text-lg font-medium text-white bg-blue flex items-center justify-center hover:shadow-button ${additionalStyle} `}
      onClick={handleClick}
      {...restProps}
    >
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
};

export default Button;
