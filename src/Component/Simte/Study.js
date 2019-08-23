import React from 'react'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import A from '../../Resources/Img/simte/A.jpg'
import B from '../../Resources/Img/simte/B.jpg'

export default (function Study(props) {
    const {classes, step} = props;

    const utterance = new SpeechSynthesisUtterance();

    function Speech(e){
        utterance.text = e.currentTarget.dataset.value;
        speechSynthesis.speak(utterance)
    }

    return (
        <List className={classes.simteRoot}>
            {step.map((s, i) => (
                <ListItem key={i}>
                    <ListItemAvatar>
                        {(() => {
                            if (i % 2 === 0) {
                                return <Avatar alt="Remy Sharp" src={A}/>
                            }
                            return <Avatar alt="Remy Sharp" src={B}/>
                        })()}
                    </ListItemAvatar>
                    <Button
                        fullWidth={true}
                        variant="outlined"
                        onClick={Speech}
                        data-value={s[1]}
                    >
                        <div>
                            <Typography
                                component="div"
                                variant={"caption"}
                                color="primary"
                            >
                                {s[0]}
                            </Typography>
                            <Typography
                                component="div"
                                variant={"overline"}
                                color="secondary"
                            >
                                {s[1]}
                            </Typography>
                        </div>
                    </Button>
                </ListItem>
            ))}
        </List>
    )
})