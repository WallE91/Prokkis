import React from 'react';


export default class PlayList extends React.Component {

    render() {

        let playlist = this.props.playlist
        return (
          <div style={{width: '25%', display: 'inline-block'}}>
            <img src={playlist.imageUrl} alt="" style={{width: '50%'}}/>
            <h3>{playlist.name}</h3>
            <ul>
              {playlist.songs.map(song =>
                <li>{song.name}</li>
              )}
            </ul>
          </div>
        );
        
    }

}