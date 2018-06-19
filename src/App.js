import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import VGMain from './components/VideoGames/VGMain/VGMain';
import SportsMain from './components/Sports/SportsMain/SportsMain';
import Xbox from './components/VideoGames/SubPages/Xbox';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        
          <Switch>
            <Route path='/VGMain' exact={true} component={ VGMain } />
              <Route path='/Xbox' component={ Xbox } />
            <Route path='/SportsMain' exact={true} component={ SportsMain } />
          </Switch>
      
        </Router>
      </div>
    );
  }
}

export default App;
