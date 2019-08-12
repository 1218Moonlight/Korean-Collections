import React from 'react'
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../Resources/Styles/Dialog";
import Slide from '@material-ui/core/Slide';
import FullScreen from './fullScreen'
import MovieBase from '../Movie/Base'

export default withStyles(styles)(class DialogBase extends React.Component {
    state = {
        open: false,
        value: '',
        Transition: React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        })
    };


    HandleClickOpen = (e) => {
        this.setState({
            open: true,
            value: JSON.parse(e.currentTarget.dataset.value)
        })
    };

    HandleClose = () => {
        this.setState({
            open: false
        })
    };

    render() {
        const {classes} = this.props;
        const {open, value, Transition} = this.state;


        return (
            <div>
                {this.props.render({
                    HandleClickOpen: this.HandleClickOpen,
                })}
                <FullScreen open={open} handleClose={this.HandleClose} title={value.title}
                            classes={classes} transaction={Transition}
                            img={value.path}
                            movie={<MovieBase setVideoId={value.movie} info={value.description}/>}/>
            </div>
        )
    }
})