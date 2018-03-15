import React, { Component } from 'react';
import "./header.css";

export default class Header extends Component {
    
    hoy() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
    
    render() {
        return(        
            <div>
                <nav>
                    <div className="menu">
                        <div className="date">
                            <p>Date Goes Here</p>
                        </div>
                        <div className="icons">
                            <img src={require("../../../../img/twittericon.png")} alt="twitter"/>
                            <img src={require("../../../../img/facebookicon.png")} alt="facebook"/>
                            <img src={require("../../../../img/tumblricon.png")} alt="tumblr"/>
                        </div>
                    </div>
                </nav>
                <div className="navmid">
                    <div className="siteName">
                        <img src={require("../../../../img/tenndawgsden.png")} alt="TennDawg's Den"/>
                    </div>
                </div>
                <div className="navbot">
                    <div className="menuList">
                        <p>Home</p>
                        <p>Menu 1</p>
                        <p>Menu 2</p>
                        <p>Menu 3</p>
                        <p>Menu 4</p>
                    </div>
                    <div className="search">
                    <img src={require("../../../../img/searchicon.png")} alt="search"/>
                    </div>
                </div>
                    <div className="navNarrow">
                        <img src={require("../../../../img/burgermenu.png")} alt="menu" className="fa fa-bars fa-2x" onClick={this.burgerToggle}></img>
                        <div className="narrowLinks">
                            <a href="http://google.com" onClick={this.burgerToggle}>Menu 1</a>
                            <a href="http://espn.com" onClick={this.burgerToggle}>Menu 2</a>
                            <a href="http://ign.com" onClick={this.burgerToggle}>Menu 3</a>
                            <a href="http://gmail.com" onClick={this.burgerToggle}>Menu 4</a>
                        </div>
                    </div>
            </div>
            
        )
    }
}