import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfoDisplay from './components/info-display/InfoDisplay';
import LargeImage from './components/large-image/LargeImage';
import ThumbnailSelect from './components/thumbnail-select/ThumbnailSelect';
import Book from './components/book/Book';
import data from './meta.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            selected: data[Object.keys(data)[0]]
        };
        this.select = this.select.bind(this);
    }

    render() {
        return (
            <div className="App">
                <Book selected={this.state.selected}/>
                <ThumbnailSelect data={this.state.data} onClick={this.select}/>
            </div>
        );
    }

    select(selectedId) {
        this.setState({selected: this.state.data[selectedId]})
    }
}

export default App;
