import React from 'react'
import ToolbarBase from '../Toolbar/Base'
import {styles} from "../../Resources/Styles/Notice"
import {withStyles} from "@material-ui/core/styles/index"
import NoticeStepper from "./NoticeStepper"
import {posts} from '../../Resources/Contents/NoticePosts'
import DialogBase from '../Dialog/Base'

export default withStyles(styles)(function NoticeBase(props) {
    const {classes} = props;
    return (
            <DialogBase
                render={({HandleClickOpen}) => (
                    <ToolbarBase>
                        <NoticeStepper classes={classes} posts={posts} dialogHandleClickOpen={HandleClickOpen}/>
                    </ToolbarBase>
                )}
            />
    );
})