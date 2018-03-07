import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <img src={require("./img/maingamepic.png")} className="pic"/>
      </div>
    );
  }
}

export default App;
