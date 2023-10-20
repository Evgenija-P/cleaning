/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const FAQ = ({ faq, index, toggleFAQ }) => {
  const { t } = useTranslation();
  return (
    <div className={"faq " + (faq.open ? "open" : "")} key={index} onClick={() => toggleFAQ(index)}>
      <div className="faq-question">{t(`questions_items.${faq.id - 1}.question`)}</div>
      <div className="faq-answer">{t(`questions_items.${faq.id - 1}.answer`)}</div>
    </div>
  );
};

FAQ.propTypes = {
  faq: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  toggleFAQ: PropTypes.func.isRequired,
};

export default FAQ;
