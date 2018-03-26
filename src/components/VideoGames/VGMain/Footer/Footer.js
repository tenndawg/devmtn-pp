import React, { Component } from 'react';
import "./footer.css";

export default class Footer extends Component {

    componentDidMount() {
        var n =  new Date();
        var y = n.getFullYear();
        document.getElementById("date").innerHTML = y;   
    }

    render() {
        return(
            <div className="footMenu">
                <div className="footSiteName">
                    <p>tenndawgsden.com</p>
                </div>
                <div className="copyright">
                    <p>© <span id="date"></span> TennDawgsDen.com</p> 
                </div>
            </div>
        )
    }
}