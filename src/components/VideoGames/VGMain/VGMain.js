import React, {Component} from 'react';
import Header from './Header/Header';
import Sections from './Sections/Sections';
import AllNews from './AllNews/AllNews';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';
import '../../../App.css';
import './vgmain.css';

export default class VGMain extends Component {
    render() {

        var firstLink = "/#/Xbox";
        var firstItem = "Xbox";
        var secondLink = "/#/Playstation";
        var secondItem = "Playstation";
        var thirdLink = "/#/PC";
        var thirdItem = "PC";
        var fourthLink = "/#/Nintendo";
        var fourthItem = "Nintendo"
        var fifthLink = "/#/SportsMain";
        var fifthItem = "Sports";
        
        return (
            <div>
                <Header 
                    menuLink1={firstLink} menu1={firstItem}
                    menuLink2={secondLink} menu2={secondItem}
                    menuLink3={thirdLink} menu3={thirdItem}
                    menuLink4={fourthLink} menu4={fourthItem}
                    menuLink5={fifthLink} menu5={fifthItem} />
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