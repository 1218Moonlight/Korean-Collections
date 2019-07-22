import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import HomeBase from './Component/Home/Base'
import EmailBase from './Component/Email/Base'

export default function App() {
    return (
            <Router basename={'/'}>
                    <Switch>
                        <Route exact path="/" component={HomeBase}/>
                        <Route path="/Email" component={EmailBase}/>
                    </Switch>
            </Router>
    )
}