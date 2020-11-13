import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VehicleDetails extends Component {

  render() {

    return (
      <div style={{ color: 'lightyellow' }}>
        <span style={{ fontSize: '32px', lineHeight: '32px', color: 'lightblue' }}>{this.props.ship.name}</span><br />
        <hr />
        {
          Object.keys(this.props.ship).map((key, i) => {

            if (key !== "pilots" && key !== "url" && key !== "films") {
              return (
                <span key={i}>
                  <span style={{ color: 'lightgreen', marginRight: '4px' }}>{key}:</span>
                  <span style={{ color: 'lightyellow' }}>{this.props.ship[key]}</span><br />
                </span>
              )
            }
          })}
        <span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Pilots: </span>{this.props.ship.pilots && this.props.ship.pilots.map(pilot => {
          let idStr = pilot.split('/');
          let pilotID = idStr[5];
          return (

            <Link to={{ "pathname": `/person/${pilotID}` }}> <img src={`${pilot.replace('swapi.dev/api', 'swarsapi.herokuapp.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}
        <span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Films: </span>{this.props.ship.films && this.props.ship.films.map(film => {
          let idStr = film.split('/');
          let filmID = idStr[5];
          return (

            <Link to={{ "pathname": `/film/${filmID}` }}> <img src={`${film.replace('swapi.dev/api', 'swarsapi.herokuapp.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}
      </div>
    )
  }
}

export default VehicleDetails