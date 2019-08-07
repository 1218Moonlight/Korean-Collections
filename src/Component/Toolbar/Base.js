import React from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../Resources/Styles/Toolbar";

import TitleBar from './TitleBar'
import DrawerBar from './DrawerBar'

import CssBaseline from '@material-ui/core/CssBaseline';


export default withStyles(styles)(class ToolbarBase extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({
            open: true
        });
    };

    handleDrawerClose = () => {
        this.setState({
            open: false
        })
    };

    render() {
        const {classes, children} = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <TitleBar classes={classes} handleDrawerOpen={this.handleDrawerOpen} open={this.state.open}/>
                <DrawerBar classes={classes} handleDrawerClose={this.handleDrawerClose} open={this.state.open}/>
                <main className={classes.content}>
                    {children}
                </main>
            </div>
        )
    }
})