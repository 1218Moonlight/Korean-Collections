import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';

export default function ToolBarList(props) {
    const {Items, subheader} = props;
    return (
        <div>
            <ListSubheader inset>{subheader}</ListSubheader>
            {Items.map((item) => (
                <Link
                    color="inherit"
                    noWrap
                    key={item.title}
                    variant="body2"
                    href={'#/' + item.title}
                >
                    <ListItem button>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title}/>
                    </ListItem>
                </Link>
            ))}
        </div>
    )
}