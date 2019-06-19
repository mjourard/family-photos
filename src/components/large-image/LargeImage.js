import React from 'react';
import './LargeImage.css';

class LargeImage extends React.Component {
    render() {
        return (
            <div className="outline img-container">
                <img src={"imgs/" + this.props.url} alt="example"/>
            </div>
        );
    }
}

export default LargeImage;