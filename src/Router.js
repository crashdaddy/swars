import React from 'react'
import { Switch, Route } from 'react-router';
import App from './components/app/App';
import Starships from './components/starships/Starships';
import Starship from './components/starships/Starship';

const Router = () => {
    return (
        <Switch>
            <Route exact path ="/" component={App} />
            {/* <Route path="/search/:query?" render={(props)=> <PuzzlePicker {...props} key={Date.now()} />}/>*/}
            <Route path="/starships" component={Starships}/>
            {/*<Route path="/login" component={Login}/>
            <Route path="/faves" component={Favorites}/>
                <Route path="/profile/:user" render={(props) => <Profile {...props} key={Date.now()} />} />*/}
            <Route path="/starship/:id" component={Starship} /> 
        </Switch>
    )
}

// Start Router function here //
export default Router