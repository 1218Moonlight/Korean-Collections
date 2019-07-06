import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {styles} from '../Styles/FirstBar'
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

export default withStyles(styles)(function FirstBar(props) {
    const {classes} = props;
    return (
        <Toolbar className={classes.toolbar}>
            <Link href={"/Korean-Collections"} variant={"h5"} color={"inherit"} className={classes.toolbarTitle}
                  align={"center"}
                  noWrap>Korean Collections</Link>
        </Toolbar>
    )
})