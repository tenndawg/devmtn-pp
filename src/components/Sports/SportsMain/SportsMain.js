import React, {Component} from 'react';
import Header from './Header/Header';
import NewsTicker from './NewsTicker/NewsTicker';

export default class SportsMain extends Component {
    render() {
        return (
            <div>
                <Header/>
                <NewsTicker/>
            </div>
        )
    }
}