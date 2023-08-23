import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { formActions, fieldActions, actions } from "../actions/actions";
import { planService } from '../services/index';
import { useFormValidation, useFieldValidation } from '../hooks/index';
import { unitsConfig } from '../validations/index';
import { selectors } from '../reducers/index';

function UsageDataFormComponent() {
    
    const utilityData = useSelector((state) => state.utilityData.data);
    const addressData = useSelector((state) => state.addressData.data);

    const dispatch = useDispatch();

    dispatch(formActions.add({name:'usageDataForm'}));
    const formData = useSelector((state) => state.formData.data);

    dispatch(fieldActions.add({name:'onPeakElectricityUsage', isRequired: true, isDisabled: false}));
    dispatch(fieldActions.add({name:'offPeakElectricityUsage', isRequired: true, isDisabled: true}));
    dispatch(fieldActions.add({name:'solarProduction', isRequired: true, isDisabled: true}));
    dispatch(fieldActions.add({name:'gasUsage', isRequired: true, isDisabled: false}));

    const storedFields = useSelector((state) => state.fieldData.data);

    const onPeakElectricityUsageField = selectors.selectByName({name:'onPeakElectricityUsage', data: storedFields});
    const { fieldValidation:onPeakElectricityUsageValidation } = useFieldValidation({
      field: onPeakElectricityUsageField, 
      isIncludedInForm: utilityData.electricity,
      actions:fieldActions, 
      validator:unitsConfig.kwh
    });

    const offPeakElectricityUsageField = selectors.selectByName({name:'offPeakElectricityUsage', data: storedFields});
    const { fieldValidation:offPeakElectricityUsageValidation } = useFieldValidation({
      field: offPeakElectricityUsageField, 
      isIncludedInForm: utilityData.electricity,
      actions:fieldActions, 
      validator:unitsConfig.kwh
    });

    const solarProductionField = selectors.selectByName({name:'solarProduction', data: storedFields});
    const { fieldValidation:solarProductionValidation } = useFieldValidation({
      field: solarProductionField, 
      isIncludedInForm: utilityData.electricity,
      actions:fieldActions, 
      validator:unitsConfig.kwh
    });

    const gasUsageField = selectors.selectByName({name:'gasUsage', data: storedFields}); 
    const { fieldValidation:gasUsageValidation } = useFieldValidation({
      field: gasUsageField, 
      isIncludedInForm: utilityData.gas,
      actions:fieldActions, 
      validator:unitsConfig.m3
    });
 
    const usageDataForm = selectors.selectByName({name:'usageDataForm', data: formData});
       const { formValidation:usageDataValidation } = useFormValidation({
        form: usageDataForm,
        actions: formActions,
        fieldValidations: [onPeakElectricityUsageValidation, offPeakElectricityUsageValidation, solarProductionValidation, gasUsageValidation]
    });

    useEffect(() => {
      usageDataValidation.unlock();
    },[])

    useEffect(() => {
        if (!usageDataForm.isSubmitted) {
          usageDataValidation.validate(
            [onPeakElectricityUsageField, offPeakElectricityUsageField, solarProductionField, gasUsageField]);
        } else {
          if(usageDataForm.isLoading){
              const request = {
                ...(onPeakElectricityUsageValidation.isIncludedInForm && onPeakElectricityUsageField.isValidated && { ELECTRICTY_USAGE_ON_PEAK_IN_KWH: onPeakElectricityUsageField.input }),
                ...(offPeakElectricityUsageValidation.isIncludedInForm && offPeakElectricityUsageField.isValidated &&  { ELECTRICTY_USAGE_OFF_PEAK_IN_KWH: offPeakElectricityUsageField.input }),
                ...(solarProductionValidation.isIncludedInForm && solarProductionField.isValidated &&  { ELECTRICTY_PRODUCTION_IN_KWH: solarProductionField.input }),
                ...(gasUsageValidation.isIncludedInForm && gasUsageField.isValidated && { GAS_USAGE_IN_M3: gasUsageField.input }),      
                'DISTRIBUTOR' : addressData.distributor.distributorName,
                'PAGE_NUMBER': 0,
                'PAGE_SIZE' : 1
              }
              planService.getPlan(request).then(data => {
                  dispatch(actions.setPlanRequest(null));
                  dispatch(actions.setPlanData(null));
                  dispatch(actions.setPlanData(data));
                  dispatch(actions.setPlanRequest(request));
                  usageDataValidation.setIsLoading(false);
                  usageDataValidation.navigate("/plan");
              }).catch(error => {
                usageDataValidation.reset();
              });
              }
        }
      }, [onPeakElectricityUsageField, offPeakElectricityUsageField, solarProductionField, gasUsageField]);


    return (
      <>      
      <div className="form-container">
      <form className="row g-3">
        {onPeakElectricityUsageValidation.isIncludedInForm &&
        <div className="col-12 col-md-12">
          <div className="input-group">
            <div className="input-group-text">       
              Stroom
            </div>
            <input type="text" onChange={(e)=>{onPeakElectricityUsageValidation.processInput(e);}} className={`form-control ${onPeakElectricityUsageField.isValidatedClass}`} disabled={onPeakElectricityUsageField.isDisabled} value={onPeakElectricityUsageField.input} aria-label="Text input with checkbox" placeholder={`verbruik`}/>
            <span className="input-group-text rounded-end-2">.00 {onPeakElectricityUsageValidation.validator.identifier}</span> 
            <div className="invalid-tooltip">
              {`Vul uw normale verbruik in ${onPeakElectricityUsageValidation.validator.identifier} in, bijvoorbeeld: ${onPeakElectricityUsageValidation.validator.example}`} 
            </div>
          </div>
        </div>  
        }

        {offPeakElectricityUsageValidation.isIncludedInForm &&
        <div className="col-12 col-md-6">
          <div className="input-group">
            <div className="input-group-text">     
            <input onChange={()=>{offPeakElectricityUsageValidation.setIsDisabledAndClear(!offPeakElectricityUsageField.isDisabled);}} checked={offPeakElectricityUsageField.isToggled} disabled={offPeakElectricityUsageField.toggleIsDisabled} className="form-check-input mt-0 me-2" type="checkbox"/>             
            Dal
            </div>
            <input type="text" onChange={(e)=>{offPeakElectricityUsageValidation.processInput(e);}} className={`form-control ${offPeakElectricityUsageField.isValidatedClass}`} disabled={offPeakElectricityUsageField.isDisabled} value={offPeakElectricityUsageField.input} placeholder={`verbruik`}/>
            <span className="input-group-text rounded-end-2">.00 {offPeakElectricityUsageValidation.validator.identifier}</span> 
            <div className="invalid-tooltip">
              {`Vul uw dal verbruik in ${offPeakElectricityUsageValidation.validator.identifier} in, voorbeeld: ${offPeakElectricityUsageValidation.validator.example}`}  
            </div>
          </div>
        </div>
        }

        {solarProductionValidation.isIncludedInForm &&
        <div className="col-12 col-md-6">
          <div className="input-group">
            <div className="input-group-text">       
            <input onChange={()=>{solarProductionValidation.setIsDisabledAndClear(!solarProductionField.isDisabled);}} checked={solarProductionField.isToggled} disabled={solarProductionField.toggleIsDisabled} className="form-check-input mt-0 me-2" type="checkbox"/>             
            Zon
            </div>
            <input type="text" onChange={(e)=>{solarProductionValidation.processInput(e);}} className={`form-control ${solarProductionField.isValidatedClass}`} disabled={solarProductionField.isDisabled} value={solarProductionField.input} placeholder={`productie`}/>
            <span className="input-group-text rounded-end-2">.00 {solarProductionValidation.validator.identifier}</span> 
            <div className="invalid-tooltip">
              {`Vul uw zon productie in ${solarProductionValidation.validator.identifier} in, voorbeeld: ${solarProductionValidation.validator.example}`} 
            </div>
          </div>
        </div>
        }
        
        {gasUsageValidation.isIncludedInForm &&
        <div className="col-12 col-md-12">
          <div className="input-group">
            <div className="input-group-text">       
              Gas
            </div>
            <input type="text" onChange={(e)=>{gasUsageValidation.processInput(e);}} className={`form-control ${gasUsageField.isValidatedClass}`} disabled={gasUsageField.isDisabled} value={gasUsageField.input} aria-label="Text input with checkbox" placeholder={`verbruik`}/>
            <span className="input-group-text rounded-end-2">.00 {gasUsageValidation.validator.identifier}</span> 
            <div className="invalid-tooltip">
              {`Vul uw gas verbruik in ${gasUsageValidation.validator.identifier} in, voorbeeld: ${gasUsageValidation.validator.example}`} 
            </div>
          </div>
        </div> 
        }

        <div className="col-12">
          <div className="position-relative">
            <button type="submit" 
              onClick={(e)=>{usageDataValidation.submit(e)}} disabled={ usageDataForm.isDisabled } className="submit-button btn-as-block">
              {usageDataForm.isLoading &&
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              }
              Verder
            </button>
          </div>
        </div>
      </form>
      </div> 
      </>
    );
}

export { UsageDataFormComponent };