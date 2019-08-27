import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container'

export default function FullScreenType3(props) { // Notice Dialog
    const {open, handleClose, item, classes, transaction} = props;
    return (
        <Dialog className={classes.dialog} fullScreen open={open} onClose={handleClose}
                TransitionComponent={transaction}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon/>
                    </IconButton>
                    <Typography variant="body2" display="block" gutterBottom className={classes.title}>
                        {item.title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.container} fixed>
                {item.info.map((i, index) => (
                    <Typography key={index} variant="body1" display="block" gutterBottom className={classes.title}>
                        {i}
                    </Typography>
                ))}
            </Container>
        </Dialog>
    )
}