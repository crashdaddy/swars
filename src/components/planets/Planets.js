import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';


class Planets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextPage: "https://swapi.dev/api/planets/",
            starships: []
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.infiniteScroll);
        this.getData();
    }

    getData = () => {
        
        this.fetchAPI(this.state.nextPage).then(data => {
            console.log(data)
            this.setState({
                nextPage: data.next,
                starships: [...this.state.starships,...data.results]
            })
        })
    }

    infiniteScroll = () => {
        // End of the document reached?
        if (window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight){
         
           this.getData();           
        }
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
        let starshipList = this.state.starships;
        let shadowStyle = {
            WebkitBoxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            MozBoxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            boxShadow: '5px 5px 5px 0px rgba(255, 255, 255, 0.25)',
            textAlign: 'center', width: '300px', 
            margin: '15px', backgroundColor: 'lightgrey',color:'darkgrey',
            position: 'relative', height: '200px'
        }
        return (
            <div>
                {starshipList ?
                    <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around' }}>
                        {starshipList.map((starship, idx) =>{
                            let idStr = starship.url.split('/');
                             let starshipID = idStr[5];
                          return(  <Link to={{"pathname": `/planet/${starshipID}`}} >
                            <Paper key={idx} elevation={3} style={shadowStyle}>{starship.name}
                                <img src={`${starship.url.replace('swapi.dev/api', 'crazyhappyfuntime.com/swimg')}1.jpg`} style={{ width: '100%', height: '126px', position: 'absolute', bottom: '2px', left: '0px' }} />
                            </Paper>
                            </Link>)
                    })}
                    </div>
                    :
                    <div>Loading data</div>
                }
            </div>
        )
    }
}

export default Planets