import React, {Component} from 'react';
import deathstar from './Deathstar2.svg';

class App extends Component {

    render() {
        return(
            <div style={{textAlign:'center',marginTop:'40px'}}>
                <img src={deathstar} style={{backgroundColor:'black',color:'white',zIndex:'-1',position:'absolute'}} /><br/>
                A long time ago, in a galaxy far far away...<br/>
                we built an app <br/>
                and we called that app...<br/>
                <span style={{fontSize:'100px'}}>SWARS</span>
                <div style={{fontSize:'10pt',fontFamily:'Tahoma',color:'lightgreen'}}>

                    Data provided by: <a href="https://swapi.dev/" target="blank" >Star Wars API</a>
                </div>
            </div>

        )
    }
}

export default App