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
});