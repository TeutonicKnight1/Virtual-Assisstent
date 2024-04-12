import { PropTypes } from "prop-types";

import { nextStep } from "../store/surveySlice";
import { useDispatch, useSelector } from "react-redux";


const SurveyForm = ({id, question, answers, isActive}) => {
  const dispatch = useDispatch();
  //const { isActiveState } = useSelector((state) => state.survey.itemArr[id].isActive);
  //const data = itemArr[id];
//   const [resultQuestion, setResultQuestion] = useState({});
//   const [answersState, setAnswersState] = useState(answers);

  const handleChange = () => {
    dispatch(nextStep(id));
  };

  return (
    <>
      <form className={isActive ? "form" : " form display_none"}>
        <h3>{question}</h3>
        <ul className="ul">
          {answers.map((element) => (
            <li key={element.id} className="li">
              <label key={element.id} className="label">
                <input
                  id={element.id}
                  type="radio"
                  name="question"
                  className="radio"
                  value={element.number}
                  onClick={handleChange}
                />
                <span>{element.item}</span>
              </label>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
};

SurveyForm.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
    })
  ).isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SurveyForm;
