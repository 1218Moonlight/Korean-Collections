import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ToolbarBase from './Toolbar/Base'
import MainBase from './Main/Base'

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={"lg"}>
                <ToolbarBase/>
                <MainBase/>
            </Container>
        </React.Fragment>
    );
}

export default App;
