import React, { Component } from 'react';

class StarshipImage extends Component {

    render() {
        console.log(this.props)
        let shipUrl = this.props.ship.url;
        let imgUrl = shipUrl.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg') + '/1.jpg';
    return(
        <div>
            <img src={imgUrl} style={{objectFit:'cover'}}/>
        </div>
    )}
}

export default StarshipImage