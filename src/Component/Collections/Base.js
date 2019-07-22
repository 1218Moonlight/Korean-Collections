import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import ToolbarBase from '../Toolbar/Base'
import FooterBase from '../Footer/Base'

import HomePosts from './CollectionsPosts'
import HomeSearch from './CollectionsSearch'
import {styles} from "../Styles/Collections";
import {withStyles} from "@material-ui/core/styles/index";

export default withStyles(styles)(class CollectionsBase extends Component {
    render(){
        const {classes} = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth={"lg"}>
                    <ToolbarBase/>

                    <div className={classes.collectionsBase}>
                        <HomeSearch classes={classes}/>
                        <HomePosts classes={classes}/>
                    </div>

                    <FooterBase/>
                </Container>
            </React.Fragment>
        );
    }
})