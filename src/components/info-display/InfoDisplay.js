import React from 'react';
import './InfoDisplay.css';

class InfoDisplay extends React.Component {
    render() {
        this.people = this.props.people.map((item, key) =>
            <li key={key}>{item}</li>
        );
        return (
            <div className="outline" style={{flexGrow: 1}}>
                <h1>{this.props.name}</h1>
                <h3>People</h3>
                <ul>
                    {this.people}
                </ul>
                <h3>Location</h3>
                <span>{this.props.location}</span>
                <h3>Date</h3>
                <span>{this.props.date}</span>
            </div>
        );
    }
}

export default InfoDisplay;