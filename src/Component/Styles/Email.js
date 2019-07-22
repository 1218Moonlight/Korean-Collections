export const styles = theme => ({
    emailBase:{
        marginTop: theme.spacing(4),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
    },
    containerTitle:{
        flex:1
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    gotcha: {
        display: "none"
    },
    submit: {
        marginTop: theme.spacing(4)
    }
});