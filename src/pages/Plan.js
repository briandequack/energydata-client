import { PlanPagerComponent } from '../components/PlanPagerComponent';
import { useSelector } from 'react-redux';

function Plan() {
  const planData = useSelector((state) => state.planData.data);
  const planRequest = useSelector((state) => state.planData.request);
    return (
      <>
      <div className="main-container">
        <div className="centered-content-row">
          <div className="col-12 col-lg-12 col-md-12">
            <div className="content-spacing-row">
              <div className="col-12">
                <div className="page-title">
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
  