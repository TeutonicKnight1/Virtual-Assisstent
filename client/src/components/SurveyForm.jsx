import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";

import { nextStep } from "../store/surveySlice";

import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";


const SurveyForm = ({ id, question, answers, isActive }) => {
  const dispatch = useDispatch();
  //const [resultQuestion, setResultQuestion] = useState({});
  //const [answersState, setAnswersState] = useState(answers);

  const handleChange = () => {
    dispatch(nextStep(id));
  };

  return (
    <div className="overflow_parent_block">
      <form className={isActive ? "show" : "display_none"}>
        <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: "1.2rem" }}>{question}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {answers.map((element) => (
              <FormControlLabel key={element.id} value={element.item} control={<Radio size="small"/>} label={element.item} onClick={handleChange}/>
          ))}
        </RadioGroup>
      </form>
    </div>
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
