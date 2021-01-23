import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from "react";
import "./App.css";
import Vehicles from './pages/Vehicles';
import Topnavbar from './components/Topnavbar/Topnavbar';
import Manager from './pages/Manager';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Route path='/:page' component={Topnavbar} />
      <Route exact path='/' component={Topnavbar} />
      <Switch>       
        <Route exact path='/' component={Main} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/vehicles' component={Vehicles} />
        <Route exact path='/manager' component={Manager} />
        <Route component={NotFound} />
      </Switch>

    </Router>
  );
}

export default App;
