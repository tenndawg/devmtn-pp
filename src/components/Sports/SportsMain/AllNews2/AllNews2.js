import React, { Component } from 'react';
import "./allNews2.css";
import axios from 'axios';

export default class AllNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?sources=espn&apiKey=4c7e5e447d3c466b955949134414fcbf',{
            params: { count: this.props.totalResults || 10 }
        })
        .then(res => {   
            this.setState({
                espnAPI: res.data
            })
        }, () => {
        this.setState({
          requestFailed: true
        })
      })
    }
    render() { 
        
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.espnAPI) return <p>Loading...</p>
        var articles = this.state.espnAPI.articles;
        var listItems = articles.map((article) =>
            <li><a href={article.url}><img src={article.urlToImage} alt='Poster'/><br/> <div className="titles2"><b>{article.title}</b></div></a><br/> <div className="description2">{article.description}</div><br/></li>
        );

        return(
            <div className="main2">
                <div className="news2">
                    <h1>Latest News</h1>{listItems}
                </div>
            </div>
        )
    }
}