import React from "react";
import Home from "../components/Home";

class Main extends React.Component {

  handleClick = () => {
    console.log('Hello, you clicked the button...')
    alert('Hello, you clicked the button...')
  }

  render() {
    return (
      <div className="container">
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
            <button className="btn btn-secondary" onClick={this.handleClick}>
              Click here o.o
          </button>
          </div>
        </div>
      </div>

    );
  }
}

export default Main;
