import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import VGMain from './components/VGMain/VGMain';
import SportsMain from './components/Sports/SportsMain/SportsMain';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        
          <Switch>
            <Route path='/vgmain' exact={true} component={ VGMain } />
            <Route path='/sportsmain' exact={true} component={ SportsMain } />
          </Switch>
      
        </Router>
      </div>
    );
  }
}

export default App;
