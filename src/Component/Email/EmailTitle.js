import React from 'react'
import Typography from '@material-ui/core/Typography'

import {withStyles} from '@material-ui/core/styles'
import {styles} from '../Styles/Main'

export default withStyles(styles)(class EmailTitle extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <Typography className={classes.containerTitle}
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                >
                    Contact
                </Typography>
            </div>
        )
    }
})