import React, { Component } from 'react';

class PersonDetails extends Component {

    render() {
       
    return(
        <div style={{color:'lightyellow'}}>
           <span style={{fontSize:'32px',lineHeight:'32px',color:'lightblue'}}>{this.props.ship.name}</span><br/>
           <hr/>
           {
           Object.keys(this.props.ship).map((key, i) => (
          <span key={i}>
            <span style={{color:'lightgreen',marginRight:'4px'}}>{key}:</span>
            <span style={{color:'lightyellow'}}>{this.props.ship[key]}</span><br/>
          </span>
            )
           )}
        </div>
    )}
}

export default PersonDetails