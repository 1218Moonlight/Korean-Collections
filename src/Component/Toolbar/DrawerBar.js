import React from 'react';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TripOrigin from '@material-ui/icons/TripOrigin';
import ToolBarList from './ToolbarList'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';

export default (function DrawerBar(props) {
    const mainItems = [
        {title: "Home", icon: <ShoppingCartIcon/>},
        {title: "Notice", icon: <ShoppingCartIcon/>},
        {title: "Collections", icon: <ShoppingCartIcon/>},
        {title: "Contact", icon: <PeopleIcon/>},
    ];

    const informationtems = [
        {title: "Tour", icon: <TripOrigin/>},
        {title: "Foods", icon: <TripOrigin/>},
    ];

    const studyItems = [
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
                <ToolBarList Items={mainItems} subheader={"Main"}/>
                <Divider />
                <ToolBarList Items={informationtems} subheader={"Information"}/>
                <Divider />
                <ToolBarList Items={studyItems} subheader={"Study"}/>
            </List>
        </Drawer>
    )
})