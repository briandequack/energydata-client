import { formatPrice } from '../utils/regexUtils';
import { useSelector } from "react-redux";

function PlanComponent({ item, contractType }) {

  const addressData = useSelector((state) => state.addressData.data);

    return (
        <>
        <div className="p-4">
          <div className="card mb-3 border-dark-subtle">
            <div className="card-body">
              <img 
                src={`${process.env.PUBLIC_URL}/${item.energyDataProviderName.toLowerCase()}-logo.png`}
                alt={item.energyDataProviderName}
                style={{ height: '200px', padding: '30px'}}
              />
                {item.energyDataProviderName && <h5 className="card-title text-center">{contractType}</h5>}
            </div>

            <div className="accordion accordion-flush border-top border-dark-subtle" id={`${item.energyDataProviderName}-${contractType[0]}-accordion`}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={`${item.energyDataProviderName}-${contractType[0]}-heading`}>
              <button className={`${item.energyDataProviderName.toLowerCase()} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target={`#${item.energyDataProviderName}-${contractType[0]}-collapse`} aria-expanded="false" aria-controls={`${item.energyDataProviderName}-${contractType[0]}-collapse`}>
                Tarieven
              </button>
            </h2>
 
            <div id={`${item.energyDataProviderName}-${contractType[0]}-collapse`}  className={`${item.energyDataProviderName.toLowerCase()} accordion-collapse collapse`} aria-labelledby={`${item.energyDataProviderName}-${contractType[0]}-heading`} data-bs-parent={`#${item.energyDataProviderName}-${contractType[0]}-accordion`}>
              <div className="accordion-body">

                {item.onPeakElecRateInclAll && <h6>Stroom(jaarlijks)</h6>}
                {item.onPeakElecRateInclAll && <small>Normaal: {item.onPeakElecUsage} kwh * {formatPrice(item.onPeakElecRateInclAll,6)} = {formatPrice(item.onPeakElecYearlyCostsInclAll)}<br></br></small>}
                {item.offPeakElecRateInclAll &&<small>Dal: {item.offPeakElecUsage} kwh * {formatPrice(item.offPeakElecRateInclAll,6)} = {formatPrice(item.offPeakElecYearlyCostsInclAll)}<br></br></small>}
                {item.elecFixedYearlyCostsInclTax &&<small>Vaste levering: 12 * {formatPrice(item.elecFixedMonthlyCostsInclTax,6)} = {formatPrice(item.elecFixedYearlyCostsInclTax)}<br></br></small>}
                {item.distributorElecFixedYearlyCostsInclTax &&<small>Netbeheerder({addressData.distributor.distributorName}): 12 * {formatPrice(item.distributorElecFixedMonthlyCostsInclTax)} = {formatPrice(item.distributorElecFixedYearlyCostsInclTax)}<br></br></small>}
                {item.elecTotalYearlyCostsInclAll &&<small>Totaal: {formatPrice(item.elecTotalYearlyCostsInclAll)}<br></br></small>}

                
                {item.gasRateInclAll && <h6 className="mt-2">Gas(jaarlijks)</h6>}
                {item.gasRateInclAll &&<small>Normaal: {item.usageGas} m3 * {formatPrice(item.gasRateInclAll,6)} = {formatPrice(item.gasYearlyCostsInclAll)}<br></br></small>}
                {item.gasFixedYearlyCostsInclTax &&<small>Vaste levering: 12 * {formatPrice(item.gasFixedMonthlyCostsInclTax,6)} = {formatPrice(item.gasFixedYearlyCostsInclTax)}<br></br></small>}
                {item.distributorGasFixedYearlyCostsInclTax &&<small>Netbeheerder({addressData.distributor.distributorName}): 12 * {formatPrice(item.distributorGasFixedMonthlyCostsInclTax)} = {formatPrice(item.distributorGasFixedYearlyCostsInclTax)}<br></br></small>}
                {item.gasTotalYearlyCostsInclAll &&<small>Totaal: {formatPrice(item.gasTotalYearlyCostsInclAll)}<br></br></small>}

                <em><br></br>Berekening is inclusief btw, prijsplafond en teruggave energiebelasting.</em><br></br>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-group list-group-flush">      
          {item.totalMonthlyCostsInclAll  && 
            <li className="list-group-item ps-3 lead">
            Per maand: {formatPrice(item.totalMonthlyCostsInclAll)}<br></br>
            Per jaar: {formatPrice(item.totalYearlyCostsInclAll)}
          </li>}
        </ul>
      </div>
    </div>
    </>
    );
}

export { PlanComponent };