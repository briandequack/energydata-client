import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function useFieldValidation(config) {
  const dispatch = useDispatch();
  
  const [fieldValidation, setFieldValidation] = useState({
    name: config.field.name,
    isIncludedInForm: config.isIncludedInForm,
    actions: config.actions,
    validator: config.validator,
    processInput: processInput,
    reset: reset,
    setInput: setInput,
    setIsDisabled: setIsDisabled,
    setIsDisabledAndClear: setIsDisabledAndClear,
    setIsValidated: setIsValidated,
    setToggleIsDisabled: setToggleIsDisabled,
    setIsValidatedClass: setIsValidatedClass
  })


    function reset(){
        setInput('');
        setIsDisabled(config.field.initIsDisabled);
        setIsToggled(!config.field.initIsDisabled);
        setIsValidated(false);
        setIsValidatedClass('');
        setToggleIsDisabled(false);
    }

    function setInput(input){
      dispatch(fieldValidation.actions.setInput({name:fieldValidation.name, input:input}));
      
    }

    function setIsValidated(bool){
      dispatch(fieldValidation.actions.setIsValidated({name:fieldValidation.name, isValidated:bool}));
      if(bool){
        setIsValidatedClass('is-valid');
      } else {
        setIsValidatedClass('is-invalid');
      } 
    }

    function setIsDisabled(bool){
      dispatch(fieldValidation.actions.setIsDisabled({name:fieldValidation.name, isDisabled:bool}));  
    }

    function setIsToggled(bool){
      dispatch(fieldValidation.actions.setIsToggled({name:fieldValidation.name, isToggled:bool}));
    }

    function setToggleIsDisabled(bool){
      dispatch(fieldValidation.actions.setToggleIsDisabled({name:fieldValidation.name, toggleIsDisabled:bool}));
    }

    function setIsDisabledAndClear(bool){
      setInput('');
      setIsValidated(false);
      setIsValidatedClass('');
      setIsDisabled(bool);   
      setIsToggled(!bool);    
    }

    function setIsValidatedClass(string){
        dispatch(fieldValidation.actions.setIsValidatedClass({name:fieldValidation.name, isValidatedClass:string}));
    }


    function processInput(e) {
      const value = e.target.value;
      if (fieldValidation.validator.validate(value)) {
        setInput(fieldValidation.validator.format(value));
        setIsValidated(true);
      } else {
        setInput(value);
        setIsValidated(false);
      } 
    }
     
    return { 
      fieldValidation
      }
  }
  