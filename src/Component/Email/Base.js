import React, {Component} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import EmailTitle from './EmailTitle'
import EmailMain from './EmailMain'

import ToolbarBase from '../Toolbar/Base'
import FooterBase from '../Footer/Base'

export default (class EmailBase extends Component {

    render() {
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