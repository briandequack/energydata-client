import { PlanPagerComponent } from '../components/PlanPagerComponent';
import { useSelector } from 'react-redux';

function Plan() {
  const planData = useSelector((state) => state.planData.data);
  const planRequest = useSelector((state) => state.planData.request);
    return (
      <>
      <div class="main-container">
        <div class="centered-content-row">
          <div class="col-10 col-lg-8 col-md-8">
            <div class="content-spacing-row">
              <div class="col-12">
                <div class="page-title">
                  Contracten
                </div>
              </div>
              <PlanPagerComponent />
            </div>
          </div> 
        </div>
      </div> 
      </>
    );
  }

export default Plan;
  