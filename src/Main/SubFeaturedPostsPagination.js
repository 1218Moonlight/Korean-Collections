import React from 'react'
import {makeStyles, useTheme} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        flexShringk: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2.5),
    },
}));

export default function(){
    const classes = useStyles();
    const theme = useTheme();

    // Todo://https://material-ui.com/components/tables/

    return (
        <h1>hello</h1>
    )
}