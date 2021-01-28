import React from "react";
import VehicleCard from "../components/VehicleCard";
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
          "https://thumbs.dreamstime.com/b/fighter-mig-29-27754708.jpg"
          // "https://lh3.googleusercontent.com/proxy/ZvmicXrYmth8z1rrSOug2LlD_UQB1NlrVzWwUzfOxvKmCBPx6XZGnAnLPdDqPIEun8dkIKaDbfEjV3N55lO-18qI0d5ksdwaGN76XnhfbTk",
          // https://thumbs.dreamstime.com/b/fighter-mig-29-27754708.jpg 
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <div className="card col-md-12" style={{ margin: 'auto' }}>
          <h1 className="text-center" style={{ color: "yellowgreen" }}>Vehicles view</h1>
        </div>
        <br />
        <div className="row">
          {this.state.data.map((item) => {
            return (
              <div
                key={item.id}
                className="col-md-4 card-size"
              >
                <VehicleCard
                  title={item.title}
                  description={item.description}
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
