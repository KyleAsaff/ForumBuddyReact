import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = 'green';
let defaultStyle = {
  color: defaultTextColor
};

class Aggregate extends Component {
  render() {
    return (
      <div className="aggregate">
        <h2 style={defaultStyle}>Number and Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img />
        <input type="text" />
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '25%' }}>
        <img />
        <h3> Playlist Name</h3>
        <ul>
          <li>Song1</li>
          <li>Song2</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
      </div>
    );
  }
}

export default App;
