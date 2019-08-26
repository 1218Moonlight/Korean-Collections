import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import imgScreen from '../../../Resources/Img/Tour/palace_1920.jpg'

export default function TourTopScreen(props) {
    const {classes} = props;
    return (
        <Container className={classes.TopScreenContainer} fixed>
            <Box className={classes.TopScreenBox} style={{
                backgroundImage: `url(${imgScreen})`
            }}/>
        </Container>
    )
}