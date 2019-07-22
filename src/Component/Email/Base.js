import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from '../Styles/Main'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import EmailTitle from './EmailTitle'
import EmailMain from './EmailMain'

import ToolbarBase from '../Toolbar/Base'
import FooterBase from '../Footer/Base'

export default withStyles(styles)(class EmailBase extends Component {

    render() {
        // const {classes} = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth={"lg"}>
                    <ToolbarBase/>
                    <EmailTitle/>
                    <EmailMain/>
                    <FooterBase/>
                </Container>
            </React.Fragment>
        )
    }
});