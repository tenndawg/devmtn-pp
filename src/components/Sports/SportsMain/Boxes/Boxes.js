import React, { Component } from 'react';
import "./boxes.css";

export default class Boxes extends Component {

    render() {
        return(
            <div className="boxCom">
                <div className="boxesMain">
                    <div className="nfl">
                        <img src={this.props.mainBlock}/>
                        <p>{this.props.title1}</p>
                    </div>
                    <div className="quad1">
                        <img src={this.props.quad1}/>
                        <p>{this.props.title2}</p>
                    </div>
                    <div className="quad2">
                        <img src={this.props.quad2}/>
                        <p>{this.props.title3}</p>
                    </div>
                    <div className="quad3">
                        <img src={this.props.quad3}/>
                        <p>{this.props.title4}</p>
                    </div>
                    <div className="quad4">
                        <img src={this.props.quad4}/>
                        <p>{this.props.title5}</p>
                    </div>
                </div>
            </div>
        )
    }
}