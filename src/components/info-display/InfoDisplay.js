import React from 'react';
import './InfoDisplay.css';

class InfoDisplay extends React.Component {
    render() {
        this.people = this.props.people.map((item, key) =>
            <li key={key}>{item}</li>
        );
        return (
            <div className="outline info-container">
                <h1>{this.props.name}</h1>
                <h3>People</h3>
                <ul>
                    {this.people}
                </ul>
                <h3>Location</h3>
                <span>{this.props.location}</span>
                <h3>Date</h3>
                <span>{this.props.date}</span>
                <h3>Description</h3>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default InfoDisplay;