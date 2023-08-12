import { UtilityFormComponent } from '../forms/UtilityFormComponent';
import { useSelector } from "react-redux";

function Utilities() {
    const addressData = useSelector((state) => state.addressData.data);
    return (
      <>
              <UtilityFormComponent/>
              </>
    );
  }

export default Utilities;
  