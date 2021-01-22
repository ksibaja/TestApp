import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: 'https://i.pinimg.com/originals/a7/fc/aa/a7fcaa43650adc892c401956a08dc32a.jpg'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        image: 'https://wow.zamimg.com/uploads/screenshots/normal/980483.jpg'
      })
    }, 5000);
  }

  render() {
    return (
      <div className={styles.Home}>
        <h1>{this.props.title}</h1>
        <img src={this.state.image} alt="hello" width="500" height="300"></img>
        <br></br><hr></hr>
        <Button variant="primary">Primary</Button>{' '}
      </div>
    )
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
