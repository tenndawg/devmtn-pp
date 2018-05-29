import React, {Component} from 'react';
import Header from './Header/Header';
import Sections from './Sections/Sections';
import AllNews from './AllNews/AllNews';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';
import '../../../App.css';

export default class VGMain extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="appImg">
                <img src={require("../../../img/ppvgmain.jpg")} alt="Video Game" className="pic"/>
                <h1 className="HM">TENNDAWGS DEN</h1>
                </div>
                <Sections/>
                <div className="newsReviews">
                    <AllNews/>
                    <Reviews/>
                </div>
                <Footer/>
            </div>
        )
    }
}