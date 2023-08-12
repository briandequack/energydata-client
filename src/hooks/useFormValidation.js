import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function useFormValidation(config) {
    const dispatch = useDispatch();
    const redirect = useNavigate();

    const [formValidation, setFormValidation] = useState({
      actions: config.actions,
      fieldValidations: config.fieldValidations,
      validate: validate,
      reset: reset,
      submit: submit,
      navigate: navigate,
      setFeedback: setFeedback,
      setIsLoading: setIsLoading,
      disableFields: disableFields
    })

    function submit(e){
      e.preventDefault();
      setIsLoading(true);
      setIsSubmitted(true);    
      setIsDisabled(true);  
      disableFields(true)  
    }

    function validate(fields){
      for (let field of fields) { 
          if(!field.isValidated && field.isRequired && !field.isDisabled){
            for (let fieldValidation of formValidation.fieldValidations) {
                if(fieldValidation.name === field.name){
                    if(fieldValidation.isIncludedInForm){
                      setIsValidated(false);
                      setIsDisabled(true);
                      return
                    }
                }
            }          
          }
        }     
        setIsValidated(true);
        setIsDisabled(false); 
    }

    function reset(){
      setIsValidated(false);
      setIsSubmitted(false);      
      setIsDisabled(true); 
      setIsLoading(false);
      setUpdateIsRequired(false);
      resetFields();
    }

    function disableFields(bool){
      for (let fieldValidation of formValidation.fieldValidations) {
        if(fieldValidation.isIncludedInForm){
          fieldValidation.setIsDisabled(bool);
          fieldValidation.setToggleIsDisabled(bool);
        }
      }   
    }

    function resetFields(){
      for (let fieldValidation of formValidation.fieldValidations) {
        if(fieldValidation.isIncludedInForm){
          fieldValidation.reset();
        }
      } 
    }
    
    function setIsValidated(bool){      
      dispatch(formValidation.actions.setIsValidated({name:config.form.name, isValidated:bool}));
    }

    function setIsDisabled(bool){ 
      dispatch(formValidation.actions.setIsDisabled({name:config.form.name, isDisabled:bool}));
    }

    function setIsLoading(bool){
      dispatch(formValidation.actions.setIsLoading({name:config.form.name, isLoading:bool}));
    }

    function setIsSubmitted(bool){
      dispatch(formValidation.actions.setIsSubmitted({name:config.form.name, isSubmitted:bool}));
    }

    function setFeedback(string){
      dispatch(formValidation.actions.setFeedback({name:config.form.name, feedback:string}));
    }

    function setUpdateIsRequired(bool){
      dispatch(formValidation.actions.setUpdateIsRequired({name:config.form.name, updateIsRequired:bool}));
    }

    function navigate(url) {
      redirect(url);
  }

    return {formValidation}
  }