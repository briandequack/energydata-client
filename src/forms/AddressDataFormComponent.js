import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { formActions, fieldActions, actions } from "../actions/actions";
import { addressDataService } from "../services/index";
import { useFormValidation, useFieldValidation } from '../hooks/index';
import { selectors } from '../reducers/index';
import { nlConfig } from '../validations/index';
import { useSelector } from 'react-redux';

function AddressDataFormComponent() {
    const addressData = useSelector((state) => state.addressData.data);

    const dispatch = useDispatch();

    dispatch(formActions.add({name:'addresDataFormValidation'}));

    const formData = useSelector((state) => state.formData.data);

    dispatch(fieldActions.add({name:'zipCode', isRequired: true, isDisabled: false}));
    dispatch(fieldActions.add({name:'houseNumber', isRequired: true, isDisabled: false}));
    dispatch(fieldActions.add({name:'houseNumberSuffix', isRequired: true, isDisabled: true}));

    const fieldData = useSelector((state) => state.fieldData.data);

    const zipCodeField = selectors.selectByName({name:'zipCode', data: fieldData});
    const { fieldValidation:zipCodeValidation } = useFieldValidation({
      field: zipCodeField, 
      isIncludedInForm: true,
      actions:fieldActions,
      validator:nlConfig.zipCode
    });
    const houseNumberField = selectors.selectByName({name:'houseNumber', data: fieldData});
    const { fieldValidation:houseNumberValidation } = useFieldValidation({
      field: houseNumberField, 
      isIncludedInForm: true,
      actions:fieldActions, 
      validator:nlConfig.houseNumber
    });
    const houseNumberSuffixField = selectors.selectByName({name:'houseNumberSuffix', data: fieldData})
    const { fieldValidation:houseNumberSuffixValidation } = useFieldValidation({
      field: houseNumberSuffixField, 
      isIncludedInForm: true,
      actions:fieldActions,   
      validator:nlConfig.houseNumberSuffix});

    const addressDataForm = selectors.selectByName({name:'addresDataFormValidation', data: formData});
    const { formValidation:addresDataFormValidation } = useFormValidation({
      form: addressDataForm,
      actions: formActions,
      fieldValidations: [zipCodeValidation, houseNumberValidation, houseNumberSuffixValidation]
    });

    useEffect(() => {
        if (!addressDataForm.isSubmitted) {
          addresDataFormValidation.validate([zipCodeField, houseNumberField, houseNumberSuffixField]);
        } else {
            if(addressDataForm.isLoading){
              console.log('call api')
            addressDataService.getAddresInfo(zipCodeField.input, houseNumberField.input, houseNumberSuffixField.input)
            .then(data => { 
                  addresDataFormValidation.setIsLoading(false);
                  addresDataFormValidation.setFeedback('');
                  dispatch(actions.setAddressData(data));           
                  addresDataFormValidation.navigate("/utilities");
     
            })
            .catch(error => {
              if (error.status === 404) {
                    addresDataFormValidation.setFeedback(`Ongeldige postcode ${zipCodeField.input}. Gebruik een geldige postcode in.`);      
              } else  {
                addresDataFormValidation.setFeedback(error.message);  
              }
              addresDataFormValidation.reset();  
            }); 
          }
        }
      }, [zipCodeField, houseNumberField, houseNumberSuffixField]);

    return (
      <>     

<div class="container vh-custom">
        <div class="row h-100 justify-content-center align-items-center ">


        <div class="col-10 col-lg-8 col-md-8">

        <div class="row">
        <div class="col-12">
          <div class="fs-1 fw-semibold text-center  pb-3">
          Vind direct de voordeligste energieleverancier

          
        </div>
        </div>
        
          <div class="card bg-white p-4 col-12">
            
            <form class="row g-3">

              {addressData !== null ?
              <>
              <div className="col-12 col-md-10">
                <div class="input-group">
                  <div class="input-group-text">       
                    Adres
                  </div>
                  <input type="text" className={`form-control rounded-end-2 is-valid`} disabled={true} />
                </div>
              </div>

              <div className="col-12 col-md-2 position-relative">
                <button type="submit" 
                onClick={()=>{ dispatch(actions.setAddressData(null)); addresDataFormValidation.reset() }} disabled={false} className="btn btn-primary btn-as-block">
                Wijzig
                </button>
              </div>
              </>
              :
              <>

              <div className="col-12 col-lg-4 col-md-12">
                <div class="input-group">
                  <div class="input-group-text">       
                    Postcode
                  </div>
                  <input type="text" onChange={(e)=>{zipCodeValidation.processInput(e);}} className={`form-control rounded-end-2 ${zipCodeField.isValidatedClass}`} disabled={zipCodeField.isDisabled} value={zipCodeField.input} placeholder="1234AB"/>
                  <div className="invalid-tooltip">
                    {`Vul uw ${zipCodeValidation.validator.identifier} in, voorbeeld: ${zipCodeValidation.validator.example}`} 
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-6">
                <div class="input-group">
                  <div class="input-group-text">       
                    Nr.
                  </div>
                  <input type="text" onChange={(e)=>{houseNumberValidation.processInput(e);}} className={`form-control rounded-end-2 ${houseNumberField.isValidatedClass}`} disabled={houseNumberField.isDisabled} value={houseNumberField.input} placeholder="1"/>
                  <div className="invalid-tooltip">
                    {`Vul uw ${houseNumberValidation.validator.identifier} in, voorbeeld: ${houseNumberValidation.validator.example}`} 
                  </div>
                </div>
              </div>
              
              <div className="col-12 col-lg-3 col-md-6">
                <div class="input-group">
                  <div class="input-group-text">       
                  <input onChange={()=>{houseNumberSuffixValidation.setIsDisabledAndClear(!houseNumberSuffixField.isDisabled);}} checked={houseNumberSuffixField.isToggled} disabled={houseNumberSuffixField.toggleIsDisabled} className="form-check-input mt-0 me-2" type="checkbox"/>
                    Toev.
                  </div>
                  <input type="text" onChange={(e)=>{houseNumberSuffixValidation.processInput(e);}} className={`form-control rounded-end-2 ${houseNumberSuffixField.isValidatedClass}`} disabled={houseNumberSuffixField.isDisabled} value={houseNumberSuffixField.input} placeholder="A"/>
                  <div className="invalid-tooltip">
                    {`Vul uw ${houseNumberSuffixValidation.validator.identifier} in, voorbeeld: ${houseNumberSuffixValidation.validator.example}`} 
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-2 position-relative">
                <button type="submit" 
                onClick={(e)=>{addresDataFormValidation.submit(e)}} disabled={ addressDataForm.isDisabled } className="btn btn-primary btn-as-block">
                {addressDataForm.isLoading &&
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                }
                Verder
                </button>
              </div>
              </>
              } 
               
            </form>

          </div>
          </div>
          
          </div>
          </div>
</div>


      </>
    );
}

export { AddressDataFormComponent };