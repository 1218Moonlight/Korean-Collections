import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Study from './Study'

export default function ControlledExpansionPanels(props) {
    const {items, classes, expanded, handleChange} = props;
    return (
        <div className={classes.studyPanelRoot}>
            {items.map((step, i) => (
                <ExpansionPanel key={i} expanded={expanded === 'panel' + String(i)}
                                onChange={handleChange('panel' + String(i))}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Step {i + 1}</Typography>
                        <Typography className={classes.secondaryHeading}>{step[0][0]}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Study classes={classes} step={step}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))}
        </div>
    );
}