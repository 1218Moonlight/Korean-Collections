import React, {Component} from 'react'
import TextField from "@material-ui/core/TextField"


export default (class CollectionsSearch extends Component {
    render() {
        // this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        const {classes, handleSearchFieldChange} = this.props;
        return (
            <div className={classes.search} align="center">
                <TextField
                    placeholder={"Search"}
                    fullWidth={true}
                    variant={"outlined"}
                    onChange={handleSearchFieldChange}
                />
            </div>
        )
    }
})