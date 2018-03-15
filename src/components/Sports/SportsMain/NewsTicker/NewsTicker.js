import React, {Component} from 'react';
import Marquee3k from 'marquee3000';

export default class NewsTicker extends Component {
    render() {
        Marquee3k.init()
        return(
            <div>
                <div class="marquee3k" 
                    data-speed="0.25"
                    data-reverse="bool"
                    data-pausable="bool">
                    
                    <h1>Some marquee content</h1>
                    <h2>More marquee stuff</h2>
                </div>
                {/* <Marquee3k/> */}
            </div>
        )
    }
}