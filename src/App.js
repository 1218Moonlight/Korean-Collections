import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeBase from './Home/Base'

export default function App() {
    return (
            <Router>
                    <Switch>
                        <Route exact path="/" component={HomeBase}/>
                        {/*<Route path="/about" component={}/>*/}
                    </Switch>
            </Router>
    )
}