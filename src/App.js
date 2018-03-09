import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sections from './components/Sections/Sections';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="appImg">
          <img src={require("./img/ppvgmain.jpg")} alt="Video Game" className="pic"/>
        </div>
        <Sections/>
      </div>
    );
  }
}

export default App;
