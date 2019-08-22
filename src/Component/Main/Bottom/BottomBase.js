import React from 'react'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'

export default function BottomBase(){
    return(
        <Box style={{backgroundColor: '#FA5858',}} display={'flex'} justifyContent="center">
            <Skeleton width={600} height={300}/>
        </Box>
    )
}