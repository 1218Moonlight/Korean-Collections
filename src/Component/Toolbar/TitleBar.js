import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

export default (function FirstBar(props) {
    const {classes} = props;
    return (
        <Toolbar className={classes.toolbar}>
            <Link href={"/Korean-Collections"} variant={"h5"} color={"inherit"} className={classes.toolbarTitle}
                  align={"center"}
                  noWrap>Korean Collections</Link>
        </Toolbar>
    )
})