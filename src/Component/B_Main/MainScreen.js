import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Pagination from '../Z_Utils/Pagination'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function MainScreen(props) {
    const {classes, items} = props;
    const [state, setState] = React.useState({
        index: 0
    });

    function handleChangeIndex(index) {
        setState({index: index})
    }

    return (
        <React.Fragment>
            <AutoPlaySwipeableViews index={state.index} onChangeIndex={handleChangeIndex} enableMouseEvents>
                {items.map((item, index) => (

                    <ButtonBase
                        focusRipple
                        key={index}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}>
                        <span className={classes.imageSrc} style={{backgroundImage: `url(${item.img})`}}/>
                        <span className={classes.imageBackdrop}/>
                        <span className={classes.imageButton}>
                        <Link href={'#/' + item.endPoint} color="inherit">
                        <Typography
                            component="span"
                            variant="h5"
                            color="inherit"
                            className={classes.imageTitle}>
                                {item.title}
                            <span className={classes.imageMarked}/>
                        </Typography>
                        </Link>
                        </span>
                    </ButtonBase>

                ))}
            </AutoPlaySwipeableViews>
            <Pagination dots={3} index={state.index} onChangeIndex={handleChangeIndex}/>
        </React.Fragment>
    )
}