import React from 'react';
// import PropTypes from 'prop-types';
import './Home.css';
import CardCmpt from '../Card/Card';

function Home(props) {
  return (
    <div className="Home">
      <h1>Welcome!!!</h1><hr></hr>
      { props.data.map((item) => {
        return (
          <CardCmpt title={item.title} msg={item.description} image={item.img} />
        )
      })}
    </div>
  )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
