import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RootLayout(){
  const addressData = useSelector((state) => state.addressData.data);
  const utilityData = useSelector((state) => state.utilityData.data);
  const planData = useSelector((state) => state.planData.data);

    return (
      <div className="root-layout">
        <header>
          <nav className="navbar navbar-expand-lg bg-primary p-4" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand fw-bold" href="#">Enerwijs</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                  </li>
                
                  {addressData !== null && (
                    <li className="nav-item">
                      <NavLink to="/utilities" className="nav-link">Aansluiting</NavLink>
                    </li>
                  )}
           
                  {addressData !== null && utilityData !== null && (
                  <li className="nav-item">
                    <NavLink to="/usage" className="nav-link">Verbruik</NavLink>
                  </li>
                  )}

                  {addressData !== null && utilityData !== null && planData !== null && (
                  <li className="nav-item">
                    <NavLink to="/plan" className="nav-link">Plan</NavLink>
                  </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <div className=" bg-white">
           <Outlet/> 
          </div>
        </main>
      </div>
    )
}
