import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {styles} from '../Styles/Toolbar'
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

export default withStyles(styles)(function FirstBar(props) {
    const {classes} = props;
    return (
        <Toolbar className={classes.toolbar}>
            <Link href={"/Korean-Collections"} variant={"h4"} color={"inherit"} className={classes.toolbarTitle}
                  align={"center"}
                  noWrap>Korean Collections</Link>
        </Toolbar>
    )
})