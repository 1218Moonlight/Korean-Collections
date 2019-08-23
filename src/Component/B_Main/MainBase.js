import React from 'react'
import TitleBarBase from '../A_TitleBar/TitleBarBase'
import MainScreen from './MainScreen'
import {styles} from "../../Resources/Styles/B_Main";
import {makeStyles} from "@material-ui/core/styles/index";
import {items} from '../../Resources/Contents/B_Main'

const useStyles = makeStyles(styles);

// Material-Ui API = https://material-ui.com/system/api/
export default function MainBase() {
    const classes = useStyles();
    return (
        <TitleBarBase>
            <MainScreen classes={classes} items={items}/>
        </TitleBarBase>
    )
}