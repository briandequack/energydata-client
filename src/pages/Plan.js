import { PlanPagerComponent } from '../Components/PlanPagerComponent';
import { useSelector } from 'react-redux';

function Plan() {
  const planData = useSelector((state) => state.planData.data);
  const planRequest = useSelector((state) => state.planData.request);
    return (
      <div class="container">
        <div class="row  d-flex justify-content-center py-5">

       
        <div class="col-12">
        <div class="fs-1 fw-semibold text-center  pb-3">
            Voordeligste contracten

          
        </div>
        </div>

          <PlanPagerComponent/ >
        </div>
      </div>
    );
  }

export default Plan;
  