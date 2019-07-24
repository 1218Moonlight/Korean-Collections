import React from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';

export default (function TitleBar(props) {
    const {classes, handleDrawerOpen, open} = props;
    return (
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar1}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon/>
                </IconButton>

                <Link href={"#/"} variant={"h5"} color={"inherit"} noWrap>
                    Korean Collections
                </Link>
            </Toolbar>
        </AppBar>
    )
})