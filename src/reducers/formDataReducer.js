import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  data: []
};

const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FORM_DATA:
      const nameExists = state.data.some((item) => item.name === action.payload.name);
      if (nameExists) {
        return state;
      } else {
        return {
          ...state,
          data: [...state.data, { 
            name: action.payload.name, 
            updateIsRequired: false,
            isValidated: false,
            isDisabled: true,
            isSubmitted: false,
            isLoading: false,
            feedback: ''
        }],
        };
      }
      case actionTypes.SET_FORM_IS_VALIDATED:
        return {
          ...state,
          data: state.data.map((item) =>
            item.name === action.payload.name ? { ...item, isValidated: action.payload.isValidated } : item
          ),
        };
        case actionTypes.SET_FORM_IS_DISABLED:
          return {
            ...state,
            data: state.data.map((item) =>
              item.name === action.payload.name ? { ...item, isDisabled: action.payload.isDisabled } : item
            ),
          };
        case actionTypes.SET_FORM_IS_SUBMITTED:
          return {
            ...state,
            data: state.data.map((item) =>
              item.name === action.payload.name ? { ...item, isSubmitted: action.payload.isSubmitted } : item
            ),
          }; 
        case actionTypes.SET_FORM_IS_LOADING:
          return {
            ...state,
            data: state.data.map((item) =>
              item.name === action.payload.name ? { ...item, isLoading: action.payload.isLoading } : item
            ),
          };  
        case actionTypes.SET_FORM_FEEDBACK:
          return {
            ...state,
            data: state.data.map((item) =>
              item.name === action.payload.name ? { ...item, feedback: action.payload.feedback } : item
            ),
          };  
          case actionTypes.SET_FORM_UPDATE_IS_REQUIRED:
            return {
              ...state,
              data: state.data.map((item) =>
                item.name === action.payload.name ? { ...item, updateIsRequired: action.payload.updateIsRequired } : item
              ),
            };  
    default:
      return state;
  }
};

export default formDataReducer;