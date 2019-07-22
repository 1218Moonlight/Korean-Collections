import React from 'react'
import Typography from '@material-ui/core/Typography'

export default (class EmailTitle extends React.Component {
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