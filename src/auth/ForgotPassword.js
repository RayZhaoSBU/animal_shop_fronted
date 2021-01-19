import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import UsernameIcon from "@material-ui/icons/Person";
import PasswordIcon from "@material-ui/icons/VpnKey";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Snackbar from "@material-ui/core/Snackbar";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import EmailIcon from '@material-ui/icons/Email';
import {useDispatch} from "react-redux";
import {forgotPassword} from "../actions/user.action";
const ForgotPassword=(props)=>{
    const dispatch = useDispatch();
    const [email,setEmail]=useState(' ');
    const handleFormControl=(event)=>{
        setEmail(event.target.value);
    }

    const handleSubmit=()=>{
        dispatch(forgotPassword([email]));
        props.handleClose();
    }


    return(
        <Dialog  open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" className='login'>
            <Grid container className='title'>
                <Grid item lg={10} md={10} sm={10} xs={10} id="form-dialog-title" >
                    <br/>
                    <Typography variant="h3" className='firstTitle'>
                        Forgot Password ?
                    </Typography>
                    <br/>
                    <Typography variant="h5" className='subtitle'>
                        Enter your email address
                    </Typography>
                    <br/>
                </Grid>
            </Grid>
            <DialogContent>
                <br/>
                <Grid container spacing={2} className='dialogBody'>
                    <Grid item lg={10} md={10} sm={10} xs={10} className='inputLine'>
                        <TextField
                            className='textField'
                            name="email"
                            // label="Em"
                            type="email"
                            value={email}
                            onChange={handleFormControl}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <Grid container className='btnContainer'>
                    <Grid item lg={5} md={6} sm={6} xs={6} className='center'>
                        <Fab
                            variant="extended"
                            size="medium"
                            color="secondary"
                            aria-label="Signup"
                            style={{backgroundColor:'black',color:'white'}}
                            onClick={handleSubmit}
                        >
                            Send Email
                            <ArrowForwardIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </DialogContent>
            <br/>
            <DialogActions>
            </DialogActions>

        </Dialog>
    )
}
export default ForgotPassword;