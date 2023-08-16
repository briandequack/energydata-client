import { useDispatch } from "react-redux";
import { actions } from "../actions/actions";
import { useNavigate } from "react-router-dom";

function UtilityComponent() {

     const dispatch = useDispatch();
     const navigate = useNavigate();

    function handleSubmit(utilities){
        dispatch(actions.setUtilityData({}));
        dispatch(actions.setUtilityData(utilities));
        navigate("/usage");
    };

    return (
      <>  
      <div class="form-container">
        <nav class="navbar navbar-expand-md p-0">
          <div class="container-fluid justify-content-center">
            <div className="navbar-nav" >        
              <button onClick={()=>{handleSubmit({'gas':true,'electricity':false});}} class="submit-button nav-item me-3 mb-md-0 mb-sm-3 mb-3" type="button">Gas</button>
              <button onClick={()=>{handleSubmit({'gas':true,'electricity':true});}} class="submit-button nav-item me-3 mb-md-0 mb-sm-3 mb-3" type="button" >Gas & Stroom</button>
              <button onClick={()=>{handleSubmit({'gas':false,'electricity':true});}} class="submit-button nav-item me-3" type="button" >Stroom</button>
            </div> 
          </div>
        </nav>
      </div>
      </>
    );
}

export { UtilityComponent };