import React, { Component } from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

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
                        <Link to="/VGMain">
                            <img src={require("../../../../img/tdgames.jpg")} alt="TennDawg's Den"/>
                        </Link>
                    </div>
                    <div className="menuList">
                        <p>Menu 1</p>
                        <p>Menu 2</p>
                        <p>Menu 3</p>
                        <p>Menu 4</p>
                    </div>
                    <div className="icons">
                        <input type="vex" name="search" placeholder="Search..."/>
                        <a href="http://twitter.com/tenndawg" target="_blank">
                            <img src={require("../../../../img/twittericon.png")} alt="twitter"/>
                        </a>
                        <a href="http://facebook.com/nickdastick" target="_blank">
                            <img src={require("../../../../img/facebookicon.png")} alt="facebook"/>
                        </a>
                        <a href="#" target="_blank">
                            <img src={require("../../../../img/tumblricon.png")} alt="tumblr"/>
                        </a>
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
            </nav>
        )
    }
}