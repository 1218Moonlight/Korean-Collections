import React from 'react'
import Typography from '@material-ui/core/Typography'

export default (class SubTitle extends React.Component {
    render() {
        const {classes, subTitleName} = this.props;
        return (
            <div className={classes.subTitleDiv}>
                <Typography className={classes.subTitleTitle}
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                >
                    {subTitleName}
                </Typography>
            </div>
        )
    }
})