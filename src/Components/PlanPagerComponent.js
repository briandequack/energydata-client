import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlanComponent } from './PlanComponent';
import { useFormValidation, useFieldValidation } from '../hooks/index';
import { selectors } from '../reducers/index';
import { json } from 'react-router-dom';
import { formActions, fieldActions, actions } from "../actions/actions";
import { planService } from '../services/index';
import { unitsConfig } from '../validations/index';

function PlanPagerComponent() {

    const planData = useSelector((state) => state.planData.data);
    const planRequest = useSelector((state) => state.planData.request);

    const dispatch = useDispatch();

    dispatch(formActions.add({name:'planDataForm'}));
    const formData = useSelector((state) => state.formData.data);

    dispatch(fieldActions.add({name:'pageNum', isRequired: false, isDisabled: false, input:0}));
    const storedFields = useSelector((state) => state.fieldData.data);

    const pageNumField = selectors.selectByName({name:'pageNum', data: storedFields});
    const { fieldValidation:pageNumValidation } = useFieldValidation({
      field: pageNumField, 
      isIncludedInForm: true,
      actions:fieldActions, 
      validator:unitsConfig.kwh
    });

    const planDataForm = selectors.selectByName({name:'planDataForm', data: formData});
    const { formValidation:planDataValidation } = useFormValidation({
     form: planDataForm,
     actions: formActions,
     fieldValidations: [pageNumValidation]
    });

    
    useEffect(() => {
        if (!planDataForm.isSubmitted) {
          planDataValidation.validate(
            [pageNumField]);
        } else {
          if(planDataForm.isLoading){ 
             const request = {
                ...planRequest
              }
              if(planDataValidation.clickedButtonLabel === 'Volgende'){
                request.PAGE_NUMBER ++;     
              } else if(planDataValidation.clickedButtonLabel === 'Vorige'){
                request.PAGE_NUMBER --;
              }               
              planService.getPlan(request).then(data => {
                if(data.OPEN_ENDED.length === 0 && data.ONE_YEAR.length === 0 && data.THREE_YEARS.length === 0){
                  planDataValidation.setIsNext(false);
                } else {
                  planDataValidation.setIsNext(true);
                  dispatch(actions.setPlanRequest(request));
                  dispatch(actions.setPlanData(data));
                  if(request.PAGE_NUMBER !== 0){
                    planDataValidation.setIsPrev(true);
                  } else {
                    planDataValidation.setIsPrev(false);
                  }            
                }              
                planDataValidation.reset();
              }).catch(error => {
                planDataValidation.reset();
              });
            }
        }
      }, [pageNumField]);

    return (
        <>
          <div className="col-sm-12 col-md-6 col-lg-4">   
            {planData.OPEN_ENDED.map((item) => (
              <>         
              <PlanComponent item={item} contractType={'Variabel'}/>  
              </>               
            ))}   
          </div>   
          <div className="col-sm-12 col-md-6 col-lg-4">  
              {planData.ONE_YEAR.map((item) => (
                  <>         
                      <PlanComponent item={item} contractType={'1 jaar vast'}/>  
                  </>               
              ))}   
          </div>  
          <div className="col-sm-12 col-md-6 col-lg-4">     
            {planData.THREE_YEARS.map((item) => (
              <>         
                  <PlanComponent item={item} contractType={'3 jaar vast'}/>  
              </>               
            ))}   
         </div>     
      

        <div className="text-center mb-3">      
        {planDataForm.isPrev &&
          <button type="submit" 
            onClick={(e)=>{planDataValidation.submit(e)}} disabled={ planDataForm.isDisabled } className="submit-button btn-as-block me-2">
            {planDataForm.isLoading && planDataValidation.clickedButtonLabel === 'Vorige' &&
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            }
            Vorige
          </button>
        }
        {planDataForm.isNext &&     
        <button type="submit" 
          onClick={(e)=>{planDataValidation.submit(e)}} disabled={ planDataForm.isDisabled } className="submit-button btn-as-block">
          {planDataForm.isLoading && planDataValidation.clickedButtonLabel === 'Volgende' &&
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          }
          Volgende
        </button>
        } 
      </div>
      </>
    );
}

export { PlanPagerComponent };