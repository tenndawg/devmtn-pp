import React, {Component} from 'react';
import Header2 from './Header2/Header2';
import NewsTicker from './NewsTicker/NewsTicker';
import Boxes from './Boxes/Boxes';
import AllNews2 from './AllNews2/AllNews2';

export default class SportsMain extends Component {
    render() {

        var NFL = require("../../../img/nflbg.jpg");
        var NBA = require("../../../img/nbabg.jpg");
        var NHL = require("../../../img/nhlbg.jpg");
        var MLB = require("../../../img/mlbbg.jpg");
        var MLS = require("../../../img/mlsbg.jpg");

        return (
            <div>
                <Header2/>
                <Boxes mainBlock={NFL} title1="NFL" quad1={NBA} title2="NBA" quad2={NHL} title3="NHL" quad3={MLB} title4="MLB" quad4={MLS} title5="MLS" />
                <AllNews2/>
            </div>
        )
    }
}