import React, { Component } from 'react';
import "./header.css";

export default class Header extends Component {  
    render() {
        return(        
            <div className="menu">
                <div className="siteName">
                    <h1>TennDawg's Den</h1>
                </div>
                <div className="menuList">
                    <h2>Menu 1</h2>
                    <h2>Menu 2</h2>
                    <h2>Menu 3</h2>
                    <h2>Menu 4</h2>
                </div>
                <div className="icons">
                    <img src={require("../../img/searchicon.png")} alt="search"/>
                    <img src={require("../../img/twittericon.png")} alt="twitter"/>
                    <img src={require("../../img/facebookicon.png")} alt="facebook"/>
                    <img src={require("../../img/tumblricon.png")} alt="tumblr"/>
                </div>
            </div>
        )
    }
}