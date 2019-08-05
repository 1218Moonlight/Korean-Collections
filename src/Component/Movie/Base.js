import React from 'react';
import YouTube from 'react-youtube';

export default class MovieBase extends React.Component {
    render() {
        const opts = {
            height: '100%',
            width: '100%',
        };

        const {setVideoId} = this.props;

        return (
            <YouTube
                videoId={setVideoId}
                opts={opts}
                onReady={this._onReady}
            />
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}