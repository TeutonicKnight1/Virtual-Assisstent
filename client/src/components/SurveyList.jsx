import SurveyForm from "./SurveyForm";

import { PropTypes } from "prop-types";

const SurveyList = ({ itemArr }) => {
  return (
    <>
      <div className="survey_list">
        {itemArr.map((element) => (
          <SurveyForm key={element.question} id={element.id} question={element.question} answers={element.answers} isActive={element.isActive} />
        ))}
      </div>
      <button type="button" className="submitForm">Посоветовать</button>
    </>
  );
};

SurveyList.propTypes = {
  itemArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          item: PropTypes.string.isRequired,
        })
      ).isRequired,
      isActive: PropTypes.bool.isRequired,
    })
  ),
};

export default SurveyList;
