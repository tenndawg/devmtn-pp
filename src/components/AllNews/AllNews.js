import React, { Component } from 'react';
import "./allNews.css";
import axios from 'axios';
// import newsapi from 'newsapi';

export default class AllNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }
    
    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?sources=ign&apiKey=4c7e5e447d3c466b955949134414fcbf',{
            params: { count: this.props.totalResults || 10 }
        })
        .then(res => {   
            this.setState({
                ignAPI: res.data
            })
        }, () => {
        this.setState({
          requestFailed: true
        })
      })
    }
    render() { 
        if (this.state.requestFailed) return <p>Failed!</p>
        if (!this.state.ignAPI) return <p>Loading...</p>
        var articles = this.state.ignAPI.articles;
        var listItems = articles.map((article) =>
            <li> <img src={article.urlToImage} alt='Poster'/> <br/> <b>{article.title}</b><br/></li>
        );

        return(
            <div className="main">
                <div className="news">
                    {listItems}
                </div>
                <div className="reviews">

                </div>
            </div>
        )
    }
}