import React, { Component } from 'react';
import "./header.css";

export default class Header extends Component {
    
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
            <nav>
                <div className="menu">
                    <div className="siteName">
                        <p><b>TennDawg's Den</b></p>
                    </div>
                    <div className="menuList">
                        <p>Menu 1</p>
                        <p>Menu 2</p>
                        <p>Menu 3</p>
                        <p>Menu 4</p>
                    </div>
                    <div className="icons">
                        <img src={require("../../img/searchicon.png")} alt="search"/>
                        <img src={require("../../img/twittericon.png")} alt="twitter"/>
                        <img src={require("../../img/facebookicon.png")} alt="facebook"/>
                        <img src={require("../../img/tumblricon.png")} alt="tumblr"/>
                    </div>
                </div>
                <div className="navNarrow">
					<img src={require("../../img/burgermenu.png")} alt="menu" className="fa fa-bars fa-2x" onClick={this.burgerToggle}></img>
					<div className="narrowLinks">
						<a href="http://google.com" onClick={this.burgerToggle}>Menu 1</a>
						<a href="http://espn.com" onClick={this.burgerToggle}>Menu 2</a>
						<a href="http://ign.com" onClick={this.burgerToggle}>Menu 3</a>
                        <a href="http://gmail.com" onClick={this.burgerToggle}>Menu 4</a>
					</div>
                </div>
            </nav>
        )
    }
}