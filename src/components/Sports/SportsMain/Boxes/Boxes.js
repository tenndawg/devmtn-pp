import React, { Component } from 'react';
import "./boxes.css";

export default class Boxes extends Component {

    render() {
        return(
            <div className="boxCom">
                <div className="boxesMain">
                    <div className="nfl">
                        <img src={this.props.mainBlock}/>
                        <p>NFL</p>
                    </div>
                    <div className="quad1">
                        <img src={this.props.quad1}/>
                        <p>NBA</p>
                    </div>
                    <div className="quad2">
                        <img src={this.props.quad2}/>
                        <p>NHL</p>
                    </div>
                    <div className="quad3">
                        <img src={this.props.quad3}/>
                        <p>MLB</p>
                    </div>
                    <div className="quad4">
                        <img src={this.props.quad4}/>
                        <p>MLS</p>
                    </div>
                </div>
            </div>
        )
    }
}