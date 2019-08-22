import React from 'react'
import Box from '@material-ui/core/Box';
import MenuLists from './MenuLists'
import Drawer from '@material-ui/core/Drawer';

export default function MenuDrawer(props) {
    const {toggleDrawer, open, items, classes} = props;


    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            <Box
                onClick={toggleDrawer(false)}
                // onKeyDown={toggleDrawer(false)}
            >
                <MenuLists items={items} classes={classes}/>
            </Box>
        </Drawer>
    )
}