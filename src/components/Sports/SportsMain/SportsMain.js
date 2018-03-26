import React, {Component} from 'react';
import Header2 from './Header2/Header2';
import NewsTicker from './NewsTicker/NewsTicker';
import Boxes from './Boxes/Boxes';
import AllNews2 from './AllNews2/AllNews2';

export default class SportsMain extends Component {
    render() {
        return (
            <div>
                <Header2/>
                <Boxes/>
                <AllNews2/>
            </div>
        )
    }
}