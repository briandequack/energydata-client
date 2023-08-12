import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
  data: []
};

const fieldDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FIELD_DATA:
      const nameExists = state.data.some((item) => item.name === action.payload.name);
      if (nameExists) {
        return state;
      } else {
        return {
          ...state,
          data: [...state.data, { 
            name: action.payload.name, 
            isRequired: action.payload.isRequired,
            isDisabled: action.payload.isDisabled,
            initIsDisabled: action.payload.isDisabled,
            isValidated: false,
            isValidatedClass: '',
            input: '',
            isToggled: !action.payload.isDisabled,
            toggleIsDisabled: false
        }],
        };
      }
      case actionTypes.SET_FIELD_INPUT:
        return {
          ...state,
          data: state.data.map((item) =>
            item.name === action.payload.name ? { ...item, input: action.payload.input } : item
          ),
        };
      case actionTypes.SET_FIELD_IS_VALIDATED:
        return {
          ...state,
          data: state.data.map((item) =>
            item.name === action.payload.name ? { ...item, isValidated: action.payload.isValidated } : item
          ),
        };
      case actionTypes.SET_FIELD_IS_VALIDATED_CLASS:
        return {
          ...state,
          data: state.data.map((item) =>
            item.name === action.payload.name ? { ...item, isValidatedClass: action.payload.isValidatedClass } : item
          ),
        };
        case actionTypes.SET_FIELD_IS_DISABLED:
          return {
            ...state,
            data: state.data.map((item) =>
              item.name === action.payload.name ? { ...item, isDisabled: action.payload.isDisabled } : item
            ),
          };
        case actionTypes.SET_FIELD_IS_TOGGLED:
          return {
            ...state,
            data: state.data.map((item) =>
              item.name === action.payload.name ? { ...item, isToggled: action.payload.isToggled } : item
            ),
          };
        case actionTypes.SET_FIELD_TOGGLE_IS_DISABLED:
          return {
            ...state,
            data: state.data.map((item) =>
              item.name === action.payload.name ? { ...item, toggleIsDisabled: action.payload.toggleIsDisabled } : item
            ),
          };  
    default:
      return state;
  }
};

export default fieldDataReducer;