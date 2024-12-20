import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/clock">Saat</Link></li>
        <li><Link to="/stopwatch">Saniyəölçən</Link></li>
        <li><Link to="/timer">Taymer</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
