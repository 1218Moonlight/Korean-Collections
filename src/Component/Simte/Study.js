import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'


export default (function Study(props) {
    const {classes, step} = props;
    return (
        <List className={classes.simteRoot}>
            {step.map((s, i) => (
                <ListItem key={i}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random"/>
                    </ListItemAvatar>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {s}
                    </Typography>
                </ListItem>
            ))}
        </List>
    )
})