import React from 'react';
import './ThumbnailSelect.css';

class ThumbnailSelect extends React.Component {
    constructor(props) {
        super(props);
        this.selectThumb = this.selectThumb.bind(this);
    }

    render() {
        const imgs = Object.keys(this.props.data).map(keyName => {
                let item = this.props.data[keyName];
                return (
                    <li className="item" key={item.id} onClick={this.selectThumb.bind(this, item.id)}>
                        <img id={"tn_" + item.id} src={"thumbnails/" + item.url} className="gallery__img" alt="thumbnail"/>
                    </li>
                );
            }
        );
        return (
            <div className="gallery-container">
                <h3>Thumbnail Select</h3>
                <ul className="gallery full">
                    {imgs}
                </ul>
            </div>
        );
    }

    selectThumb(id) {
        this.props.onClick(id);
    }
}

export default ThumbnailSelect;