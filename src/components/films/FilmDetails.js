import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FilmDetails extends Component {

  render() {

    return (
      <div style={{ color: 'lightyellow' }}>
        <span style={{ fontSize: '32px', lineHeight: '32px', color: 'lightblue' }}>{this.props.ship.name}</span><br />
        <hr />
        {
          Object.keys(this.props.ship).map((key, i) => {
            if (key !== "characters" && key !== "url" && key !== "starships" && key !== "vehicles" && key !== "species" && key !== "planets") {
              return (
                <span key={i}>
                  <span style={{ color: 'lightgreen', marginRight: '4px' }}>{key}:</span>
                  <span style={{ color: 'lightyellow' }}>{this.props.ship[key]}</span><br />
                </span>
              )
            }
          })}

        <span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Characters: </span><br/>{this.props.ship.characters && this.props.ship.characters.map(character => {
          let idStr = character.split('/');
          let characterID = idStr[5];
          return (

            <Link to={{ "pathname": `/person/${characterID}` }}><img src={`${character.replace('swapi.dev/api', 'swarsapi.herokuapp.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}<p/>

<span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Starships: </span><br/>{this.props.ship.starships && this.props.ship.starships.map(starship => {
          let idStr = starship.split('/');
          let starshipID = idStr[5];
          return (

            <Link to={{ "pathname": `/starship/${starshipID}` }}><img src={`${starship.replace('swapi.dev/api', 'swarsapi.herokuapp.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}<p/>

<span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>vehicles: </span><br/>{this.props.ship.vehicles && this.props.ship.vehicles.map(vehicle => {
          let idStr = vehicle.split('/');
          let vehicleID = idStr[5];
          return (

            <Link to={{ "pathname": `/vehicle/${vehicleID}` }}><img src={`${vehicle.replace('swapi.dev/api', 'swarsapi.herokuapp.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}<p/>

<span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Species: </span><br/>{this.props.ship.species && this.props.ship.species.map(specie => {
          let idStr = specie.split('/');
          let specieID = idStr[5];
          return (

            <Link to={{ "pathname": `/specie/${specieID}` }}><img src={`${specie.replace('swapi.dev/api', 'swarsapi.herokuapp.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}  <p/>

<span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Planets: </span><br/>{this.props.ship.planets && this.props.ship.planets.map(planet => {
          let idStr = planet.split('/');
          let planetID = idStr[5];
          return (

            <Link to={{ "pathname": `/planet/${planetID}` }}><img src={`${planet.replace('swapi.dev/api', 'swarsapi.herokuapp.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}<p/>
      </div>
    )
  }
}

export default FilmDetails