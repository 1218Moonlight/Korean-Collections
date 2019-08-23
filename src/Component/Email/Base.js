import React from 'react'
import {styles} from "../../Resources/Styles/Email";
import {withStyles} from "@material-ui/core/styles/index";
import EmailMain from './EmailMain'
import TitleBarBase from '../A_TitleBar/TitleBarBase'

export default withStyles(styles)(class EmailBase extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <TitleBarBase>
                    <EmailMain classes={classes}/>
            </TitleBarBase>
        )
    }
});