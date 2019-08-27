import React from 'react'
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function MenuLists(props) {
    const {items, classes} = props;
    return (
        <List className={classes.List}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {item.map((i, index) => (
                        <Link key={index} href={'#/' + i.endPoint} color="inherit" variant="body2" noWrap>
                            <ListItem button key={index}>
                                <ListItemIcon>{i.icon}</ListItemIcon>
                                <ListItemText primary={i.title}/>
                            </ListItem>
                        </Link>
                    ))}
                    <Divider/>
                </React.Fragment>
            ))}
        </List>
    )
}