import { UtilityComponent } from '../components/UtilityComponent';

function Utilities() {
    return (
      <>
      <div className="main-container">
        <div className="centered-content-row">
          <div className="col-10 col-lg-8 col-md-8">
            <div className="content-spacing-row">
              <div className="col-12">
                <div className="page-title">
                  Kies uw aansluiting(en)
                </div>
              </div>
              <UtilityComponent />
            </div>
          </div> 
        </div>
      </div> 
      </>
    );
  }

export default Utilities;
  