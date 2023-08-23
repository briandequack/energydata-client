import { AddressDataFormComponent } from '../forms/AddressDataFormComponent';

function Home() {
    return (
      <>
      <div className="main-container">
        <div className="centered-content-row">
          <div className="col-10 col-lg-8 col-md-8">
            <div className="content-spacing-row">
              <div className="col-12">
                <div className="page-title">
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
  