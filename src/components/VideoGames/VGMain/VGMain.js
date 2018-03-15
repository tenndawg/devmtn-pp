import React, {Component} from 'react';
import Header from './Header/Header';
import Sections from './Sections/Sections';
import AllNews from './AllNews/AllNews';
import '../../../App.css';

export default class VGMain extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="appImg">
                <img src={require("../../../img/ppvgmain.jpg")} alt="Video Game" className="pic"/>
                </div>
                <Sections/>
                <AllNews/>
            </div>
        )
    }
}