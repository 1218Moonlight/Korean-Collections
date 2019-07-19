import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ToolbarBase from './Toolbar/Base'
import MainBase from './Main/Base'
import FooterBase from './Footer/Base'


export default function HomeBase() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={"lg"}>
                <ToolbarBase/>
                <MainBase/>
                <FooterBase/>
            </Container>
        </React.Fragment>
    );
}