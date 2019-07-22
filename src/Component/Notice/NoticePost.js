import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import {styles} from '../Styles/Main'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {posts} from '../Contents/NoticePosts'


export default withStyles(styles)(function NoticePost(props) {
    const {classes} = props;
    return (
        <div>
            {posts.map(post => (
                <Paper key={post.title} className={classes.mainFeaturedPost}>
                    {
                        <img
                            style={{display: 'none'}}
                            src="https://source.unsplash.com/user/erondu"
                            alt={"background"}
                        />
                    }
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturedPostContent}>
                                <Typography component="h5" variant="h5" color="inherit" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Link variant="subtitle1" href={post.link}>
                                    {post.link}
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </div>
    )
})