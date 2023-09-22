import PropTypes from "prop-types";
import { useState } from "react";

import FAQ from "./FAQ";

const QuestionsList = ({ data }) => {
  const [faqs, setFaqs] = useState(data);
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  return (
    <div className="faqs">
      {faqs.map((faq, index) => (
        <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
      ))}
    </div>
  );
};

QuestionsList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default QuestionsList;
