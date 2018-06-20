import React, { Component } from 'react';
import "./boxes.css";

export default class Boxes extends Component {

    render() {
        return(
            <div className="boxCom">
                <div className="boxesMain">
                    <div className="nfl">
                        <a href={this.props.link1} target="_blank">
                            <img src={this.props.mainBlock}/>
                            <p>{this.props.title1}</p>
                        </a>
                    </div>
                    <div className="quad1">
                        <a href={this.props.link2} target="_blank">
                            <img src={this.props.quad1}/>
                            <p>{this.props.title2}</p>
                        </a>
                    </div>
                    <div className="quad2">
                        <a href={this.props.link3} target="_blank">
                            <img src={this.props.quad2}/>
                            <p>{this.props.title3}</p>
                        </a>
                    </div>
                    <div className="quad3">
                        <a href={this.props.link4} target="_blank">
                            <img src={this.props.quad3}/>
                            <p>{this.props.title4}</p>
                        </a>
                    </div>
                    <div className="quad4">
                        <a href={this.props.link5} target="_blank">
                            <img src={this.props.quad4}/>
                            <p>{this.props.title5}</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}