export const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(2),
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