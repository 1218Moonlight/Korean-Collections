export const styles = theme => ({
    // MainFeatured
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    // SubFeatured
    media: {
        // paddingTop: '56.25%'
        padding: '56.25%'
    },
    buttonContainer: {
        margin: theme.spacing(1),
    },
    search: {
        margin: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
    },
    // Email
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