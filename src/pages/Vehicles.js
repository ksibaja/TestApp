import React from "react";
import CardCmpt from "../components/Card";
import "./pages.css";

class Vehicles extends React.Component {
  state = {
    data: [
      {
        id: 1,
        title: "Car",
        description: "This is a car...",
        img:
          "https://i.pinimg.com/originals/5a/ac/3f/5aac3fb9d746147104428b10fe28eda6.jpg",
      },
      {
        id: 2,
        title: "Motorcycle",
        description: "This is a motorcycle...",
        img: "https://wallpapercave.com/wp/wp1905915.jpg",
      },
      {
        id: 3,
        title: "Plane",
        description: "This is an plane...",
        img:
          "https://lh3.googleusercontent.com/proxy/ZvmicXrYmth8z1rrSOug2LlD_UQB1NlrVzWwUzfOxvKmCBPx6XZGnAnLPdDqPIEun8dkIKaDbfEjV3N55lO-18qI0d5ksdwaGN76XnhfbTk",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center" style={{ color: "yellowgreen" }}>Vehicles view</h1><br />
        <br />
        <div className="row">
          {this.state.data.map((item) => {
            return (
              <div
                key={item.id}
                className="col-md-4 card-size"
              >
                <CardCmpt
                  title={item.title}
                  msg={item.description}
                  image={item.img}
                />
              </div>
            );
          })}
        </div>

      </div>
    );
  }
}

export default Vehicles;
