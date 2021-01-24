import React from "react";
import VehicleForm from "../components/VehicleForm";
import CardCmpt from "../components/Card";

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
        <h1 className="text-center" style={{ color: "yellowgreen" }}>Vehicles management</h1><br />
        <div className="row">
          <div className="col-sm">
            <CardCmpt {...this.state.form} />
          </div>
          <div className="col-sm">
            <VehicleForm
              onChange={this.handleChange}
              form={this.state.form}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Manager;
