import React, { Component } from 'react';
import "./reviews.css";
import axios from 'axios';
import xmljs from 'xml-js';

export default class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        axios.get('https://www.giantbomb.com/api/reviews/?api_key=bde2c74b073b6e604c3e1d5d0b056972f6f6ad22&limit=10&sort=publish_date:desc',{
            params: { count: this.props.results || 10 }
        })
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

        return(
            <div>
                <div className="reviews">
                    <h1>Latest Reviews</h1>
                </div>
            </div>
        )
    }
}