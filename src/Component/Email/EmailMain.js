import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default (class EmailMain extends Component {
    render() {
        const {classes} = this.props;
        return (
            // https://webdesign.tutsplus.com/tutorials/quick-tip-add-a-formspree-form-to-your-static-sites--cms-23870
            <form noValidate autoComplete={"off"} action="https://formspree.io/1218moonlight@gmail.com"
                  method="POST">

                <TextField
                    disabled
                    id="outlined-disabled"
                    label="To"
                    defaultValue="1218Moonlight@gmail.com"
                    className={classes.textField}
                    fullWidth={true}
                    margin="normal"
                    variant="outlined"
                    helperText="Email to be received"
                />

                {/*<input type={"email"} name={"_replyto"} placeholder={"Your email"}/>*/}
                <TextField
                    id="outlined-email-input"
                    label="From"
                    className={classes.textField}
                    type="email"
                    placeholder={"Your email"}
                    name="_replyto"
                    autoComplete="email"
                    fullWidth={true}
                    margin="normal"
                    variant="outlined"
                    helperText="Email to send"
                />

                {/*<textarea name={"message"} placeholder={"Your message"}/>*/}
                <TextField
                    id="outlined-multiline-static"
                    label="Your message"
                    name={"message"}
                    multiline
                    rows="4"
                    className={classes.textField}
                    fullWidth={true}
                    margin="normal"
                    variant="outlined"
                    helperText={"enquiry details"}
                />


                <input type={"hidden"} name={"_subject"} value={"Website contact"}/>
                <input type={"text"} name={"_gotcha"} className={classes.gotcha}/>

                {/*<input type={"submit"} value={"Send"} className={classes.submit}/>*/}
                <Button className={classes.submit} type={"submit"} fullWidth={true} color={"primary"}
                        variant="contained">Send</Button>

                {/*<input type="hidden" name="_next" value="//mywebsite.com/thanks.html" />*/}
            </form>
        )
    }
});