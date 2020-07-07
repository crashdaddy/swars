import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';


class Starship extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starships: []
        }
    }

    componentDidMount = () => {
        this.getData();
    }

    getData = () => {
        let starshipURL = "https://swapi.dev/api/starships/"+this.props.match.params.id;
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
               {starship.name}
            </div>
        )
    }
}

export default Starship