import React from 'react'
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"

export default function TourSearch(props) {
    const {classes} = props;
    return (
        <Container fixed>
            <TextField
                className={classes.TopSearchTextField}
                placeholder={"Search"}
                fullWidth={true}
                variant={"outlined"}
                // onChange={handleSearchFieldChange}
            />
        </Container>
    )
}