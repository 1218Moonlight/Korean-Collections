import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import MainBase from './Component/B_Main/MainBase'
import CollectionsBase from './Component/Collections/CollectionsBase'
import ContactBase from './Component/Contact/ContactBase'
import SimteBase from './Component/Simte/Base'
import InformationFoods from './Component/Visitkorea/Information/Foods'
import InformationTour from './Component/Visitkorea/Information/Tour'

export default function App() {
    return (
        <Router basename={'/'}>
            <Switch>
                <Route exact path={"/"} component={MainBase}/>
                <Route path={"/Home"} component={MainBase}/>
                <Route path={"/Collections"} component={CollectionsBase}/>
                <Route path={"/Contact"} component={ContactBase}/>
                <Route path={"/SimteToKorean"} component={SimteBase}/>
                <Route path={"/Foods"} component={InformationFoods}/>
                <Route path={"/Tour"} component={InformationTour}/>
            </Switch>
        </Router>
    )
}