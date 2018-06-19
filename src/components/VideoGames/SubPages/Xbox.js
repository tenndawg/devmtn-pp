import React, {Component} from 'react';
import Header from '../VGMain/Header/Header';
import Boxes from '../../Sports/SportsMain/Boxes/Boxes';
import AllNews from '../VGMain/AllNews/AllNews';

export default class Xbox extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>Xbox</h1>
                <Boxes/>
                <AllNews/>
            </div>
        )
    }
}