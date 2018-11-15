import React from 'react';


export default class PlayList extends React.Component {

    render() {

        let playlist = this.props.playlist
        return (
          <div style={{width: '25%', display: 'inline-block', paddingBottom: '30px', paddingTop: '20px'}}>
            <img src={playlist.imageUrl} alt="image" style={{width: '50%'}}/>
            <h3 style={{padding: '5px', margin: '0'}}>{playlist.name}</h3>
            <ul>
              {playlist.songs.map(song =>
                <li>{song.name}</li>
              )}
            </ul>
          </div>
        );
        
    }

}