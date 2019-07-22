import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ToolbarBase from '../Toolbar/Base'
import FooterBase from '../Footer/Base'

import HomePosts from './CollectionsPosts'
import HomeSearch from './CollectionsSearch'

export default function CollectionsBase() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={"lg"}>
                <ToolbarBase/>
                <HomeSearch/>
                <HomePosts/>
                <FooterBase/>
            </Container>
        </React.Fragment>
    );
}