import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box'

export default function FullScreenType1(props) { // Notice Dialog
    const {open, handleClose, item, classes, transaction, TourImgHandler} = props;
    return (
        <Dialog className={classes.dialog} fullScreen open={open} onClose={handleClose}
                TransitionComponent={transaction}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon/>
                    </IconButton>
                    <Typography variant="caption" display="block" gutterBottom className={classes.title}>
                        {item.이름}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box >
                <img src={TourImgHandler(item.imgName)} alt={item.이름} className={classes.img}/>
            </Box>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.우편번호}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.전화명}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.전화번호}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.주소}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.위도}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.경도}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.개요}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.유산구분}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.문의및안내}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.개장일}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.쉬는날}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.체험안내}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.체험가능연령}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.수용인원}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.이용시기}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.이용시간}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.주차시설}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.유모차대여}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.애완동물동반가능여부}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.신용카드가능여부}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom className={classes.borderDiv}>
                {item.상세정보}
            </Typography>
        </Dialog>
    )
}