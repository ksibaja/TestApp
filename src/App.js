import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from "react";
import "./App.css";
import Vehicles from './pages/Vehicles';
import Topnavbar from './components/Topnavbar/Topnavbar';
import Manager from './pages/Manager';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Router>
        <Route path='/:page' component={Topnavbar} />
        <Route exact path='/' component={Topnavbar} />

        <Route exact path='/' component={Main} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/vehicles' component={Vehicles} />
        <Route exact path='/manager' component={Manager} ></Route>
      </Router>
    </div>
  );
}

export default App;
