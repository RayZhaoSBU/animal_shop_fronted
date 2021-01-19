import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import InputAdornment from "@material-ui/core/InputAdornment";
import PasswordIcon from "@material-ui/icons/VpnKey";
import UsernameIcon from "@material-ui/icons/Person";
import {useDispatch, useSelector} from "react-redux";
import {appConstant} from "../constants/constant";
import Snackbar from "@material-ui/core/Snackbar";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import './Login.scss'
import {login} from "../actions/auth.action";
import {getUserInfo} from "../actions/userInfo.action";
import {checkLogin} from "../actions/user.action";
import Button from "@material-ui/core/Button";

const Login=(props)=>{
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            userInfo:appState.userInfo,
            msg: appState.auth ?
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

    React.useEffect(()=>{
        loginState.user&&dispatch(getUserInfo(loginState.user.id));
    },[loginState.user])

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(
            user,
            () => setOpen(true),
            () => setOpen(true)
        ));
        setTimeout(()=>{
            dispatch(checkLogin());
        },0)

        props.handleClose();
    };
    const handleChangePassword=()=>{
        props.handleClose();
        props.handleForgotOpen();
    }
    const handleRegister=()=>{
        props.handleClose();
        props.handleRegisterOpen();
    }


    return(
        <Dialog  open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" className='login'>
            <Grid container className='title'>
                <Grid item lg={10} md={10} sm={10} xs={10} id="form-dialog-title" >
                    <br/>
                    <Typography variant="h3" className='firstTitle'>
                        Chewy
                    </Typography>
                    <br/>
                    <Typography variant="h5" className='subtitle'>
                        Login
                    </Typography>
                    <br/>
                </Grid>
            </Grid>
            <DialogContent>

                <br/>
                <form className="login-form" onSubmit={handleSubmit} >
                    <Grid container spacing={2} className='dialogBody'>
                        <Grid item lg={10} md={10} sm={10} xs={10} className='inputLine'>
                            <TextField
                                className='textField'
                                name="username"
                                label="Username"
                                value={user.username}
                                onChange={handleFormControl}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <UsernameIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <br/>
                        <br/>
                        <br/>
                        <Grid item container lg={10} md={10} sm={10} xs={10} className='inputLine'>
                            <TextField
                                className='textField'
                                name="password"
                                label="Password"
                                type="password"
                                value={user.password}
                                onChange={handleFormControl}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PasswordIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <Grid item lg={12} md={12} sm={12} xs={12} className='forgot-password'>
                                <Button onClick={handleChangePassword}>forgot password</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid container className='btnContainer'>
                        <Grid item lg={6} md={6} sm={6} xs={6} className='center'>
                            <Fab
                                variant="extended"
                                size="medium"
                                color="primary"
                                aria-label="Signup"
                                onClick={handleRegister}
                            >
                                Sign Up
                                <ArrowForwardIcon />
                            </Fab>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6} className='center'>
                            <Fab
                                variant="extended"
                                size="medium"
                                color="primary"
                                aria-label="Login"
                                type="submit"
                                disabled={!user.username || !user.password}
                            >
                                Sign In
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

export default Login;

