import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  data: null
};

const utilityDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_UTILITY_DATA:
      return {
        ...state, 
        data: action.payload,
      };
    default:
      return state;
  }
};

export default utilityDataReducer;