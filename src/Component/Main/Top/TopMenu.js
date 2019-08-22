import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'

export default function TopMenu(){
    return(
        <Box style={{backgroundColor: '#BFFF00'}} display={'flex'}>
            <Grid container justify={"center"} spacing={2} style={{display: 'flex', width: '100%'}}>
                {[0, 1, 2, 3, 4].map(value => (
                    <Grid item key={value}>
                        <Skeleton width={350} height={250}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}