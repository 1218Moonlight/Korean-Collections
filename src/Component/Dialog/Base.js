import React from 'react'
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../Resources/Styles/Dialog";
import Slide from '@material-ui/core/Slide';
import FullScreenType0 from './FullScreenType0'
import FullScreenType1 from './FullScreenType1'
import FullScreenType3 from './FullScreenType3'
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

        if (value.type === 0) { // Collections Dialog (Type Index 0)
            return (
                <div>
                    {this.props.render({
                        HandleClickOpen: this.HandleClickOpen,
                    })}
                    <FullScreenType0 open={open} handleClose={this.HandleClose} title={value.title}
                                     classes={classes} transaction={Transition}
                                     movie={<MovieBase setVideoId={value.movie} info={value.description}/>}/>
                </div>
            )
        } else if (value.type === 3) { // Tour Dialog (Type index 3)
            return(
                <div>
                    {this.props.render({
                        HandleClickOpen: this.HandleClickOpen,
                    })}
                    <FullScreenType3 open={open} handleClose={this.HandleClose} item={value} classes={classes}
                                     transaction={Transition} />
                </div>
            )
        } else { // Notice Dialog (Type Index 1)
            return (
                <div>
                    {this.props.render({
                        HandleClickOpen: this.HandleClickOpen,
                    })}
                    <FullScreenType1 open={open} handleClose={this.HandleClose} title={value.title}
                                     classes={classes} transaction={Transition} info={value.description}
                                     img={value.img} link={value.link}/>
                </div>
            )
        }

    }
})