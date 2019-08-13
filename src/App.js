import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NoticeBase from './Component/Notice/Base'
import CollectionsBase from './Component/Collections/Base'
import EmailBase from './Component/Email/Base'
import SimteBase from './Component/Simte/Base'
import TourBase from './Component/Tour/Base'

export default function App() {
    return (
        <Router basename={'/'}>
            <Switch>
                <Route exact path={"/"} component={NoticeBase}/>
                <Route path={"/Collections"} component={CollectionsBase}/>
                <Route path={"/Contact"} component={EmailBase}/>
                <Route path={"/SimteToKorean"} component={SimteBase} />
                <Route path={"/Tour"} component={TourBase} />
            </Switch>
        </Router>
    )
}