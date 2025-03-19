import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie-player'; // Make sure this line is active
import animationData from '../IMAGE/Animation - 1733313215606.json'; // Adjust the path as necessary

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: '500px', height: '500px', margin: '0 auto' }}
      />
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none'}}>
       Click to Go back to Home page
      </Link>
    </div>
  );
};

export default NotFound;
