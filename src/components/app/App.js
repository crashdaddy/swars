import React, {Component} from 'react';
import deathstar from './Deathstar2.svg';

class App extends Component {

    render() {
        return(
            <div style={{textAlign:'center',marginTop:'40px'}}>
                <img src={deathstar} style={{backgroundColor:'black',color:'white',zIndex:'-1',position:'absolute'}} /><br/>
                A long time ago, in a galaxy far far away...<br/>
                we built an app <br/>
                and we called it...<br/>
                <span style={{fontSize:'100px'}}>SWARS</span>
            </div>

        )
    }
}

export default App