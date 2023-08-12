import { UsageDataFormComponent } from '../forms/UsageDataFormComponent';
import { useSelector } from "react-redux";

function Usage() {

    const addressData = useSelector((state) => state.addressData.data);
    return (
      <>
              <UsageDataFormComponent />
              </>
    );
  }

export default Usage;
  