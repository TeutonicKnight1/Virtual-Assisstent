import "../styles/index.scss";
import MainPage from "./MainPage.jsx";
import SignInPage from "./SignInPage.jsx";
import SignUpPage from "./SignUpPage.jsx";

import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItemArr } from "../store/surveySlice";
import data from "../data.js";
import { useState } from "react";
const App = () => {
  const dispatch = useDispatch();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
    } else {
      dispatch(setItemArr(data));
    }
  }, [dispatch, isFirstRender]);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
