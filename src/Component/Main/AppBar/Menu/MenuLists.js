import React from 'react'

import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function MenuLists(props) {
    const {items, classes} = props;
    return (
        <List className={classes.List}>
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    {item.map((i, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>{i.icon}</ListItemIcon>
                            <ListItemText primary={i.title}/>
                        </ListItem>
                    ))}
                    <Divider/>
                </React.Fragment>
            ))}
        </List>
    )
}