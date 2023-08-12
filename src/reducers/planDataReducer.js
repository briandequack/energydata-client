import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  request: null,
  data: null
};

const planDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAN_DATA:
      return {
        ...state,
        data: action.payload,
      };
      case actionTypes.SET_PLAN_REQUEST:
        return {
          ...state,
          request: action.payload,
        };
    default:
      return state;
  }
};

export default planDataReducer;