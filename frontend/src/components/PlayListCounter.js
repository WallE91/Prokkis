import React from 'react';


export default class PlayListCounter extends React.Component {

    render() {
        return (
          <div style={{display : 'inline-block'}}>
            <h2>{this.props.playlists.length} Playlists</h2>
          </div>
        );
    }

}