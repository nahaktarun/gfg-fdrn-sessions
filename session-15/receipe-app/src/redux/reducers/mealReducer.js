import * as types from "../actions/mealActionType";

const intialState = {
  meals: [],
  loading: false,
  error: null,
};

const mealReducer = (state = intialState, action) => {
  switch (action.types) {
    case types.FETCH_MEALS_REQUEST:
      return { ...state, loading: true, error: null };

    case types.FETCH_MEALS_SUCCESS:
      return {
        ...state,
        loading: false,
        meals: action.payload || [],
        error: null,
      };
    case types.FETCH_MEALS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default mealReducer;
