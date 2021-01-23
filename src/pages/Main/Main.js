import React from 'react';
import Home from '../../components/Home/Home';
import Topnavbar from '../../components/Topnavbar/Topnavbar';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "title": "Car",
                "description": "This is a car...",
                "img": "https://i.pinimg.com/originals/5a/ac/3f/5aac3fb9d746147104428b10fe28eda6.jpg"
            }, {
                "id": 2,
                "title": "Motorcycle",
                "description": "This is a motorcycle...",
                "img": "https://wallpapercave.com/wp/wp1905915.jpg"
            }, {
                "id": 3,
                "title": "Airplane",
                "description": "This is an airplane...",
                "img": "https://thumbs.dreamstime.com/b/avi%C3%B3n-en-el-cielo-ilustraci%C3%B3n-de-l%C3%A1piz-dibujada-mano-sobre-fondo-blanco-163694663.jpg"
            }]
        }
    }

    render() {
        return (
            <div>
                <Topnavbar />
                <Home data={this.state.data} />
            </div>
        )
    }
}

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
