import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import UsernameIcon from "@material-ui/icons/Person";
import PasswordIcon from "@material-ui/icons/VpnKey";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Snackbar from "@material-ui/core/Snackbar";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import {useDispatch, useSelector} from "react-redux";
import {appConstant} from "../constants/constant";
import TextField from "@material-ui/core/TextField";
import {register} from "../actions/user.action";
import EmailIcon from '@material-ui/icons/Email';

const Register=(props)=>{
    const dispatch = useDispatch();
    const [user,setUser]=React.useState({
        email:'',
        username:'',
        password:'',
        confirmPassword:'',
    })
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            msg: appState.auth?
                appConstant.LOGIN_SUCCESS_MESSAGE + user.username :
                appConstant.LOGIN_FAILURE_MESSAGE
        };
    });


    const [open, setOpen] = useState(false);

    const handleFormControl = (event) => {
        const newUser = {...user};
        newUser[event.target.name] = event.target.value;
        setUser(newUser);
    };
    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(register(user))
        props.handleClose();
    }

    return(
        <Dialog  open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" className='login'>
            <Grid container className='title'>
                <Grid item lg={10} md={10} sm={10} xs={10} id="form-dialog-title" >
                    <br/>
                    <Typography variant="h3" className='firstTitle'>
                        Chewy
                    </Typography>
                    {/*<br/>*/}
                    {/*<Typography variant="h5" className='subtitle'>*/}
                    {/*    BECOME A Foot & Feet MEMBER*/}
                    {/*</Typography>*/}
                    {/*<br/>*/}
                    <Typography variant="h6" className='subtitle'>
                        2 steps fast sign up to explore thousands of pet needs under the lowest price
                    </Typography>
                    <br/>
                </Grid>
            </Grid>
            <DialogContent>
                <br/>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <Grid container spacing={2} className='dialogBody'>
                            <Grid item lg={10} md={10} sm={10} xs={10} className='inputLine'>
                                <TextField
                                    className='textField'
                                    name="username"
                                    label="username"
                                    value={user.username}
                                    onChange={handleFormControl}
                                    key='username'
                                    type='text'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <UsernameIcon />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </Grid>
                            <Grid item lg={10} md={10} sm={10} xs={10} className='inputLine'>
                                <TextField
                                    className='textField'
                                    name="email"
                                    label="Email"
                                    value={user.email}
                                    onChange={handleFormControl}
                                    key='email'
                                    type='text'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        ),
                                    }}

                                />
                            </Grid>
                            <Grid item lg={10} md={10} sm={10} xs={10} className='inputLine'>
                                <TextField
                                    className='textField'
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={user.password}
                                    onChange={handleFormControl}
                                    key='password'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PasswordIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item lg={10} md={10} sm={10} xs={10} className='inputLine'>
                                <TextField
                                    className='textField'
                                    name="confirmPassword"
                                    label="confirm your password"
                                    type="password"
                                    value={user.confirmPassword}
                                    onChange={handleFormControl}
                                    key='confirmPassword'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PasswordIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <br/>
                        <br/>
                        <Grid container className='btnContainer'>
                            <Grid item lg={10} md={10} sm={10} xs={10} className='center'>
                                <Fab
                                    variant="extended"
                                    size="medium"
                                    color="primary"
                                    aria-label="Login"
                                    type="submit"
                                    disabled={!user.username ||
                                    !user.password||
                                    !user.confirmPassword
                                    }
                                >
                                    Sign Up
                                    <ArrowForwardIcon />
                                </Fab>
                            </Grid>
                        </Grid>

                    </form>


                <Snackbar
                    className={loginState.user ? 'success' : 'failure'}
                    open={open}
                    onClose={() => setOpen(false)}
                    autoHideDuration={5000}
                    message={<span>{loginState.msg}</span>}
                />

            </DialogContent>
            <br/>
            <DialogActions>
            </DialogActions>

        </Dialog>
    )
}

export default Register;












