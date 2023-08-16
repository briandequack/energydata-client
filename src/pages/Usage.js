import { UsageDataFormComponent } from '../forms/UsageDataFormComponent';

function Usage() {
    return (
      <>
      <div class="main-container">
        <div class="centered-content-row">
          <div class="col-10 col-lg-8 col-md-8">
            <div class="content-spacing-row">
              <div class="col-12">
                <div class="page-title">
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
  