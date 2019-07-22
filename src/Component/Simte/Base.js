import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ToolbarBase from '../Toolbar/Base'
import FooterBase from '../Footer/Base'

import {styles} from "../Styles/Simte";
import {withStyles} from "@material-ui/core/styles/index";

import {step} from '../Contents/Simte'
import Study from './Study'

export default withStyles(styles)(function SimteBase(props) {
    const {classes} = props;
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth={"lg"}>
                <ToolbarBase subTitleName={"Simte"}/>

                <div className={classes.noticeBase}>
                    <Study classes={classes} step={step}/>
                </div>

                <FooterBase/>
            </Container>
        </React.Fragment>
    );
})