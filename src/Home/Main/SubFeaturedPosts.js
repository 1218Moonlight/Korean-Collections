import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from '../Styles/Main'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {posts} from '../../Contents/SubFeaturedPost'

export default withStyles(styles)(class SubFeaturedPostsPagination extends Component {
    state = {
        page: 1,
        start: 0,
        end: 4
    };

    handleChangeIndexUp = () => {
        this.setState({
            page: this.state.page + 1,
            start: this.state.start + 4,
            end: this.state.end + 4
        })
    };

    handleChangeIndexDown = () => {
        this.setState({
            page: this.state.page - 1,
            start: this.state.start - 4,
            end: this.state.end - 4
        })
    };

    render() {
        const {classes} = this.props;
        const target = posts.slice(this.state.start, this.state.end);
        return (
            <React.Fragment>
                <div>
                    <Grid container spacing={4}>
                        {target.map(post => (
                            <Grid item key={post.title} xs={6} md={3}>
                                <Card>
                                    <CardMedia
                                        className={classes.media}
                                        image={"https://source.unsplash.com/random"}
                                        title={post.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant={'h6'} component={'h2'}>
                                            {post.title}
                                        </Typography>
                                        <Typography variant={"subtitle1"} color="textSecondary">
                                            {post.date}
                                        </Typography>
                                        <Typography variant={"subtitle1"} color="textSecondary">
                                            {post.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <div align="center">
                    <Button onClick={this.handleChangeIndexDown} className={classes.button} color={"primary"}
                            variant="contained">befor</Button>
                    <Button onClick={this.handleChangeIndexUp} className={classes.button} color={"primary"}
                            variant="contained">next</Button>
                </div>
            </React.Fragment>
        )
    }
})