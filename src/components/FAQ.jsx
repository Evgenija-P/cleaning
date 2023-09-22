/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div className={"faq " + (faq.open ? "open" : "")} key={index} onClick={() => toggleFAQ(index)}>
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

FAQ.propTypes = {
  faq: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  toggleFAQ: PropTypes.func.isRequired,
};

export default FAQ;
