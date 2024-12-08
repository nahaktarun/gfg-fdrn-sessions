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

export const fetchMealByCategory = (category) => {
  return async (dispatch) => {
    dispatch(fetchMealRequest());
  };
};
