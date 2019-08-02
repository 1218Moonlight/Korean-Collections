import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../Styles/Dialog";

export default withStyles(styles)(class CollectionsBase extends React.Component {
    state = {
        Transition: React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        })
    };

    render() {
        const {open, handleClose, title, info, classes} = this.props;
        return (
            <div>
                <Dialog fullScreen open={open} onClose={handleClose}
                        TransitionComponent={this.state.Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <CloseIcon/>
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                {title}
                            </Typography>
                            {/*<Button color="inherit" onClick={handleClose}>*/}
                            {/*save*/}
                            {/*</Button>*/}
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem button>
                            <ListItemText primary={info}/>
                        </ListItem>
                        <Divider/>
                        {/*<ListItem button>*/}
                        {/*<ListItemText primary="Default notification ringtone" secondary="Tethys"/>*/}
                        {/*</ListItem>*/}
                    </List>
                </Dialog>
            </div>
        );
    }
})