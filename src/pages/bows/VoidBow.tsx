// 'VoidBow.tsx'
// --------------

import React from 'react';
import '../../styles/pages/Bows.css';

const VoidBow: React.FC = () => (
  <div className="bows-page__outlet">
    <h1>Void Bow</h1>
    <p>
      This bow requires multiple steps and precision. Here's how to upgrade it:
    </p>
    <ol>
      <li>Shoot the purple symbol in the Crypt Room to spawn the quest item.</li>
      <li>Place the dog bowl above the pyramid and get 6 kills.</li>
      <li>Collect and interact with the purple skull.</li>
      <li>
        Find 6 skulls around the map (e.g., Quick Revive, Samantha’s Room, etc.).
      </li>
      <li>
        Return to the bowl, listen to the voice prompt, and shoot the correct urns
        in the same order.
      </li>
      <li>
        Take the reforged arrow back to the pyramid, get kills, and collect the
        upgraded Void Bow.
      </li>
    </ol>
  </div>
);

export default VoidBow;
