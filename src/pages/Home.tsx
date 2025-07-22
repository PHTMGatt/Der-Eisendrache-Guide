// 'Home.tsx'
// --------------

import React from 'react';
import '../styles/pages/Home.css';

const Home: React.FC = () => (
  <div className="home-page">
    <h1 className="home-page__title">Der Eisendrache EE Guide</h1>
    <p className="home-page__intro">
      Welcome to the full Easter Egg walkthrough. Follow each step in order to complete the quest.
    </p>

    <ol className="home-page__list">
      <li className="home-page__item">
        Turn on the Power + Feed all 3 Dragons to unlock the Wrath of the Ancients.
      </li>
      <li className="home-page__item">
        Choose a bow to upgrade (Storm is recommended for solo). Complete the bow quest.
      </li>
      <li className="home-page__item">
        Begin the Wisp Step: find and shoot 4 glowing wisps using your upgraded bow.
      </li>
      <li className="home-page__item">
        Teleport back in time: collect the fuses, the soul canister, and memorize the safe code.
      </li>
      <li className="home-page__item">
        Return to present. Kill Panzer, install fuses into Death Ray, enter the code from earlier.
      </li>
      <li className="home-page__item">
        Collect the floppy disk, insert it, and play Simon Says at the computers (2 locations).
      </li>
      <li className="home-page__item">
        Press the green button at Death Ray to drop Dempsey’s Pod.
      </li>
      <li className="home-page__item">
        Repeat the Wisp Step again → travel back → collect tablet → place it by Double Tap.
      </li>
      <li className="home-page__item">
        Insert golden rod into Pyramid Room → follow ghost Keeper and get kills in each circle.
      </li>
      <li className="home-page__item">
        Place soul tube in MPD → ensure you have the Ragnaroks before starting boss fight.
      </li>
    </ol>

    <p className="home-page__note">
      Use the Parts tab to find Shield, Ragnarok DG-4, and the Golden Plunger.
    </p>
  </div>
);

export default Home;
