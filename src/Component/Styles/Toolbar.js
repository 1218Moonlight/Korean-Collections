export const styles = theme => ({
    toolbarBase: {
        // backgroundColor:'white'
    },
    // TitleBar
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },

    // SecondBar
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        marginBottom: 10,
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 1,
    },
    subTitleDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
    },
    subTitleTitle:{
        flex:1
    },
});