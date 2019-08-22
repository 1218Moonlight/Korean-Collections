import React from 'react'

import {makeStyles} from '@material-ui/core/styles'
import {styles} from '../../../../Resources/Styles/Main/Menu'

import {items} from '../../../../Resources/Contents/Main/Menu'

import MenuIconButton from './MenuIconButton'
import MenuDrawer from './MenuDrawer'

const useStyles = makeStyles(styles);

export default function MenuBase() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        open: false
    });

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        // setState({...state, [side]: open});
        setState({
            open: open
        })
    };

    return (
        <React.Fragment>

            <MenuIconButton toggleDrawer={toggleDrawer}/>

            <MenuDrawer toggleDrawer={toggleDrawer} items={items} open={state.open} classes={classes}/>

        </React.Fragment>
    )
}