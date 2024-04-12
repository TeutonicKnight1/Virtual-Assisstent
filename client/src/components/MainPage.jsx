import Header from "./Header";
import Footer from "./Footer";

import SurveyList from "./SurveyList";

import { PropTypes } from "prop-types";
const MainPage = ({ itemArr }) => {
  return (
    <>
      <div>
        <Header />
        <div className="main_page">
          <div className="container">
            <p>бим бим бам бам</p>
            <SurveyList itemArr={itemArr} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

MainPage.propTypes = {
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

export default MainPage;
