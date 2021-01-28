import React from "react";
import VehicleForm from "../components/VehicleForm";
import VehicleCard from "../components/VehicleCard";

class Manager extends React.Component {

  state = {
    form: {
      title: 'Hello',
      description: 'Test description',
      image: 'https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg'
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  };


  render() {
    return (
      <div className="container">
        <div className="card col-md-12" style={{ margin: 'auto' }}>
          <h1 className="text-center" style={{ color: "yellowgreen" }}>Vehicles management</h1>
        </div><br />
        <div className="row">
          <div className="col-sm">
            <VehicleCard {...this.state.form} />
          </div>
          <div className="col-sm" style={{ padding: 'unset' }}>
            <VehicleForm
              onChange={this.handleChange}
              form={this.state.form}
            />
          </div>
        </div><br/><br/>
      </div>
    );
  }
}

export default Manager;
