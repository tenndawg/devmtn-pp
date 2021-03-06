import React, { Component } from 'react';
import "./header2.css";

export default class Header extends Component {
    
    componentDidMount() {
        var n =  new Date();
        var y = n.getFullYear();
        var m = n.getMonth() + 1;
        var d = n.getDate();
        document.getElementById("date").innerHTML = m + "/" + d + "/" + y;   
    }

    searchToggle() {
        var x = document.querySelector('.search2');
            if (x.style.display === "flex") {
                x.style.display = "none";
            } else {
                x.style.display = "flex";
            }
    }

    burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks2');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
    
    render() {
        return(        
            <div>
                    <div className="menu2">
                        <div className="date2">
                            <p id="date"></p>
                        </div>
                        <div className="icons2">
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
                <div className="navmid2">
                    <div className="siteName2">
                        <a href="/#/SportsMain"><img src={require("../../../../img/TennDawgs.png")} alt="TennDawg's Den"/></a>
                    </div>
                </div>
                <div className="navbot2">
                    <div className="menuList2">
                        <a href="/#/SportsMain"><img src={require("../../../../img/homeicon.jpg")} alt="Home"/></a>
                        <p>NFL</p>
                        <p>NBA</p>
                        <p>MLB</p>
                        <p>NHL</p>
                        <p>MLS</p>
                        <a href="/#/VGMain"><p>Video Games</p></a>
                    </div>
                    <div className="search2">
                        <input type="text" name="search" placeholder="Search..."/>                        
                    {/* <img src={require("../../../../img/searchicon.png")} alt="search"  onclick={this.searchToggle}/> */}
                    </div>
                </div>
                    <div className="navNarrow2">
                        <img src={require("../../../../img/burgermenu.png")} alt="menu" className="fa fa-bars fa-2x" onClick={this.burgerToggle}></img>
                        <div className="narrowLinks2">
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