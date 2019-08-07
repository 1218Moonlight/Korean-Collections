import React from 'react'
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../Resources/Styles/Dialog";
import Slide from '@material-ui/core/Slide';
import FullScreen from './fullScreen'
import MovieBase from '../Movie/Base'

export default withStyles(styles)(class DialogBase extends React.Component {
    state = {
        Transition: React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        }),
    };

    render() {
        const {classes, dialogHandleClose, open, dialogValue} = this.props;
        return (
            <FullScreen open={open} handleClose={dialogHandleClose} title={dialogValue.title}
                        classes={classes} transaction={this.state.Transition}
                        img={dialogValue.path}
                        movie={<MovieBase setVideoId={dialogValue.movie} info={dialogValue.description}/>}/>
        )
    }
})