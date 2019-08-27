import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import TourPagination from './TourPagination'

export default class TourBanner extends React.Component {
    state = {
        page: 1,
        start: 0,
        end: 8,
        collectionsCount: 8,
    };

    handleChangeIndexUp = () => {
        if (this.props.itemsSize > this.state.page * this.state.collectionsCount) {
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
        const {classes, items, TourImgHandler, HandleClickOpen} = this.props;
        const target = items.slice(this.state.start, this.state.end);

        return (
            <Container className={classes.TopBannerContainer} fixed>
                <TourPagination handleChangeIndexDown={this.handleChangeIndexDown}
                                handleChangeIndexUp={this.handleChangeIndexUp} page={this.state.page}/>
                <Grid justify={'center'} container spacing={2}>
                    {target.map((item, index) => (
                        <Grid key={index} item xs={11} md={3}>
                            <Card style={{width: 300}} raised>
                                <marquee>
                                    <CardHeader
                                        subheader={item.enName}
                                    />
                                </marquee>
                                <CardMedia
                                    className={classes.media}
                                    image={TourImgHandler(item.imgName)}
                                    title={item.enName}/>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.address}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={HandleClickOpen} data-value={JSON.stringify(item)} size="small"
                                            color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <TourPagination handleChangeIndexDown={this.handleChangeIndexDown}
                                handleChangeIndexUp={this.handleChangeIndexUp} page={this.state.page}/>
            </Container>
        )
    }
}