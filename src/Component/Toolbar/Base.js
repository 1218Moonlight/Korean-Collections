import React from 'react';
import TitleBar from './TitleBar'
import SecondBar from './MenuBar'
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../Styles/Toolbar";

export default withStyles(styles)(function ToolbarBase(props) {
    const {classes} = props;
    return (
        <div className={classes.toolbarBase}>
            <TitleBar classes={classes}/>
            <SecondBar classes={classes}/>
        </div>
    )
})