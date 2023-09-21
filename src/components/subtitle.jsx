import PropTypes from "prop-types";

const Subtitle = ({ children, style }) => {
  return <h2 className={`font-semibold text-5xl text-navy leading-[1.2]${style}`}>{children}</h2>;
};

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};

export default Subtitle;
