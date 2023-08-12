
function PlanComponent({ item }) {

    const number = 1559.8130042999999;

const formatter = new Intl.NumberFormat('nl-NL', {
  style: 'currency',
  currency: 'EUR'
});

    return (
        <>
        <div class="card mb-3">
            <div class="card-body">
         {item.energyDataProviderName && <h5 class="card-title">{item.energyDataProviderName}</h5>}
        {/*}
        Exclusief btw:
        {item.onPeakElecRate && <p>Normaal per kwh: {item.onPeakElecRate}</p>}
        {item.offPeakElecRate && <p>Dal per kwh:{item.offPeakElecRate}</p>}
        {item.solarProductionRate && <p>Teruglevering per kwh:{item.solarProductionRate}</p>}
        {item.elecFixedDailyCosts && <p>Vaste leveringskosten per dag:{item.elecFixedDailyCosts}</p>}
        {item.distributorElecFixedDailyCosts && <p>Netbeheerder kosten per dag:{item.distributorElecFixedDailyCosts}</p>}
        {item.gasRate && <p>Ga per m3: { item.gasRate}</p>}
        {item.gasFixedDailyCosts && <p>Vaste leveringskosten per dag:{item.gasFixedDailyCosts}</p>}
        {item.distributorElecFixedDailyCosts && <p>Netbeheerder kosten per dag:{item.distributorGasFixedDailyCosts}</p>}
        
        Inclusief btw:
        {item.onPeakElecUsage && <p>kwh: {item.onPeakElecUsage}</p>}
        {item.onPeakElecRateInclAll && <p>Normaal per kwh: {item.onPeakElecRateInclAll}</p>}
        {item.onPeakElecDailyCostsInclAll && <p>Kosten normaal per dag: {item.onPeakElecDailyCostsInclAll}</p>}
        {item.onPeakElecMonthlyCostsInclAll && <p>Kosten normaal per maand: {item.onPeakElecMonthlyCostsInclAll}</p>}
        {item.onPeakElecYearlyCostsInclAll && <p>Kosten normaal per jaar: {item.onPeakElecYearlyCostsInclAll}</p>}
        

        {item.offPeakElecUsage && <p>kwh: {item.offPeakElecUsage}</p>}
        {item.offPeakElecRateInclAll && <p>Dal per kwh:{item.offPeakElecRateInclAll}</p>}
        {item.offPeakElecDailyCostsInclAll && <p>Kosten dal per dag: {item.offPeakElecDailyCostsInclAll}</p>}
        {item.offPeakElecMonthlyCostsInclAll && <p>Kosten dal per maand: {item.offPeakElecMonthlyCostsInclAll}</p>}
        {item.offPeakElecYearlyCostsInclAll && <p>Kosten dal per jaar: {item.offPeakElecYearlyCostsInclAll}</p>}
        

        

        {item.solarProductionRateInclAll && <p>Teruglevering per kwh:{item.solarProductionRateInclAll}</p>}
        {item.solarProductionDailyProfitsInclAll && <p>Winst per dag: {item.solarProductionDailyProfitsInclAll}</p>}
        {item.solarProductionMonthlyProfitsInclAll && <p>Winst per maand: {item.solarProductionMonthlyProfitsInclAll}</p>}
   

        {item.elecFixedDailyCostsInclTax && <p>Vaste leveringskosten per dag:{item.elecFixedDailyCostsInclTax}</p>}
        {item.elecFixedMonthlyCostsInclTax && <p>Vaste leveringskosten per maand:{item.elecFixedMonthlyCostsInclTax}</p>}
        {item.elecFixedYearlyCostsInclTax && <p>Vaste leveringskosten per year:{item.elecFixedYearlyCostsInclTax}</p>}
       
       
        {item.distributorElecFixedDailyCostsInclTax && <p>Netbeheerder kosten per dag:{item.distributorElecFixedDailyCostsInclTax}</p>}
        {item.distributorElecFixedMonthlyCostsInclTax && <p>Netbeheerder kosten per maand:{item.distributorElecFixedMonthlyCostsInclTax}</p>}
        {item.distributorElecFixedYearlyCostsInclTax && <p>Netbeheerder kosten per jaar:{item.distributorElecFixedYearlyCostsInclTax}</p>}
        


        {item.elecTotalYearlyCostsInclAll && <p>Totaal per jaar:{item.elecTotalYearlyCostsInclAll}</p>}

        {item.usageGas && <p>m3: { item.usageGas}</p>}
        {item.gasRateInclAll && <p>Ga per m3: { item.gasRateInclAll}</p>}
        {item.gasDailyCostsInclAll && <p>Kosten gas per dag: {item.gasDailyCostsInclAll}</p>}
        {item.gasMonthlyCostsInclAll && <p>Kosten gas per maand: {item.gasMonthlyCostsInclAll}</p>}
        {item.gasYearlyCostsInclAll && <p>Kosten gas per jaar:{item.gasYearlyCostsInclAll}</p>}

        {item.gasFixedDailyCostsInclTax && <p>Vaste leveringskosten per dag:{item.gasFixedDailyCostsInclTax}</p>}
        {item.gasFixedMonthlyCostsInclTax && <p>Vaste leveringskosten per maand:{item.gasFixedMonthlyCostsInclTax}</p>}

        {item.distributorGasFixedDailyCostsInclTax && <p>Netbeheerder kosten per dag:{item.distributorGasFixedDailyCostsInclTax}</p>}
        {item.distributorGasFixedMonthlyCostsInclTax && <p>Netbeheerder kosten per maand:{item.distributorGasFixedMonthlyCostsInclTax}</p>}
       
        {item.gasTotalYearlyCostsInclAll && <p>Kosten gas per jaar:{item.gasTotalYearlyCostsInclAll}</p>}

        */}
       
        {item.onPeakElecRateInclAll && <p>Normaal per kwh: {item.onPeakElecRateInclAll}</p>}

    
        {item.offPeakElecRateInclAll && <p>Dal per kwh: {item.offPeakElecRateInclAll}</p>}

        {item.gasRateInclAll && <p>Per m3: {item.gasRateInclAll}</p>}


        </div>
        <ul class="list-group list-group-flush">
        {item.totalMonthlyCostsInclAll  && <li class="list-group-item">Per maand: {formatter.format(item.totalMonthlyCostsInclAll)}</li>}
        {item.totalYearlyCostsInclAll  && <li class="list-group-item">Per jaar: {formatter.format(item.totalYearlyCostsInclAll)}</li>}

        </ul>
        
        <div class="card-body">
        <a href="#" class="btn btn-primary">{item.energyDataProviderName}</a>
        </div>
        
        </div>
        </>
    );
}

export { PlanComponent };