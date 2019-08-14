import React from 'react';
import ToolbarBase from '../../Toolbar/Base'
import {styles} from '../../../Resources/Styles/Tour'
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import TourJson from '../../../Resources/Contents/Tour';
import TourImgHandler from '../../../Resources/img/Tour/TourImgHandler'

// TODO : need for refactoring
const useStyles = makeStyles(styles);

export default function InformationTour() {
    const classes = useStyles();

    return (
        <ToolbarBase>
            <div className={classes.root}>
                <GridList cellHeight={200} className={classes.gridList} cols={3}>
                    {TourJson.map((t, i) => (
                        <GridListTile key={i} cols={t.cols || 1}>
                            {/*{console.log(TourImgHandler(t.imgName))}*/}
                            <img src={TourImgHandler(t.imgName)} alt={t.이름}/>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </ToolbarBase>
    );
}