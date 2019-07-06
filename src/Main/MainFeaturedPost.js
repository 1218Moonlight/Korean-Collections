import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import {styles} from '../Styles/MainFeaturedPost'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default withStyles(styles)(function MainFeaturedPost(props) {
    const {classes} = props;
    return (
        <React.Fragment>
            <main>
                <Paper className={classes.mainFeaturedPost}>
                    {
                        <img
                            style={{display: 'none'}}
                            src="https://source.unsplash.com/user/erondu"
                            alt={"background"}
                        />
                    }
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturedPostContent}>
                                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                    Title of a longer featured blog post
                                </Typography>
                                <Typography variant="h5" color="inherit" paragraph>
                                    Multiple lines of text that form the lede, informing new readers quickly and
                                    efficiently about what&apos;s most interesting in this post&apos;s contents.
                                </Typography>
                                <Link variant="subtitle1" href="#">
                                    Continue reading…
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        </React.Fragment>
    )
})