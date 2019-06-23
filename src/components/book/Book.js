import React from 'react';
import './Book.css';
import InfoDisplay from "../info-display/InfoDisplay";
import LargeImage from "../large-image/LargeImage";

class Book extends React.Component {
    render() {
        return (
            <div className="outer-container">
                <div className="outline album-container">
                    <div className="outline album-page">
                        <InfoDisplay people={this.props.selected.people}
                                     name={this.props.selected.name}
                                     location={this.props.selected.location}
                                     date={this.props.selected.date}
                                     className="page-contents"/>
                        {/*<div className="outline page-contents green">A</div>*/}
                    </div>
                    <div className="divider"></div>
                    <div className="outline album-page ">
                        {/*<div className="outline page-contents blue ">A</div>*/}
                        <LargeImage url={this.props.selected.url} className="page-contents"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;