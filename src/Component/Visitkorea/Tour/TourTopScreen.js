import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Skeleton from '@material-ui/lab/Skeleton';

export default function TourTopScreen(props) {
    const {classes} = props;
    return (
        <Container className={classes.container} fixed>
            <AppBar/>
            <Skeleton variant={"rect"} width={'100%'} height={400}/>
        </Container>
    )
}