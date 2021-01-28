import React from 'react';
import './styles/Card.css';
import Card from 'react-bootstrap/Card';

const VehicleCard = ({ title, description, image }) => (
  <div className="Card" >
    <Card>
      <Card.Body className="card-style">
        <h3>{title}</h3>
        <p className="p">{description}</p>
        <img className="img" src={image} alt="hello"></img>
      </Card.Body>
    </Card>
    <br></br>
  </div>
)

export default VehicleCard;
