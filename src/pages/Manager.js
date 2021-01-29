import React from "react";
import axios from "axios";
import VehicleForm from "../components/VehicleForm";
import VehicleCard from "../components/VehicleCard";

class Manager extends React.Component {

  state = {
    form: {
      title: 'Test title',
      description: 'Test description',
      image: 'https://kepriprov.go.id/assets/img/berita/No_Foto_2.jpg'
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.createVehicle();
  };

  createVehicle = async () => {
    await axios.post("http://localhost:4000/api/vehicles", {
      title: this.state.form.title,
      description: this.state.form.description,
      imageUrl: this.state.form.image,
    });
  };

  render() {
    return (
      <div className="container p-4">
        <div className="card col-md-12" style={{ margin: 'auto', background: "black" }}>
          <h1 className="text-center" style={{ color: "yellowgreen" }}>Vehicles Management</h1>
        </div><br />
        <div className="row">
          <div className="col-sm">
            <VehicleCard {...this.state.form} type={false} />
          </div>
          <div className="col-sm" style={{ padding: 'unset' }}>
            <VehicleForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              form={this.state.form}
            />
          </div>
        </div><br/><br/>
      </div>
    );
  }
}

export default Manager;
