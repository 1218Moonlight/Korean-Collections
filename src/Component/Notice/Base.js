import React from 'react';
import ToolbarBase from '../Toolbar/Base'
import NoticePost from './NoticePost'
import {styles} from "../Styles/Notice";
import {withStyles} from "@material-ui/core/styles/index";

export default withStyles(styles)(function NoticeBase(props) {
    const {classes} = props;
    return (
        <ToolbarBase>
            <div className={classes.noticeBase}>
                <NoticePost classes={classes}/>
            </div>
        </ToolbarBase>
    );
})