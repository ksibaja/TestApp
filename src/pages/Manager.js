import React from "react";

class Manager extends React.Component {
  render() {
    return (
      <div className="row">
        <div
          className="col-md-12 text-center"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            color: "yellowgreen",
          }}
        >
          <h1>Hello there...</h1>
        </div>
      </div>
    );
  }
}

export default Manager;
