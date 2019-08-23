import React, {Component} from 'react';
import {styles} from "../../Resources/Styles/Collections";
import {withStyles} from "@material-ui/core/styles/index";
import TitleBarBase from '../A_TitleBar/TitleBarBase'
import CollectionsPosts from './CollectionsPosts'
import CollectionsSearch from './CollectionsSearch'
import {posts} from '../../Resources/Contents/CollectionsPosts'
import DialogBase from '../Dialog/Base'

export default withStyles(styles)(class CollectionsBase extends Component {
    state = {
        posts: posts,
        postsSize: posts.length,
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

    render() {
        const {classes} = this.props;
        return (
            <DialogBase
                render={({HandleClickOpen}) => (
                    <TitleBarBase>
                        <CollectionsSearch classes={classes} handleSearchFieldChange={this.handleSearchFieldChange}/>
                        <CollectionsPosts classes={classes} posts={this.state.posts} postsSize={this.state.postsSize}
                                          dialogHandleClickOpen={HandleClickOpen}/>
                    </TitleBarBase>
                )}
            />
        );
    }
})