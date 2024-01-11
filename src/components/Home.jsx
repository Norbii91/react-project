// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Registration from './Registration';
import './Home.css'

const Home = () => {
  const [isRegistrationVisible, setRegistrationVisibility] = useState(false);

  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
  };

  const registrationButtonStyle = {
    padding: '10px 20px',
    background: '#4CAF50',
    color: '#fff',
    borderRadius: '4px',
    textDecoration: 'none',
    cursor: 'pointer',
  };


  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Daily Planner</h1>
      <p style={paragraphStyle}>
        Plan your day and stay organized with our daily planner app.
        <br />
        <Link id='linkecske' to="/planner">Go to Planner</Link>
      </p>
    </div>
  );
};

export default Home;
