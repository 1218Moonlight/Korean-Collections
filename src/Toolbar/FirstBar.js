import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const UseStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`
    },
    toolbarTitle: {
        flex: 1,
    }
}));

export default function FirstBar() {
    const classes = UseStyles();
    return (
        <Toolbar className={classes.toolbar}>
            <Link href={"/Korean-Collections"} variant={"h5"} color={"inherit"} className={classes.toolbarTitle} align={"center"}
                  noWrap>Korean Collections</Link>
        </Toolbar>
    )
}