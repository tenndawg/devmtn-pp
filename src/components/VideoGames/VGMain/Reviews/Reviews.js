import React, { Component } from 'react';
import "./reviews.css";
import axios from 'axios';

export default class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        var config = {
            headers: {'Access-Control-Allow-Origin': 'false', 'user-key': '5d8640d4b2b7b28d5ea1a4daef19b148', 'Accept': 'application/jsonp'}
        };
        axios.get('https://api-2445582011268.apicast.io/reviews/', config   
        )
        .then(res => {   
            this.setState({
                bomb: res.data
            })
        }, () => {
        this.setState({
        requestFailed: true
        })
        })
    }

    render() {
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.bomb) return <p>Loading...</p>
        var convert = require('xml-js');
        var xml = this.state.bomb.results;
        var results = convert.xml2json(xml, {compact: true, spaces: 4});
        var reviewItems = results.map((result) =>
            <li><div className="titles"><b>{result.review.name}</b></div><br/> <div className="description">{result.review.description}</div><br/></li>
        );
        console.log(this.state.bomb);
        return(
            <div>
                <div className="reviews">
                    <h1>Latest Reviews</h1>
                </div>
            </div>
        )
    }
}