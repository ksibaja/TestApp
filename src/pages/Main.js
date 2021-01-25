import React from "react";
import Home from "../components/Home";

class Main extends React.Component {

  state = {}

  handleClick = () => {
    console.log('Hello, you clicked the button...')
    alert('Hello, you clicked the button...')
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleClickColor = () => {
    localStorage.setItem('color', this.state.color)
    document.body.style = `background: ${this.state.color};`;
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
            </button><hr />
            <div className="col-md-3" style={{ margin: 'auto' }}>
              <div className="card">
                <label>Background color</label>
                <input
                  type="text"
                  name="color"
                  className="form-control"
                  onChange={this.handleChange}
                ></input>
                <button className="btn btn-primary" onClick={this.handleClickColor}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Main;
