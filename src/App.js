import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import MainBase from './Component/Main/MainBase'
import NoticeBase from './Component/Notice/Base'
import CollectionsBase from './Component/Collections/Base'
import EmailBase from './Component/Email/Base'
import SimteBase from './Component/Simte/Base'
import InformationFoods from './Component/Visitkorea/Information/Foods'
import InformationTour from './Component/Visitkorea/Information/Tour'

export default function App() {
    return (
        <Router basename={'/'}>
            <Switch>
                <Route exact path={"/"} component={MainBase}/>
                <Route path={"/Home"} component={MainBase} />
                <Route path={"/Notice"} component={NoticeBase} />
                <Route path={"/Collections"} component={CollectionsBase}/>
                <Route path={"/Contact"} component={EmailBase}/>
                <Route path={"/SimteToKorean"} component={SimteBase} />
                <Route path={"/Foods"} component={InformationFoods} />
                <Route path={"/Tour"} component={InformationTour} />
            </Switch>
        </Router>
    )
}