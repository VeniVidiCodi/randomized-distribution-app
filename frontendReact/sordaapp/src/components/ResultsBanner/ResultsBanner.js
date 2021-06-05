import React, {Component} from 'react';
import './ResultsBanner.css';

export default function ResultsBanner (props) {
    return(
        <div className="banner-container">
            BANNER
            <div className="title">props.title</div>
            <div className="idNum">props.idNum</div>
            <div className="stats">props.stats</div>
            <div className="description">props.description</div>
        </div>

    );
}