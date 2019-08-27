export const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    img: {
        width:'100%',
        height: 400,
        [theme.breakpoints.down('xs')]: {
            margin:10,
            height: 200,
        },
    },
    borderDiv: {
        marginTop: theme.spacing(1),
        paddingTop: theme.spacing(1),
        borderTop: `1px solid ${theme.palette.divider}`,
        // paddingBottom: theme.spacing(2),
        // marginBottom: theme.spacing(4),
    },
    dialog: {
        width: 400,
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '75%',
            height: '100%'
        },
    },
    container:{
        paddingTop:theme.spacing(5),
        [theme.breakpoints.down('xs')]: {
            paddingTop: theme.spacing(1),
        },
    }
});