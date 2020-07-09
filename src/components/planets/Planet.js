import React, { Component } from 'react';
import PlanetDetails from './PlanetDetails';
import PlanetImage from './PlanetImage';


class Planet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starships: null
        }
    }

    componentDidMount = () => {
        this.getData();
    }

    getData = () => {
        let starshipURL = "https://swapi.dev/api/planets/"+this.props.match.params.id;
        this.fetchAPI(starshipURL).then(data => {
            console.log(data)
            this.setState({
                starships: data
            })
        })
    }

   
    fetchAPI = async (url) => {

        let apiURL = url;
        try {
            const resp = await fetch(apiURL)
            return resp.json()
        } catch (err) {
            console.log(err)
        }
    }


    render() {
        let starship = this.state.starships;
        let shadowStyle = {
            WebkitBoxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            MozBoxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            boxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            textAlign: 'center', width: '300px', 
            margin: '15px', backgroundColor: 'lightgrey',color:'darkgrey',
            position: 'relative', height: '200px'
        }
        return (
            <div style={{marginTop:'60px'}}>
                {starship ? 
               <div style={{width:'100',display:'flex',flexFlow:'row wrap',alignItems:'flex-start',alignContent:'space-between',justifyContent:'space-around'}}>
               <div style={{width:'40%'}}><PlanetDetails ship={starship} /></div>
               <div style={{width:'40%',height:'400px'}}><PlanetImage ship={starship}/></div>
               </div>
               :
               ''
                }
            </div>
        )
    }
}

export default Planet