import React from "react";

class VehicleForm extends React.Component {
    
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { onChange, form } = this.props

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            onChange={onChange}
                            value={form.title}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            onChange={onChange}
                            value={form.description}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Image url</label>
                        <input
                            type="text"
                            name="image"
                            className="form-control"
                            onChange={onChange}
                            value={form.image}
                        ></input>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default VehicleForm;
