import { AddressDataFormComponent } from '../forms/AddressDataFormComponent';

function Home() {
    return (
      <>
      <div class="main-container">
        <div class="centered-content-row">
          <div class="col-10 col-lg-8 col-md-8">
            <div class="content-spacing-row">
              <div class="col-12">
                <div class="page-title">
                  Vind de voordeligste energieleverancier
                </div>
              </div>
              <AddressDataFormComponent />
            </div>
          </div> 
        </div>
      </div> 
      </>
    );
  }

export default Home;
  