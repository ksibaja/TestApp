import React from "react";
import "./styles/VehicleCard.css";
import Card from "react-bootstrap/Card";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

class VehicleCard extends React.Component {

  handleClick = async (e) => {
    e.preventDefault();
    if (this.props.type) {
      await axios.delete(`http://localhost:4000/api/vehicles/${this.props.id}`);
    }
  }

  render() {
    const { title, description, image, type } = this.props;

    return (
      <div className="Card">
        <Card>
          <Card.Body className="card-style">
            <h3>{title}</h3>
            <p className="p">{description}</p>
            <img className="img" src={image} alt="hello"></img>
            {type ? (
              <button
                onClick={this.handleClick}
                className="btn"
                style={{
                  color: "red",
                  position: "absolute",
                  right: "0",
                  top: "0",
                }}
              >
                <FaTrash />
              </button>
            ) : null}
          </Card.Body>
        </Card>
        <br></br>
      </div>
    );
  }
}

export default VehicleCard;
