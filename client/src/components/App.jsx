import "../styles/index.scss";
import MainPage from "./MainPage.jsx";

import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItemArr } from "../store/surveySlice";
//import { useState } from "react";
const App = () => {
  const dispatch = useDispatch();
  //const [isFirstRender, setIsFirstRender] = useState(true);
  const itemArr = [
    {
      id: 0,
      question: "Для каких целей Вы приобретаете ноутбук?",
      answers: [
        { id: 1, number: 1, item: "Исключительно для работы" },
        { id: 2, number: 2, item: "В основном собираюсь играть" },
        { id: 3, number: 3, item: "Хотелось бы и поработать, и поиграть" },
        { id: 4, number: 4, item: "3D моделирование, видеомонтаж" },
        { id: 5, number: 5, item: "Интернет, кино, учёба, соцсети" },
        { id: 6, number: 6, item: "Затрудняюсь ответить" },
      ],
      isActive: true,
    },
    {
      id: 1,
      question: "Для каких цсячелей Вы приобретаете компьютер?",
      answers: [
        { id: 7, number: 1, item: "Исключительно для работы" },
        { id: 8, number: 2, item: "В основном собираюсь играть" },
        { id: 9, number: 3, item: "Хотелось бы и поработать, и поиграть" },
        { id: 10, number: 4, item: "3D моделирование, видеомонтаж" },
        { id: 11, number: 5, item: "Интернет, кино, учёба, соцсети" },
        { id: 12, number: 6, item: "Затрудняюсь отdawdawветить" },
      ],
      isActive: true,
    },
    {
      id: 2,
      question: "Для каких цесячлей Вы приобретаете ноутбук?",
      answers: [
        { id: 1, number: 1, item: "Исключительно для работы" },
        { id: 2, number: 2, item: "В основном собираюсь играть" },
        { id: 3, number: 3, item: "Хотелось бы и поработать, и поиграть" },
        { id: 4, number: 4, item: "3D моделирование, видеомонтаж" },
        { id: 5, number: 5, item: "Интернет, кино, учёба, соцсети" },
        { id: 6, number: 6, item: "Затрудняюсь ответить" },
      ],
      isActive: true,
    },
    {
      id: 3,
      question: "Для каких целевфвй Вы приобретаете компьютер?",
      answers: [
        { id: 7, number: 1, item: "Исключительно для работы" },
        { id: 8, number: 2, item: "В основном собираюсь играть" },
        { id: 9, number: 3, item: "Хотелось бы и поработать, и поиграть" },
        { id: 10, number: 4, item: "3D моделирование, видеомонтаж" },
        { id: 11, number: 5, item: "Интернет, кино, учёба, соцсети" },
        { id: 12, number: 6, item: "Затрудняюсь отdawdawветить" },
      ],
      isActive: true,
    },
    {
      id: 4,
      question: "Для каких целеввфцвй Вы приобретаете ноутбук?",
      answers: [
        { id: 1, number: 1, item: "Исключительно для работы" },
        { id: 2, number: 2, item: "В основном собираюсь играть" },
        { id: 3, number: 3, item: "Хотелось бы и поработать, и поиграть" },
        { id: 4, number: 4, item: "3D моделирование, видеомонтаж" },
        { id: 5, number: 5, item: "Интернет, кино, учёба, соцсети" },
        { id: 6, number: 6, item: "Затрудняюсь ответить" },
      ],
      isActive: true,
    },
    {
      id: 5,
      question: "Для каких целячсфцваей Вы приобретаете компьютер?",
      answers: [
        { id: 7, item: "Исключительно для работы" },
        { id: 8, item: "В основном собираюсь играть" },
        { id: 9, item: "Хотелось бы и поработать, и поиграть" },
        { id: 10, item: "3D моделирование, видеомонтаж" },
        { id: 11, item: "Интернет, кино, учёба, соцсети" },
        { id: 12, item: "Затрудняюсь отdawdawветить" },
      ],
      isActive: true,
    },
  ];

  useEffect(() => {
    dispatch(setItemArr(itemArr));
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage itemArr={itemArr}/>} />
      </Routes>
    </>
  );
};

export default App;
