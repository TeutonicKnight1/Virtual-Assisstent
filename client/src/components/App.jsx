import "../styles/index.scss";
import MainPage from "./MainPage.jsx";
import SignInPage from "./SignInPage.jsx";
import SignUpPage from "./SignUpPage.jsx";

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
      question:
        "Насколько трудоемки задачи, которые должен решать Ваш ноутбук?",
      answers: [
        {
          id: 7,
          number: 1,
          item: "Одновременно могут работать несколько профессиональных приложений",
        },
        { id: 8, number: 2, item: "Серьезно буду играть в 3D-игры" },
        {
          id: 9,
          number: 3,
          item: "В основном офисные приложения, интернет, кино",
        },
        { id: 12, number: 6, item: "Затрудняюсь ответить" },
      ],
      isActive: true,
    },
    {
      id: 2,
      question:
        "При прочих равных критериях я выберу ноутбук с такими характеристиками...",
      answers: [
        { id: 1, number: 1, item: "Обязательное наличие SSD накопителя" },
        {
          id: 2,
          number: 2,
          item: "Лучшее качество матрицы, феноменальная цветопередача и разрешение не меньше Full HD",
        },
        {
          id: 3,
          number: 3,
          item: "Хочу чтобы корпус был из качественных материалов (металл/карбон/кожа)!",
        },
        { id: 4, number: 4, item: "Просто хочу клавиатуру с подсветкой" },
        { id: 5, number: 5, item: "Хочу все премиум опции!" },
        { id: 6, number: 6, item: "Не важно" },
      ],
      isActive: true,
    },
    {
      id: 3,
      question: "Насколько хорошо вы владеете компьютером?",
      answers: [
        {
          id: 7,
          number: 1,
          item: "Я – профессионал, и могу использовать все преимущества Windows 7/8/10/11 Professional",
        },
        {
          id: 8,
          number: 2,
          item: "Я умею подключаться к интернету и пользоваться поисковиком",
        },
        {
          id: 9,
          number: 3,
          item: "Самостоятельно могу установить операционную систему и драйвера",
        },
        { id: 10, number: 4, item: "Не скажу, это – тайна!" },
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
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/" element={<MainPage itemArr={itemArr} />} />
      </Routes>
    </>
  );
};

export default App;
