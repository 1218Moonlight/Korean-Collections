import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
            <h2>Left</h2>
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                className={classes.toolbarTitle}
            >
                Korean Collections
            </Typography>
            <h2>Right</h2>
        </Toolbar>
    )
}