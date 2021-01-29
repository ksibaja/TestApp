import React from "react";
import Home from "../components/Home";
import "./pages.css";

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
      <div className="container p-4 text-center col-md-3 main-size" style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}>
        <div className="card" style={{ background: 'black' }}>
          <div className="card-body" >
            <Home /><hr />
            <div className="form-group">
              <label style={{ color: 'white' }}>Background color</label>
              <input
                type="text"
                name="color"
                className="form-control"
                onChange={this.handleChange}
              ></input>
            </div>
            <button className="btn btn-primary btn-block" onClick={this.handleClickColor}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
