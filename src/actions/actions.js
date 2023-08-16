import { actionTypes } from "../actionTypes/actionTypes";

export const actions = {
  setAddressData: (data) => {
    return {
      type: actionTypes.SET_ADDRESS_DATA,
      payload: data
    };
  },
  setUtilityData: (data) => {
    return {
      type: actionTypes.SET_UTILITY_DATA,
      payload: data
    };
  },
  setPlanData: (data) => {
    return {
      type: actionTypes.SET_PLAN_DATA,
      payload: data
    };
  },
  setPlanRequest: (data) => {
    return {
      type: actionTypes.SET_PLAN_REQUEST,
      payload: data
    };
  },
}

export const fieldActions = {
  add: (data) => {
    return {
      type: actionTypes.ADD_FIELD_DATA,
      payload: data
    };
  },
  setInput: (data) => {
    return {
      type: actionTypes.SET_FIELD_INPUT,
      payload: data
    };
  },
  setIsDisabled: (data) => {
    return {
      type: actionTypes.SET_FIELD_IS_DISABLED,
      payload: data
    };
  },
  setTransientIsDisabled: (data) => {
    return {
      type: actionTypes.SET_FIELD_TRANSIENT_IS_DISABLED,
      payload: data
    };
  },
  setIsValidated: (data) => {
    return {
      type: actionTypes.SET_FIELD_IS_VALIDATED,
      payload: data
    };
  },
  setIsValidatedClass: (data) => {
    return {
      type: actionTypes.SET_FIELD_IS_VALIDATED_CLASS,
      payload: data
    };
  },
  setIsToggled: (data) => {
    return {
      type: actionTypes.SET_FIELD_IS_TOGGLED,
      payload: data
    };
  },
  setToggleIsDisabled: (data) => {
    return {
      type: actionTypes.SET_FIELD_TOGGLE_IS_DISABLED,
      payload: data
    };
  }
}

export const formActions = {
  add: (data) => {
    return {
      type: actionTypes.ADD_FORM_DATA,
      payload: data
    };
  },
  setIsDisabled: (data) => {
    return {
      type: actionTypes.SET_FORM_IS_DISABLED,
      payload: data
    };
  },
  setIsValidated: (data) => {
    return {
      type: actionTypes.SET_FORM_IS_VALIDATED,
      payload: data
    };
  },
  setIsSubmitted: (data) => {
    return {
      type: actionTypes.SET_FORM_IS_SUBMITTED,
      payload: data
    };
  },
  setIsLoading: (data) => {
    return {
      type: actionTypes.SET_FORM_IS_LOADING,
      payload: data
    };
  },
  setFeedback: (data) => {
    return {
      type: actionTypes.SET_FORM_FEEDBACK,
      payload: data
    };
  },
  setUpdateIsRequired: (data) => {
    return {
      type: actionTypes.SET_FORM_UPDATE_IS_REQUIRED,
      payload: data
    };
  }
}




