import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SpeciesDetails extends Component {

    render() {
       
    return(
        <div style={{color:'lightyellow'}}>
           <span style={{fontSize:'32px',lineHeight:'32px',color:'lightblue'}}>{this.props.ship.name}</span><br/>
           <hr/>
           {
           Object.keys(this.props.ship).map((key, i) => {
            if (key !== "people" && key !== "url" && key !== "films" && key !== "starships" && key !== "homeworld") {
              return (
                <span key={i}>
                  <span style={{ color: 'lightgreen', marginRight: '4px' }}>{key}:</span>
                  <span style={{ color: 'lightyellow' }}>{this.props.ship[key]}</span><br />
                </span>

              )
            }
          })}


        <span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>Films: </span>{this.props.ship.films && this.props.ship.films.map(film => {
          let idStr = film.split('/');
          let filmID = idStr[5];
          return (

            <Link to={{ "pathname": `/film/${filmID}` }}> <img src={`${film.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}<p />
        <span style={{ color: 'lightgreen', verticalAlign: 'middle' }}>People: </span>{this.props.ship.people && this.props.ship.people.map(person => {
          let idStr = person.split('/');
          let personID = idStr[5];
          return (

            <Link to={{ "pathname": `/person/${personID}` }}> <img src={`${person.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg')}1.jpg`} style={{ display: 'inline', width: '60px', border: '1px solid white', height: '60px', marginRight: '5px', verticalAlign: 'middle' }} /></Link>
          )
        })}<p />
      </div>
    )
  }
}

export default SpeciesDetails