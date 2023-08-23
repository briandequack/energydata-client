import { UsageDataFormComponent } from '../forms/UsageDataFormComponent';

function Usage() {
    return (
      <>
      <div className="main-container">
        <div className="centered-content-row">
          <div className="col-10 col-lg-8 col-md-8">
            <div className="content-spacing-row">
              <div className="col-12">
                <div className="page-title">
                  Vul uw verbruik in
                </div>
              </div>
              <UsageDataFormComponent />
            </div>
          </div> 
        </div>
      </div> 
      </>
    );
  }

export default Usage;
  