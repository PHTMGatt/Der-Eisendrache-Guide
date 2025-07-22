// 'WolfBow.tsx'
// -------------

import React from 'react';
import '../../styles/pages/Bows.css';

const WolfBow: React.FC = () => (
  <div className="bows-page__outlet">
    <h1>Wolf Bow – Wolf</h1>
    <ol>
      <li>
        Activate paintings around the map in the correct order (randomized per game).
      </li>
      <li>
        Collect the arrow from under the tomb near the pyramid.
      </li>
      <li>
        Go to the rocket area, shoot the wall to reveal the wolf’s skull, and pick it up.
      </li>
      <li>
        Place it in the crypt and follow the ghost wolf. Dig at the glowing piles.
      </li>
      <li>
        After the final dig, place the arrow, get kills, and claim the Wolf Bow.
      </li>
    </ol>
  </div>
);

export default WolfBow;
