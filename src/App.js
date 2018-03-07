import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sections from './components/Sections/Sections';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          <img src={require("./img/maingamepic.png")} alt="Video Game Picture" className="pic"/>
        </div>
        <Sections/>
      </div>
    );
  }
}

export default App;
