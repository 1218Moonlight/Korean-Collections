import React, {Component} from 'react';
import {styles} from "../Styles/Collections";
import {withStyles} from "@material-ui/core/styles/index";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ToolbarBase from '../Toolbar/Base'
import FooterBase from '../Footer/Base'

import CollectionsPosts from './CollectionsPosts'
import CollectionsSearch from './CollectionsSearch'

export default withStyles(styles)(class CollectionsBase extends Component {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth={"lg"}>
                    <ToolbarBase subTitleName={"Collections"}/>

                    <div className={classes.collectionsBase}>
                        <CollectionsSearch classes={classes}/>
                        <CollectionsPosts classes={classes}/>
                    </div>

                    <FooterBase/>
                </Container>
            </React.Fragment>
        );
    }
})