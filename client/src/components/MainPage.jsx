import Header from "./Header";
import Footer from "./Footer";

import SurveyList from "./SurveyList";

// import { PropTypes } from "prop-types";
import PriceSlider from "./PriceSlider";
import AdvancedConditions from "./AdvancedConditions";
import ScrollToTopButton from "./ScrollToTopButton";
import RecomendationProductList from "./RecomendationProductList";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="main_page">
        <div className="container">
          <div className="main_page_content">
            <div className="main_page_content_left_column">
              <SurveyList />
            </div>
            <div className="main_page_content_right_column">
              <PriceSlider />
              <AdvancedConditions />
            </div>
          </div>
          <RecomendationProductList />
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

MainPage.propTypes = {
  // itemArr: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     question: PropTypes.string.isRequired,
  //     answers: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         id: PropTypes.number.isRequired,
  //         item: PropTypes.string.isRequired,
  //       })
  //     ).isRequired,
  //     isActive: PropTypes.bool.isRequired,
  //   })
  // ),
};

export default MainPage;
