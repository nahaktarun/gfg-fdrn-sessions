import { mealApi } from "../../services/mealApi";
import * as types from "./mealActionType";

// action creators
export const fetchMealRequest = () => ({
  type: types.FETCH_MEALS_REQUEST,
});

export const fetchMealSuccess = (meals) => ({
  type: types.FETCH_MEALS_SUCCESS,
  payload: meals,
});

export const fetchMealFailure = (error) => ({
  type: types.FETCH_MEALS_FAILURE,
  payload: error,
});

export const selectMeal = (meal) => ({
  type: types.SELECT_MEAL,
  payload: meal,
});

export const fetchMealByCategory = (category) => {
  return async (dispatch) => {
    dispatch(fetchMealRequest());
    try {
      const meals = await mealApi.getMealsByCategory(category);
      await dispatch(fetchMealSuccess(meals));
      console.log(category);
    } catch (error) {
      dispatch(fetchMealFailure(error.message));
    }
  };
};

export const fetchMealDetails = (mealId) => {
  return async (dispatch) => {
    dispatch(fetchMealRequest());

    try {
      const mealDetails = await mealApi.getMealDetail(mealId);
      await dispatch(selectMeal(mealDetails));
    } catch (error) {
      dispatch(fetchMealFailure(error.message));
    }
  };
};
