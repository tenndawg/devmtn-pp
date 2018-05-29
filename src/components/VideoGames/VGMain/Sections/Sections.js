import React, { Component } from 'react';
import "./sections.css";

export default class Sections extends Component {
    render() {
        return(
            <div>
                <div className="boxes">
                    <div className="container">
                        <a href="localhost:3000/#/xbox"><img src={require("../../../../img/xbox.png")} alt="Xbox"/><p>Xbox</p></a>
                    </div>
                    <div className="container">
                        <a href="localhost:3000/#/ps"><img src={require("../../../../img/ps.png")} alt="Playstation"/><p>Playstation</p></a>
                    </div>
                    <div className="container">
                        <a href="localhost:3000/#/pc"><img src={require("../../../../img/pc.png")} alt="PC"/><p>PC</p></a>
                    </div>
                    <div className="container">
                        <a href="localhost:3000/#/nintendo"><img src={require("../../../../img/nintendo.png")} alt="Nintendo"/><p>Nintendo</p></a>
                    </div>
                </div>
            </div>
        )
    }
}