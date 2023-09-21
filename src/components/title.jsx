import PropTypes from "prop-types";
import { Title } from "../icons";

const TitleSection = ({ children, style }) => {
  return (
    <div className={`flex flex-col gap-y-1 ${style}`}>
      <h4 className="text-navy text-xl font-medium">{children}</h4>
      <Title className={style} />
    </div>
  );
};

TitleSection.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};

export default TitleSection;
