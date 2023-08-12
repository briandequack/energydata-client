import React, { useState } from 'react';

function GasComponent() {

    return (
      <li class="list-group-item">
         <div class="card-body">
            <h5 class="card-title">Gas</h5>
              <div class="input-group mb-3">
                <label class="form-label">Verbruik</label>
              <div class="input-group">
              <span class="input-group-text">m3</span>
                <input type="text" class="form-control" placeholder="Voorbeeld: 1000" aria-label="Amount (to the nearest dollar)"/>
              <span class="input-group-text">.00</span>
            </div>
          </div>
          </div>
        </li>
    );
  }

export { GasComponent };
  