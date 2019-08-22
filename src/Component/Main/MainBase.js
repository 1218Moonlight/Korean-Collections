import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBarBase from './AppBar/AppBarBase'
import TopBase from './Top/TopBase'
import MiddleBase from './Middle/MiddleBase'
import BottomBase from './Bottom/BottomBase'


// Material-Ui API = https://material-ui.com/system/api/
export default function MainBase() {
    return (
        <React.Fragment>
            <CssBaseline/>

            <AppBarBase/>
            <TopBase/>
            <MiddleBase/>
            <BottomBase/>

        </React.Fragment>
    )
}