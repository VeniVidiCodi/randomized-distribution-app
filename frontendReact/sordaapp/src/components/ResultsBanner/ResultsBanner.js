import React, {Component} from 'react';
import './ResultsBanner.css';

class ResultsBanner extends Component {
    render() {
        return(
            <div className="banner-container">
                BANNER
                <div className="title"></div>
                <div className="idNum"></div>
                <div className="stats"></div>
                <div className="description"></div>
            </div>

        );
    }
}

export default ResultsBanner;