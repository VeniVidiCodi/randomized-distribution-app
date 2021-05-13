import React, {Component} from 'react';
import './ResultCard.css';
import { nanoid } from 'nanoid';

class ResultCard extends Component {
    render() {
        return(
            <div className="card-container">
                <div className="group-card--header">
                    { <div className="group-title">{this.props.groupNumber + 1}. {this.props.title}</div> }
                </div>
                <div className="group-items--display">
                    { <div> { this.props.persons.map((person, index) =>
                            (person.groupNum === this.props.groupNumber + 1) ? <p key={nanoid()}>{person.name}</p> : <p key={nanoid()}></p>
                        )}
                    </div> }
                </div>
            </div>

        );
    }
}

export default ResultCard;
