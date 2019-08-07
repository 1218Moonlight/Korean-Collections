export const styles = theme => ({
    root: {
        // maxWidth: 600,
        // maxHeight: 600,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        display: 'block',
        // maxWidth: 600,
        // maxHeight: 600,
        overflow: 'hidden',
        width: '50%',
        height: '50%',
        [theme.breakpoints.down('xs')]: {
            width: '100% !important',
            height: '100% !important'
        },
    },
});