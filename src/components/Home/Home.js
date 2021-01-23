import React from 'react';
// import PropTypes from 'prop-types';
import './Home.css';

function Home() {
  return (
    <div className="Home" style={{ color: 'yellowgreen' }}>
      <h1>Welcome!!!</h1>
      <p className="p">This is a basic app...</p>
    </div>
  )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
