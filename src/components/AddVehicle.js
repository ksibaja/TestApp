import React from 'react';

class AddVehicle extends React.Component {

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" name="description" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="text" name="image" className="form-control"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </form>

            </div>
        )
    }

}

export default AddVehicle;