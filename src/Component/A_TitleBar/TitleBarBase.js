import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles'
import {styles} from '../../Resources/Styles/A_TitleBar'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {items} from '../../Resources/Contents/A_TitleBar'
import MenuBase from './Menu/MenuBase'
import TitleBase from './Title/TitleBase'
import HideOnScroll from '../Z_Utils/HideOnScroll'

const useStyles = makeStyles(styles);

export default function TitleBarBase(props) {
    const classes = useStyles();
    const {children} = props;
    return (
        <React.Fragment>
            <CssBaseline/>
            <HideOnScroll>
                <AppBar className={classes.AppBar} elevation={0}>
                    <Toolbar>
                        <MenuBase classes={classes} items={items}/>
                        <TitleBase classes={classes}/>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {children}
        </React.Fragment>
    )
}