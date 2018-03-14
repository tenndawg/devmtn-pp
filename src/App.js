import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import VGMain from './components/VGMain/VGMain';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        
          <Switch>
            <Route path='/vgmain' exact={true} component={ VGMain } />
          </Switch>
      
        </Router>
      </div>
    );
  }
}

export default App;
