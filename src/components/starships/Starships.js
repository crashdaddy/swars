import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';


class Starships extends Component {
    constructor(props){
        super(props)
        this.state = {
            starships: [],
            show: false
        }
    }
    
    componentDidMount = () => {
        this.getData();
    }

getData = () => {
    let starshipsURL = "https://swapi.dev/api/starships/";

    this.fetchAPI(starshipsURL).then(data =>{
        console.log(data)
        this.setState({
            starships: data,
            show: true
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
        let starshipList = this.state.starships.results;
        return(
            <div>
                {starshipList ?
                <div style={{display:'flex',flexFlow:'row wrap',justifyContent:'space-around'}}>
                {starshipList.map(starship => 
                    <Paper elevation={3} style={{width:'225px',margin:'40px'}}>{starship.name}
                    <img src={`${starship.url.replace('swapi.dev/api','crazyhappyfuntime.com/swimg')}1.jpg`} style={{maxWidth:'100%'}} />
                    </Paper>
                    )}
                </div>
                :
                <div>No data</div>
                }
            </div>
        )
    }
}

export default Starships