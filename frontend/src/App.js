import React, { Component } from 'react';
import './App.css';
import queryString from 'query-string';

import Filter from './components/Filter';
import PlayList from './components/PlayList';
import PlayListCounter from './components/PlayListCounter';



//Defined variables, arrays and objects

let defaultStyle = {
  color: '#000'
};

/*
let fakeServerData = {
  user: {
    name: 'Ville',
    playlists: []
  }
};
*/




//APP COMPONENT ********************************************
class App extends Component {

  constructor() {
    super()
    this.state = {
      serverData: {},
      filterString: ''
    }
  }

  componentDidMount() {

    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    fetch('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
    .then(data => this.setState({
        user: {
          name: data.display_name
        }
    }))

    fetch('https://api.spotify.com/v1/me/playlists', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    }).then(response => response.json())
    .then(data => this.setState({
        playlists:(data.items || []).map(item => {    
          //console.log(data.items)     
          return { 
            name: item.name, 
            imageUrl: item.images[0].url,
            songs: []
          }
        })
    }))

  }

  render() {

    let playlistToRender = 
      this.state.user && 
      this.state.playlists 
        ? this.state.playlists.filter(playlist =>
            playlist.name.toLowerCase().includes(
              this.state.filterString.toLowerCase())) 
        : []

    return (
      //Check if there is any data available and wait one second before displaying it
      <div style={{...defaultStyle}} className="app">
        {this.state.user ?
        <div>
          <h1>{this.state.user.name}'s Playlists</h1>
          <PlayListCounter playlists={playlistToRender}/>
          <Filter onTextChange={text => {
            this.setState({filterString: text})
          }}/>
            {playlistToRender.map(playlist => 
              <PlayList playlist={playlist}/>
            )}
        </div> :  <button onClick={() => window.location = 'http://localhost:8888/login' }
                    style={{padding :'10px', fontSize :'24px', marginTop :'10px'}}>Sign in with Spotify</button>
        }
      </div>
    );

  }

}

export default App;