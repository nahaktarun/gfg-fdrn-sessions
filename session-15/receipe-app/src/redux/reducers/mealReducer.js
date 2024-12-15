import * as types from "../actions/mealActionType";

const initialState = {
  meals: [],
  loading: false,
  error: null,
  selectMeal: null,
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MEALS_REQUEST:
      return { ...state, loading: true, error: null };
    case types.FETCH_MEALS_SUCCESS:
      return {
        ...state,
        loading: false,
        meals: action.payload,
        error: null,
      };
    case types.FETCH_MEALS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case types.SELECT_MEAL:
      return {
        ...state,
        loading: false,
        selectMeal: action.payload,
      };
    default:
      return state;
  }
};
export default mealReducer;
