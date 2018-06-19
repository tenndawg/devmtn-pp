import React, { Component } from 'react';
import Header from '../VGMain/Header/Header';
import Boxes from '../../Sports/SportsMain/Boxes/Boxes';
import AllNews from '../VGMain/AllNews/AllNews';
import './xbox.css';
import axios from 'axios';

export default class Xbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false
        };
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/everything?sources=ign&apiKey=4c7e5e447d3c466b955949134414fcbf',{
            params: { count: this.props.totalResults || 5 }
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
        console.log(articles);
        var listItems = articles.map((article) =>
            <span key={article.title}><li><a href={article.url} target="_blank"><img src={article.urlToImage} alt='Poster'/><br/> <div className="titles"><b>{article.title}</b></div></a><br/> <div className="description">{article.description}</div><br/></li></span>
        );

        var block1 = articles[0].urlToImage;
        var block2 = articles[1].urlToImage;
        var block3 = articles[2].urlToImage;
        var block4 = articles[3].urlToImage;
        var block5 = articles[4].urlToImage;

        return (
            <div>
                <Header />
                <div className="appImg">
                    <img src={require("../../../img/xboxlogo.jpg")} alt="Video Game" className="pic"/>
                </div>
                <div className="boxStyle">
                    <Boxes mainBlock={block1} title1={articles[0].title} quad1={block2} title2={articles[1].title} quad2={block3} title3={articles[2].title} quad3={block4} title4={articles[3].title} quad4={block5} title5={articles[4].title} />
                </div>
                <AllNews />
            </div>
        )
    }
}