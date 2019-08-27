import React from 'react'
import Button from '@material-ui/core/Button'

export default function TourPagination(props) {
    const {handleChangeIndexDown, handleChangeIndexUp, page}=props;
    return(
        <div align="center" style={{margin:4}}>
            <Button onClick={handleChangeIndexDown}>BEFOR</Button>
            <Button color={'primary'}>{page}</Button>
            <Button onClick={handleChangeIndexUp}>NEXT</Button>
        </div>
    )
}