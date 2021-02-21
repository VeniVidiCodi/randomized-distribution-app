import React, {Component} from 'react';
import './ResultsBanner.css';

class ResultsBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // value: null
        }

    }

    render() {
        return(
            <div className="banner-container">
                BANNER
                <div className="title">this.props.title</div>
                <div className="idNum">this.props.idNum</div>
                <div className="stats">this.props.stats</div>
                <div className="description">this.props.description</div>
            </div>

        );
    }
}

export default ResultsBanner;