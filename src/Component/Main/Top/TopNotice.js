import React from 'react'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'

export default function TopNotice() {
    return (
        <Box style={{
            backgroundColor: '#FBEFEF',
        }} display={'flex'}>
            <Skeleton variant={"rect"} width={'100%'} height={400}/>
        </Box>
    )
}