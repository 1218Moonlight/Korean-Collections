import React from 'react';
import {styles} from "../Styles/Simte";
import {withStyles} from "@material-ui/core/styles/index";
import ToolbarBase from '../Toolbar/Base'
import {step} from '../Contents/Simte'
import Study from './Study'

export default withStyles(styles)(function SimteBase(props) {
    const {classes} = props;
    return (
        <ToolbarBase>
            <div className={classes.noticeBase}>
                <Study classes={classes} step={step}/>
            </div>
        </ToolbarBase>
    );
})