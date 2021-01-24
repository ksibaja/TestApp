import React from "react";
import AddVehicle from "../components/AddVehicle";

class Manager extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{ color: "yellowgreen" }}>Vehicles management</h1><br />
        <AddVehicle />
      </div>

    );
  }
}

export default Manager;
