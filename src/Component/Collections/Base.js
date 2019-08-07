import React, {Component} from 'react';
import {styles} from "../../Resources/Styles/Collections";
import {withStyles} from "@material-ui/core/styles/index";
import ToolbarBase from '../Toolbar/Base'
import CollectionsPosts from './CollectionsPosts'
import CollectionsSearch from './CollectionsSearch'
import {posts} from '../Contents/CollectionsPosts'
import DialogBase from '../Dialog/Base'


export default withStyles(styles)(class CollectionsBase extends Component {
    state = {
        posts: posts,
        postsSize: posts.length,
        open: false,
        dialogValue: ''
    };
    handleSearchFieldChange = (e) => {
        let searchText = e.target.value.toLowerCase();
        let collections = [];

        Object.keys(posts).forEach(index => {
            let title = posts[index].title.toLowerCase();
            if (title.indexOf(searchText) !== -1) {
                collections.push(posts[index])
            }
        });

        this.setState({
            posts: collections,
            postsSize: collections.length
        })
    };

    dialogHandleClickOpen = (e) => {
        e.preventDefault();
        console.log();
        this.setState({
            open: true,
            dialogValue: JSON.parse(e.currentTarget.value)
        })
    };

    dialogHandleClose = () => {
        this.setState({
            open: false
        })
    };


    render() {
        const {classes} = this.props;
        return (
            <ToolbarBase>
                <DialogBase dialogHandleClose={this.dialogHandleClose} open={this.state.open}
                            dialogValue={this.state.dialogValue}/>
                <CollectionsSearch classes={classes} handleSearchFieldChange={this.handleSearchFieldChange}/>
                <CollectionsPosts classes={classes} posts={this.state.posts} postsSize={this.state.postsSize}
                                  dialogHandleClickOpen={this.dialogHandleClickOpen}/>
            </ToolbarBase>
        );
    }
})