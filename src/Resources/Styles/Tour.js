export const styles = theme => ({
    TopScreenContainer:{
        padding:0
    },
    TopScreenBox:{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height:400,
        [theme.breakpoints.down('xs')]: {
            // width: '100% !important', // Overrides inline-style
            height: 200,
        },
    },
    TopBannerContainer: {

    },
    TopSearchTextField: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    media: {
        height: 0,
        // paddingTop: '56.25%',
        paddingTop: '70%'
    }
});