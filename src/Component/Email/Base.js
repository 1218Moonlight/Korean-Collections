import React from 'react'
import {styles} from "../Styles/Email";
import {withStyles} from "@material-ui/core/styles/index";
import EmailMain from './EmailMain'
import ToolbarBase from '../Toolbar/Base'

export default withStyles(styles)(class EmailBase extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <ToolbarBase>
                    <EmailMain classes={classes}/>
            </ToolbarBase>
        )
    }
});