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
        // var config = {
        //     headers: {'Access-Control-Allow-Origin': 'false', 'user-key': '5d8640d4b2b7b28d5ea1a4daef19b148', 'Accept': 'application/jsonp'}
        // };
        // 'https://api-2445582011268.apicast.io/reviews/', { crossdomain: true }
        // var config = {
        //     headers: {'Origin': 'http://127.0.0.1:3000/#/vgmain'}
        // };
         axios.get('https://www.giantbomb.com/api/reviews/?api_key=bde2c74b073b6e604c3e1d5d0b056972f6f6ad22'  
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
        var xml = this.state.bomb;
        var options = {ignoreComment: true, compact: true, cdataKey: Math.random()}
        var response1 = convert.xml2js(xml, options);
        console.log(response1.response.results.review);
        var reviewItems = response1.response.results.review.map((result) =>
            <li><div className="titles"><b>{result.game.name}</b></div><br/> <div className="description">{result.description}</div><br/></li>
        );
        console.log(reviewItems);
        return(
            <div>
                <div className="reviews">
                    <h1>Latest Reviews</h1>{reviewItems}
                </div>
            </div>
        )
    }
}