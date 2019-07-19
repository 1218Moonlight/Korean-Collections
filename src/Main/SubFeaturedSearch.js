import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {styles} from '../Styles/SubFeaturedPosts'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from "@material-ui/core/InputAdornment"
import TextField from "@material-ui/core/TextField"


export default withStyles(styles)(class SubFeaturedSearch extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.search} align="center">
                <TextField
                    // label={"Search"}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    variant={"outlined"}
                />
            </div>
        )
    }
})