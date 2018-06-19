import React, { Component } from 'react';
import Header from '../VGMain/Header/Header';
import Boxes from '../../Sports/SportsMain/Boxes/Boxes';
import AllNews from '../VGMain/AllNews/AllNews';
import './xbox.css';

export default class Xbox extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="appImg">
                    <img src={require("../../../img/xboxlogo.jpg")} alt="Video Game" className="pic"/>
                </div>
                <div className="boxStyle">
                    <Boxes />
                </div>
                <AllNews />
            </div>
        )
    }
}