// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
// App.js or Navbar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTasks, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css'; // Importáld be a CSS fájlt


const Navbar = () => {
  return (
    <nav className="top-navbar">
      <ul>
        <div>
          <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link to="/planner">
              <FontAwesomeIcon icon={faTasks} /> Planner
          </Link>
          </div>
          <div className='jobbra'>
          <Link to="/login">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
          
          <Link to="/registration">
              <FontAwesomeIcon icon={faUser} /> Register
          </Link>
          </div>
        </ul>
    </nav>
  );
};

export default Navbar;
