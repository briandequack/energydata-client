import { combineReducers } from '@reduxjs/toolkit';
import addressDataReducer from './addressDataReducer';
import utilityDataReducer from './utilityDataReducer';
import planDataReducer from './planDataReducer';
import fieldDataReducer from './fieldDataReducer';
import formDataReducer from './formDataReducer';

const rootReducer = combineReducers({
  addressData: addressDataReducer,
  utilityData: utilityDataReducer,
  planData: planDataReducer,
  fieldData: fieldDataReducer,
  formData: formDataReducer,
});

export default rootReducer;
