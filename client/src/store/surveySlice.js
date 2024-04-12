import { createSlice } from "@reduxjs/toolkit";

const surveySlice = createSlice({
  name: "surveySlice",
  initialState: {
    itemArr: [],
    resultSurvey: [],
  },
  reducers: {
    setItemArr: (state, action) => {
      state.itemArr = action.payload;
    },
    //clearItemArr: (state) => {},
    nextStep: (state, action) => {
      if (action.payload+1<= state.itemArr.length-1) {
        state.itemArr[action.payload+1].isActive = true;
      }
    },
  },
});

export const { setItemArr, clearItemArr, nextStep, prevStep } =
  surveySlice.actions;
export default surveySlice.reducer;
