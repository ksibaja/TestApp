import React from "react";
import Home from "../components/Home/Home";

class Main extends React.Component {
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
          }}
        >
          <Home />
        </div>
      </div>
    );
  }
}

export default Main;
