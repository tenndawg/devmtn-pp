import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import VGMain from './components/VideoGames/VGMain/VGMain';
import SportsMain from './components/Sports/SportsMain/SportsMain';
import Xbox from './components/VideoGames/SubPages/Xbox';
import Playstation from './components/VideoGames/SubPages/Playstation';
import PC from './components/VideoGames/SubPages/PC';
import Nintendo from './components/VideoGames/SubPages/Nintendo';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        
          <Switch>
            <Route path='/VGMain' exact={true} component={ VGMain } />
              <Route path='/Xbox' component={ Xbox } />
              <Route path='/Playstation' component={ Playstation } />
              <Route path='/PC' component={ PC } />
              <Route path='/Nintendo' component={ Nintendo } />
            <Route path='/SportsMain' exact={true} component={ SportsMain } />
          </Switch>
      
        </Router>
      </div>
    );
  }
}

export default App;
