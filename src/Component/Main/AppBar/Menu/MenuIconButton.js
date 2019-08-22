import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function MenuIconButton(props){
    const {toggleDrawer} = props;
    return(
        <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon/>
        </IconButton>
    )
}