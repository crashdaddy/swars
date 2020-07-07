import React from 'react'
import { Switch, Route } from 'react-router';
import App from './components/App';


const Router = () => {
    return (
        <Switch>
            <Route exact path ="/" component={App} />
            {/* <Route path="/search/:query?" render={(props)=> <PuzzlePicker {...props} key={Date.now()} />}/>
            <Route path="/puzzle/:id?" render={(props) => <App {...props}  key={Date.now()} />}/>
            <Route path="/login" component={Login}/>
            <Route path="/faves" component={Favorites}/>
                <Route path="/profile/:user" render={(props) => <Profile {...props} key={Date.now()} />} />
            <Route path="/help" component={LandingPage} /> */}
        </Switch>
    )
}

// Start Router function here //
export default Router