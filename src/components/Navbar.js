import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link className="logo navbar-brand" to="/">Math Magicians</Link>

        <ul className="navbar-nav ms-auto menu">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Calc">Calculator</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Quate">Quote</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
