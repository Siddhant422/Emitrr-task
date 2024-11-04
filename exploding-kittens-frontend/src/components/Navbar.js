
import React from 'react';


function Navbar({ userName, points }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Exploding Kittens 🃏</h1>
      </div>
      <div className="navbar-right">
        <p>Player: {userName}</p>
        <p>Score: {points}</p>
      </div>
    </nav>
  );
}

export default Navbar;
