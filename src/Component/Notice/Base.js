import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ToolbarBase from '../Toolbar/Base'
import FooterBase from '../Footer/Base'

import NoticePost from './NoticePost'
import {styles} from "../Styles/Notice";
import {withStyles} from "@material-ui/core/styles/index";

export default withStyles(styles)(function NoticeBase(props) {
    const {classes} = props;
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={"lg"}>
                <ToolbarBase subTitleName={"Notice"}/>

                <div className={classes.noticeBase}>
                    <NoticePost classes={classes}/>
                </div>

                <FooterBase/>
            </Container>
        </React.Fragment>
    );
})