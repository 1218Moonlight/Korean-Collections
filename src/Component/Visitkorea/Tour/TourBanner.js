import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'

export default function TourBanner(props) {
    const {classes, TourImgHandler, TourJson} = props;
    return (
        <Container className={classes.TopBannerContainer} fixed>
            <Grid justify={'center'} container spacing={2}>
                {TourJson.map((item, index) => (
                    <Grid key={index} item xs={8} md={8}>
                        <Card>
                            <CardHeader
                                title={item.이름}
                                subheader={item.주소}
                            />
                            <CardMedia
                                className={classes.media}
                                image={TourImgHandler(item.imgName)}
                                title={item.이름}
                            />
                            <CardContent>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}