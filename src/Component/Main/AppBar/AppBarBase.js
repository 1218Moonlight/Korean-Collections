import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {styles} from '../../../Resources/Styles/Main/AppBar'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';

import MenuBase from './Menu/MenuBase'
import TitleBase from './Title/TitleBase'

import useScrollTrigger from "@material-ui/core/useScrollTrigger/index";

const useStyles = makeStyles(styles);

function HideOnScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={'down'} in={!trigger}>
            {children}
        </Slide>
    )
}

export default function AppBarBase(props) {
    const classes = useStyles();
    return (
        <HideOnScroll {...props}>
            <AppBar className={classes.AppBar} elevation={0}>
                <Toolbar>
                    <MenuBase/>
                    <TitleBase classes={classes}/>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}