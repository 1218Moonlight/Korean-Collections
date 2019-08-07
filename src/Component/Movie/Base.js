import React from 'react';
import YouTube from 'react-youtube';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "../../Resources/Styles/Movie";

export default withStyles(styles)(class MovieBase extends React.Component {
    render() {
        const opts = {
            height: '100%',
            width: '80%',
        };

        const {setVideoId, classes} = this.props;

        return (
            <div className={classes.rootDiv} align="center">
                <div>
                    <YouTube
                        videoId={setVideoId}
                        opts={opts}
                        onReady={MovieBase._onReady}
                    />
                </div>
                <div className={classes.borderDiv}/>
                <div>
                    <p>hello</p>
                </div>

            </div>
        );
    }

    static _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
})