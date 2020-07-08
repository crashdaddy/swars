import React, { Component } from 'react';

class StarshipDetails extends Component {

    render() {
    return(
        <div>
           <span style={{fontSize:'24px'}}>{this.props.ship.name}</span><br/>
           <hr/>
           {this.props.ship.model}<br/>
    {this.props.ship.manufacturer}<br/>
    {this.props.ship.cost_in_credits}<br/>
    {this.props.ship.length}<br/>
    {this.props.ship.max_atmosphering_speed}<br/>
    {this.props.ship.crew}<br/>
    {this.props.ship.passengers}<br/>
    {this.props.ship.cargo_capacity}<br/>
    {this.props.ship.consumables}<br/>
    {this.props.ship.hyperdrive_rating}<br/>
    {this.props.ship.MGLT}<br/>
    {this.props.ship.starship_class}<br/>
        </div>
    )}
}

export default StarshipDetails