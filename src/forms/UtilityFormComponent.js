import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { formActions, actions } from "../actions/actions";
import { useNavigate } from "react-router-dom";
import { selectors } from '../reducers/index';

function UtilityFormComponent() {

     const dispatch = useDispatch();
     const navigate = useNavigate();
     const formData = useSelector((state) => state.formData.data);

    function handleSubmit(utilities){
        const usageDataForm = selectors.selectByName({name:'usageDataForm', data: formData});
        if(usageDataForm !== null){
            dispatch(formActions.setUpdateIsRequired({name:'usageDataForm', updateIsRequired:true}));
        }
        dispatch(actions.setUtilityData({}));
        dispatch(actions.setUtilityData(utilities));
        navigate("/usage");
    };

    return (
      <>
      <div class="container vh-custom">
        <div class="row h-100 justify-content-center align-items-center ">


        <div class="col-10 col-lg-8 col-md-8">

        <div class="row">
        <div class="col-12">
        <div class="fs-1 fw-semibold text-center  pb-3">
            Kies uw aansluiting(en)

          
        </div>
        </div>
        
        <div class="card bg-white p-4 col-12">



        <nav class="navbar navbar-expand-md">
        <div class="container-fluid justify-content-center">
            <div className="navbar-nav" >        
            <button onClick={()=>{handleSubmit({'gas':true,'electricity':false});}} class="btn btn-primary nav-item me-2" type="button">Gas</button>
            <button onClick={()=>{handleSubmit({'gas':true,'electricity':true});}} class="btn btn-primary nav-item me-2" type="button" >Gas & Stroom</button>
            <button onClick={()=>{handleSubmit({'gas':false,'electricity':true});}} class="btn btn-primary nav-item me-2" type="button" >Stroom</button>
            </div> 
        </div>
        </nav>

        </div></div></div></div></div>
      </>
    );
}

export { UtilityFormComponent };