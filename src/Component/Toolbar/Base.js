import React from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../Resources/Styles/Toolbar";

import TitleBar from './TitleBar'
import DrawerBar from './DrawerBar'

import CssBaseline from '@material-ui/core/CssBaseline';


export default withStyles(styles)(function ToolbarBase(props) {
    const {classes, children} = props;
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <TitleBar classes={classes} handleDrawerOpen={handleDrawerOpen} open={open}/>
            <DrawerBar classes={classes} handleDrawerClose={handleDrawerClose} open={open}/>
            <main className={classes.content}>
                {children}
            </main>
        </div>
    )
})