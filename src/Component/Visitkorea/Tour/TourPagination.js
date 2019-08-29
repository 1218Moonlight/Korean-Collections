import React from 'react'
import Button from '@material-ui/core/Button'

export default function TourPagination(props) {
    const {handleChangeIndexDown, handleChangeIndexUp, page}=props;
    return(
        <div align="center" style={{margin:'1%'}}>
            <Button onClick={handleChangeIndexDown} variant="outlined" color="primary" >BEFORE</Button>
            <Button variant="outlined" color={'primary'} >{page}</Button>
            <Button onClick={handleChangeIndexUp} variant="outlined" color="primary" >NEXT</Button>
        </div>
    )
}