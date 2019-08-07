import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


export default (class CollectionsPosts extends Component {
    state = {
        page: 1,
        start: 0,
        end: 8,
        collectionsCount: 8,
    };

    handleChangeIndexUp = () => {
        if (this.props.postsSize > this.state.page * this.state.collectionsCount) {
            this.setState({
                page: this.state.page + 1,
                start: this.state.start + this.state.collectionsCount,
                end: this.state.end + this.state.collectionsCount
            })
        }
    };

    handleChangeIndexDown = () => {
        if (this.state.start !== 0) {
            this.setState({
                page: this.state.page - 1,
                start: this.state.start - this.state.collectionsCount,
                end: this.state.end - this.state.collectionsCount
            })
        }
    };

    render() {
        const {classes, posts, dialogHandleClickOpen} = this.props;
        const target = posts.slice(this.state.start, this.state.end);
        return (
            <div>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        {target.map(image => (
                            <Grid item key={image.title} xs={6} md={3}>
                                <ButtonBase
                                    onClick={dialogHandleClickOpen}
                                    focusRipple
                                    key={image.title}
                                    className={classes.image}
                                    value={JSON.stringify(image)}
                                    focusVisibleClassName={classes.focusVisible}>
                                      <span className={classes.imageSrc}
                                            style={{
                                                backgroundImage: `url(${image.path})`,
                                            }}/>
                                    <span className={classes.imageBackdrop}/>
                                    <span className={classes.imageButton}>
                                        <Typography
                                            component="span"
                                            variant="subtitle1"
                                            color="inherit"
                                            className={classes.imageTitle}>
                                          {image.title}
                                            <span className={classes.imageMarked}/>
                                        </Typography>
                                      </span>
                                </ButtonBase>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <div align="center">
                    <Button onClick={this.handleChangeIndexDown}>BEFOR</Button>
                    <Button color={'primary'}>{this.state.page}</Button>
                    <Button onClick={this.handleChangeIndexUp}>NEXT</Button>
                </div>
            </div>
        )
    }
})