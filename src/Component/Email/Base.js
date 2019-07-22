import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import EmailMain from './EmailMain'

import ToolbarBase from '../Toolbar/Base'
import FooterBase from '../Footer/Base'
import {styles} from "../Styles/Email";
import {withStyles} from "@material-ui/core/styles/index";

export default withStyles(styles)(class EmailBase extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth={"lg"}>
                    <ToolbarBase subTitleName={"Contact"}/>

                    <div className={classes.emailBase}>
                        <EmailMain classes={classes}/>
                    </div>

                    <FooterBase/>
                </Container>
            </React.Fragment>
        )
    }
});