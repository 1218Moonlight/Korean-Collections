import React from 'react'
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../Styles/Dialog";
import Slide from '@material-ui/core/Slide';
import FullScreen from './fullScreen'

export default withStyles(styles)(class DialogBase extends React.Component {
    state = {
        Transition: React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        }),
    };

    render() {
        const {classes, dialogHandleClose, open, dialogValue} = this.props;
        return (
            <FullScreen open={open} handleClose={dialogHandleClose} title={dialogValue.title} info={dialogValue.description} classes={classes} transaction={this.state.Transition}/>
        )
    }
})