import React from 'react'
import MenuIconButton from './MenuIconButton'
import MenuDrawer from './MenuDrawer'

export default function MenuBase(props) {
    const {classes, items} = props;
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