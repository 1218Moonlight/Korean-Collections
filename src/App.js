import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ToolbarBase from './Toolbar/Base'

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={"lg"}>
                <ToolbarBase />
            </Container>
        </React.Fragment>
    );
}

export default App;
