export const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    img:{
        width: '100%',
        height: '100%',
    },
    borderDiv: {
        marginTop: theme.spacing(4),
        paddingTop: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.divider}`,
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(4),
    }
});