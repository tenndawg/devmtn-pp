import React, { Component } from 'react';
import "./boxes.css";

export default class Boxes extends Component {

    render() {
        return(
            <div className="boxCom">
                <div className="boxesMain">
                    <div className="nfl">
                        <img src={require("../../../../img/nflbg.jpg")}/>
                        <p>NFL</p>
                    </div>
                    <div className="quad1">
                        <img src={require("../../../../img/nbabg.jpg")}/>
                        <p>NBA</p>
                    </div>
                    <div className="quad2">
                        <img src={require("../../../../img/nhlbg.jpg")}/>
                        <p>NHL</p>
                    </div>
                    <div className="quad3">
                        <img src={require("../../../../img/mlbbg.jpg")}/>
                        <p>MLB</p>
                    </div>
                    <div className="quad4">
                        <img src={require("../../../../img/mlsbg.jpg")}/>
                        <p>MLS</p>
                    </div>
                </div>
            </div>
        )
    }


}