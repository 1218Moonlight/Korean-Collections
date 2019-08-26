export const styles = theme => ({
    TopScreenContainer:{
        padding:0
    },
    TopScreenBox:{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height:400,
    },
    TopBannerContainer: {
        backgroundColor:'#00FF00',
    },
    TopSearchTextField: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
});