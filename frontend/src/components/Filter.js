import React from 'react';


export default class Filter extends React.Component {

    render() {

        return (
          <div style={{marginBottom:'20px'}}>
            <img alt=""/>
            <h3><span>Search:</span></h3><input type="text" onKeyUp={event => 
              this.props.onTextChange(event.target.value)
            }/>
          </div>
        );
        
    }

}