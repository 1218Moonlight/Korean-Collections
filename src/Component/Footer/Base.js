import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import {styles} from '../Styles/Footer'
import Typography from '@material-ui/core/Typography';


export default withStyles(styles)(function FooterBase(props) {
    const {classes} = props;
    return (
        <div>
            <footer className={classes.footer}>
                    <Typography variant={"h6"} align={"center"} gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant={"subtitle1"} align={"center"} color={"textSecondary"} component={"p"}>
                        Something here to give the footer a purpose!
                    </Typography>
            </footer>
        </div>
    )
})