import React from 'react';
// import PropTypes from 'prop-types';
import './Card.css';
import Card from 'react-bootstrap/Card';

class CardCmpt extends React.Component {
  render() {
    const { title, msg, image } = this.props

    return (
      <div className="Card">
        <Card style={{ maxWidth: '30rem', margin: 'auto' }}>
          <Card.Body>
            <h1>{title}</h1>
            <p className="p">{msg}</p>
            <img src={image} alt="hello" height="200"></img>
          </Card.Body>
        </Card>
        <br></br>
      </div>
    )
  }
}

CardCmpt.propTypes = {};

CardCmpt.defaultProps = {};

export default CardCmpt;
