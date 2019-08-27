import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

export default function TourTopScreen(props) {
    const {classes, imgScreen} = props;
    return (
        <Container className={classes.TopScreenContainer} fixed>
            <Box className={classes.TopScreenBox} style={{
                backgroundImage: `url(${imgScreen})`
            }}/>
        </Container>
    )
}