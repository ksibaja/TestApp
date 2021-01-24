import React from 'react';
import './styles/Card.css';
import Card from 'react-bootstrap/Card';

const CardCmpt = ({ title, msg, image }) => (
  <div className="Card">
    <Card>
      <Card.Body className="card-style">
        <h3>{title}</h3>
        <p className="p">{msg}</p>
        <img src={image} alt="hello" height="200"></img>
      </Card.Body>
    </Card>
    <br></br>
  </div>
)

export default CardCmpt;
