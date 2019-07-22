import React from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../Styles/Toolbar";

import TitleBar from './TitleBar'
import SecondBar from './MenuBar'
import SubTitle from './SubTitle'



export default withStyles(styles)(function ToolbarBase(props) {
    const {classes, subTitleName} = props;
    return (
        <div className={classes.toolbarBase}>
            <TitleBar classes={classes}/>
            <SecondBar classes={classes}/>
            <SubTitle classes={classes} subTitleName={subTitleName}/>
        </div>
    )
})