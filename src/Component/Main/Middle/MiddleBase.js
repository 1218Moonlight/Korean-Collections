import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Skeleton from '@material-ui/lab/Skeleton'

export default function MiddleBase() {
    return (
        <Container maxWidth={'md'}>
            <Box style={{backgroundColor: '#F5A9F2',}} display={'flex'} justifyContent="center">
                <Grid container justify={"center"} spacing={2} style={{display: 'flex'}}>
                    {[0, 1, 2, 3, 4].map(value => (
                        <Grid item key={value}>
                            <Skeleton width={250} height={250}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}