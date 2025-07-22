// 'ElectricBow.tsx'
// -----------------

import React from 'react';
import '../../styles/pages/Bows.css';

const ElectricBow: React.FC = () => (
  <div className="bows-page__outlet">
    <h1>Electric Bow – Storm</h1>
    <ol>
      <li>
        Shoot the weather vane near the Death Ray to receive the arrow.
      </li>
      <li>
        Shoot 3 bonfires outside the map with charged arrows:
        <ul>
          <li>Near Death Ray</li>
          <li>Overlooking rocket area</li>
          <li>Cliffside by spawn</li>
        </ul>
      </li>
      <li>
        Wall run across pressure pads in the pyramid room while zero gravity is active.
      </li>
      <li>
        Fill 3 urns with souls: rocket test, clock tower, and above Double Tap.
      </li>
      <li>
        Charge shots at those urns, then shoot the 3 bonfires again with electric arrows.
      </li>
      <li>
        Return to weather vane, collect reforged arrow, place it at the forge, get kills.
      </li>
      <li>Pick up your upgraded Storm Bow.</li>
    </ol>
  </div>
);

export default ElectricBow;
