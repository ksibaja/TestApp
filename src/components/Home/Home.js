import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Button from 'react-bootstrap/Button';

const Home = () => (
  <div className={styles.Home}>
    Home Component
    <Button variant="primary">Primary</Button>{' '}
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
