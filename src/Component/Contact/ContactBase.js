import React from 'react'
import {styles} from "../../Resources/Styles/Contact";
import {withStyles} from "@material-ui/core/styles/index";
import ContactMail from './ContactMail'
import TitleBarBase from '../A_TitleBar/TitleBarBase'

export default withStyles(styles)(class ContactBase extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <TitleBarBase>
                    <ContactMail classes={classes}/>
            </TitleBarBase>
        )
    }
});