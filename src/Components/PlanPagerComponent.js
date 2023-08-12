import { useSelector } from 'react-redux';
import { PlanComponent } from './PlanComponent';
import { json } from 'react-router-dom';

function PlanPagerComponent() {
    const planData = useSelector((state) => state.planData.data);
    const planRequest = useSelector((state) => state.planData.request);
    return (
        <>
        <div class="row">

    
        <div class="col-4">   
   
            <h5 >Variabel</h5>   
            {planData.OPEN_ENDED.map((item, index) => (
                <>         
                    <PlanComponent item={item}/>  
                </>               
            ))}   
         </div>   

         <div class="col-4">   
            <h5 >1 jaar vast</h5>        
            {planData.ONE_YEAR.map((item, index) => (
                <>         
                    <PlanComponent item={item}/>  
                </>               
            ))}   
         </div>  

         <div class="col-4">   
         <h5 >3 jaar vast</h5>   
            {planData.THREE_YEARS.map((item, index) => (
                <>         
                    <PlanComponent item={item}/>  
                </>               
            ))}   
         </div>    




            
 

   
           
        </div>
        </>
    );
}

export { PlanPagerComponent };