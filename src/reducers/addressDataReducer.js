import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  data: null
};

const addressDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ADDRESS_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default addressDataReducer;