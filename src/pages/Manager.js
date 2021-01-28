import React from "react";
import axios from 'axios';
import VehicleForm from "../components/VehicleForm";
import VehicleCard from "../components/VehicleCard";

class Manager extends React.Component {

  state = {
    form: {
      title: 'Test title',
      description: 'Test description',
      image: 'https://kepriprov.go.id/assets/img/berita/No_Foto_2.jpg'
    },
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/vehicles');
    this.setState({vehicles: res.data});
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
