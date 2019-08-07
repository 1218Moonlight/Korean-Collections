import React from 'react'
import ToolbarBase from '../Toolbar/Base'
import {styles} from "../../Resources/Styles/Notice"
import {withStyles} from "@material-ui/core/styles/index"
import NoticeStepper from "./NoticeStepper"
import {posts} from '../Contents/NoticePosts'

export default withStyles(styles)(function NoticeBase(props) {
    const {classes} = props;
    return (
        <ToolbarBase>
            <NoticeStepper classes={classes} tutorialSteps={posts}/>
        </ToolbarBase>
    );
})