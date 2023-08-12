import './main.scss';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

//Pages
import  { Home, Utilities, Usage, Plan, NotFound }  from './pages/index';

//Layouts
import RootLayout from './layouts/RootLayout';

function App() {
  const addressData = useSelector((state) => state.addressData.data);
  const utilityData = useSelector((state) => state.utilityData.data);
  const usageData = useSelector((state) => state.utilityData.data);
 
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>   
      <Route index element={<Home />} />
      <Route path="/utilities" element={addressData === null ? <Navigate to="/"/> : <Utilities /> } />

      <Route path="/usage" element=
        {addressData === null ? (
          <Navigate to="/" />
          ) : (
            utilityData === null ? (
              <Navigate to="/utilities" />
            ) : (
              <Usage />
            )
          )
        }/>     

      <Route path="/plan" element=
        {addressData === null ? (
          <Navigate to="/" />
          ) : (
            utilityData === null ? (
              <Navigate to="/utilities" />
            ) : (
              usageData === null ? (
                <Navigate to="/usage" />
              ) : (
                <Plan />
              )
            )
          )
        }/> 
        
      <Route path="/404" element={<NotFound/>}/>
      <Route path="*" element={<Navigate to='/404'/>} />
    </Route>
  )
)

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
