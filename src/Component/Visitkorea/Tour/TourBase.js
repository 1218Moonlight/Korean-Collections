import React from 'react';
import TitleBarBase from '../../A_TitleBar/TitleBarBase'
import {styles} from '../../../Resources/Styles/Tour'
import {makeStyles} from '@material-ui/core/styles';
import TourTopScreen from './TourTopScreen'
import TourBanner from './TourBanner'
import TourSearch from './TourSearch'
import TourImgHandler from '../../../Resources/Img/Tour/TourImgHandler'
import TourJson from '../../../Resources/Contents/Tour';


const useStyles = makeStyles(styles);


export default function TourBase() {
    const classes = useStyles();

    return (
        <TitleBarBase>
            <TourTopScreen classes={classes}/>
            <TourSearch classes={classes} />
            <TourBanner classes={classes} TourJson={TourJson} TourImgHandler={TourImgHandler}/>
        </TitleBarBase>
    );
}