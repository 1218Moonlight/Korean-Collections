import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ToolbarBase from '../Toolbar/Base'
import FooterBase from '../Footer/Base'

import NoticePost from './NoticePost'

export default function NoticeBase() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={"lg"}>
                <ToolbarBase/>
                <NoticePost/>
                <FooterBase/>
            </Container>
        </React.Fragment>
    );
}