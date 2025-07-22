// 'BowNav.tsx'
// ------------- 
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/BowNav.css';

const bows = [
  { path: 'base', label: 'Base Bow' },
  { path: 'electric', label: 'Electric Bow' },
  { path: 'fire', label: 'Fire Bow' },
  { path: 'wolf', label: 'Wolf Bow' },
  { path: 'void', label: 'Void Bow' },
];

const BowNav: React.FC = () => (
  <nav className="bow-nav" aria-label="Bow selection">
    <h3 className="bow-nav__title">Select Your Bow</h3>
    <ul className="bow-nav__list">
      {bows.map(({ path, label }) => (
        <li key={path} className="bow-nav__item">
          <NavLink
            to={`/bows/${path}`}
            className={({ isActive }) =>
              `bow-nav__link${isActive ? ' bow-nav__link--active' : ''}`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default BowNav;
