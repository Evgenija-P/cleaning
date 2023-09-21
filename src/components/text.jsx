import PropTypes from "prop-types";

const Text = ({ children, style }) => {
  return <p className={`text-lg text-text leading-[1.56] ${style}`}>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};

export default Text;
