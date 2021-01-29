import React from "react";
import axios from "axios";
import VehicleCard from "../components/VehicleCard";
import Loading from "../components/Loading";
import FatalError from "./FatalError";
import "./pages.css";

class Vehicles extends React.Component {
  state = {
    vehicles: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const res = await axios.get("http://localhost:4000/api/vehicles");
      this.setState({ vehicles: res.data, loading: false });
    } catch (error) {
      this.setState({
        loading: false,
        error,
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <FatalError />;
    }
    return (
      <div className="container p-4">
        <div className="card col-md-12" style={{ margin: "auto", background: "black" }}>
          <h1 className="text-center" style={{ color: "yellowgreen" }}>
            Vehicles List
          </h1>
        </div>
        <br />
        <div className="row">
          {this.state.vehicles.map((item) => {
            return (
              <div key={item._id} className="col-md-4 card-size">
                <VehicleCard
                  title={item.title}
                  description={item.description}
                  image={item.imageUrl}
                  type={true}
                  id={item._id}
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
