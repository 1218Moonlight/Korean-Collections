import React from 'react';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ToolBarList from './ToolbarList'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';

export default (function DrawerBar(props) {
    const mainListItems = [
        {title: "Collections", icon: <ShoppingCartIcon/>},
        {title: "Contact", icon: <PeopleIcon/>},
    ];

    const secondListItems = [
        {title: "SimteToKorean", icon: <LayersIcon/>}
    ];

    const {classes, handleDrawerClose, open} = props;

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <List>
                <ToolBarList Items={mainListItems} subheader={"Main"}/>
                <ToolBarList Items={secondListItems} subheader={"Study"}/>
            </List>
        </Drawer>
    )
})