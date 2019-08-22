import React from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

export default function TitleBase(props) {
    const {classes} = props;
    return (
        <Link href={"#/"} underline={"none"}>
            <Typography className={classes.Title} variant={"h6"}>
                Korean Collections
            </Typography>
        </Link>
    )
}