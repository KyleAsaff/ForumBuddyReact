import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = 'green';
let defaultStyle = {
  color: defaultTextColor
};

let fakeServerData = {
  user: {
    name: 'Kyle',
    playlists: [
      {
        name: 'my favories',
        songs: [
          {name: 'blue1', duration: 12334},
          {name: 'blue2', duration: 12334},
          {name: 'blu3e', duration: 12314}
        ]
      },
      {
        name: 'my jokes',
        songs: [
          {name: 'bluzzze1', duration: 12334},
          {name: 'blueddsa2', duration: 12334},
          {name: 'blu3sadae', duration: 12314}
        ]
      },
      {
        name: 'my lopes',
        songs: [
          {name: 'bluse1', duration: 12334},
          {name: 'blue2', duration: 12334},
          {name: 'blu3e', duration: 12314}
        ]
      }
    ]
  }
};

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    },[]);

    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div className="HoursCounter">
        <h2 style={defaultStyle}>{totalDuration} seconds</h2>
      </div>
    );
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div className="PlaylistCounter">
        <h2 style={defaultStyle}>{this.props.playlists.length} hours</h2>
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
        <h3>{this.props.playlist.name}</h3>
        <ul>
          {this.props.playlist.songs.map((song, index) =>
            <li key={index}>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} };
  }
  componentDidMount() {
    this.setState({
      serverData: fakeServerData
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user &&
          <div>
            <h1 style={{ ...defaultStyle }}>
              {this.state.serverData.user.name}
            </h1>
            <PlaylistCounter playlists={this.state.serverData.user && this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user && this.state.serverData.user.playlists} />
            <Filter />
            {this.state.serverData.user.playlists.map((playlist, index) =>
              <Playlist key={index} playlist={playlist} />
            )}
          </div>
        }

      </div>
    );
  }
}

export default App;
