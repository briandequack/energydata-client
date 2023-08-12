import React, { useState } from 'react';

function ElectricityComponent() {
    const [checkOffPeak, setCheckOfPeak] = useState(false);

    const toggleOffPeak = () => {
        setCheckOfPeak(!checkOffPeak);
    };

    return (
        <li class="list-group-item">
            <div class="card-body">
      <h5 class="card-title">Electriciteit</h5>
        <div class="input-group mb-3">
        <label class="form-label">Verbruik</label>
          <div class="input-group">
        <span class="input-group-text">kWh</span>
          <input type="text" class="form-control" placeholder="Voorbeeld: 1000" aria-label="Amount (to the nearest dollar)"/>
        <span class="input-group-text">.00</span>
      </div>
    </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="true" id="flexCheckDefault" onChange={toggleOffPeak}/>
            <label class="form-check-label" for="flexCheckDefault">
                Verbruik(Daltarief)
            </label>
        </div>

        {checkOffPeak && (
            <div className="input-group mb-3">
                <div className="input-group">
                    <span className="input-group-text">kWh</span>
                        <input type="text" className="form-control" placeholder="Voorbeeld: 1000" aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">.00</span>
                </div>
            </div>
        )}

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="true" id="flexCheckDefault" onChange={toggleOffPeak}/>
            <label class="form-check-label" for="flexCheckDefault">
                Zonnepanelen
            </label>
        </div>


        </div>
        </li>
    );
  }

export { ElectricityComponent };
  