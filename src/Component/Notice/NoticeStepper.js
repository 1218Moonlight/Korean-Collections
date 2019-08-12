import React from 'react'
import {useTheme} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function (props) {
    const {classes, posts, dialogHandleClickOpen} = props;
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = posts.length;

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function handleStepChange(step) {
        setActiveStep(step);
    }

    return (
        <div className={classes.root} align="center">
            <Paper square elevation={0} className={classes.header}>
                <Typography>{posts[activeStep].title}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {posts.map((noti, index) => (
                    <div key={noti.title} data-value={JSON.stringify(noti)} onClick={dialogHandleClickOpen}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={noti.path} alt={noti.title}/>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                    </Button>
                }
                backButton={
                    <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                        Back
                    </Button>
                }
            />
        </div>
    )
}