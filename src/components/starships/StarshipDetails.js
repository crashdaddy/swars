import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StarshipDetails extends Component {

  render() {

    return (
      <div style={{ color: 'lightyellow' }}>
        <span style={{ fontSize: '32px', lineHeight: '32px', color: 'lightblue' }}>{this.props.ship.name}</span><br />
        <hr />
        <span style={{ color: 'lightgreen' }}>Model: </span>{this.props.ship.model}<br />
        <span style={{ color: 'lightgreen' }}>Mfg: </span>{this.props.ship.manufacturer}<br />
        <span style={{ color: 'lightgreen' }}>Cost: </span>{parseInt(this.props.ship.cost_in_credits).toLocaleString()}<br />
        <span style={{ color: 'lightgreen' }}>Length: </span>{this.props.ship.length}<br />
        <span style={{ color: 'lightgreen' }}>Max Atm. Spd: </span>{this.props.ship.max_atmosphering_speed}<br />
        <span style={{ color: 'lightgreen' }}>Crew: </span>{this.props.ship.crew}<br />
        <span style={{ color: 'lightgreen' }}>Psgrs: </span>{this.props.ship.passengers}<br />
        <span style={{ color: 'lightgreen' }}>Cargo Cap: </span>{parseInt(this.props.ship.cargo_capacity).toLocaleString()}<br />
        <span style={{ color: 'lightgreen' }}>Cons.: </span>{this.props.ship.consumables}<br />
        <span style={{ color: 'lightgreen' }}>HyperDrive: </span>{this.props.ship.hyperdrive_rating}<br />
        <span style={{ color: 'lightgreen' }}>MGLT: </span>{this.props.ship.MGLT}<br />
        <span style={{ color: 'lightgreen' }}>Class: </span>{this.props.ship.starship_class}<br />
        <span style={{ color: 'lightgreen' }}>Pilots: </span>{this.props.ship.pilots && this.props.ship.pilots.map(pilot => {
          let idStr = pilot.split('/');
          let pilotID = idStr[5];
          return (

            <Link to={{ "pathname": `/person/${pilotID}` }}> <img src={`${pilot.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px' }} /></Link>
          )
        })}

        <span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Films: </span>{this.props.ship.films && this.props.ship.films.map(film => {
          let idStr = film.split('/');
          let filmID = idStr[5];
          return (

            <Link to={{ "pathname": `/film/${filmID}` }}> <img src={`${film.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}
      </div>
    )
  }
}

export default StarshipDetails