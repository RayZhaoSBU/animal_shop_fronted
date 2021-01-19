import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import './AccountSetting.scss'
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Divider from "@material-ui/core/Divider";
import {useDispatch, useSelector} from "react-redux";
import {addUserInfo, getUserInfo} from "../../actions/userInfo.action";
import {changePassword, checkLogin} from "../../actions/user.action";



export const AccountSetting=(props)=>{

    const dispatch = useDispatch();
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            userInfo:appState.userInfo
        };
    });

    const [editable,setEditable]=React.useState(false);
    const [pass,setPass]=useState(false);


    const [userInfo,setUserInfo]=React.useState({
        firstName:'',
        lastName:'',
        phoneNumber:'',
        email:'',
        address:'',
        city:'',
        zip:'',
        state:'',
        country:'',
    })

    const [user,setUser]=useState({
        id:loginState.user.id,
        username:loginState.user.username,
        password:"",
        email:loginState.user.email,
    })


    React.useEffect(()=>{
        console.log("this is  in account setting.js use effect")
        console.log(loginState.userInfo);
        setUserInfo(loginState.userInfo);

    },[loginState.userInfo])


    const handleSubmit=()=>{
        setEditable(false);
        dispatch(addUserInfo(userInfo,loginState));

    }

    const handleEditableOpen=()=>{
        setEditable(true)
    }

    const handlePassOpen=()=>{
        setPass(true);
    }

    const handlePassSubmit=()=>{
        setPass(false);
        dispatch(changePassword(user));
        dispatch(checkLogin())
    }

    const handlePassControl=(event)=>{
        setUser({
            ...user,
            password: event.target.value,
        })
    }

    const handleFormControl = (event) => {
        const newUserInfo = {...userInfo};
        newUserInfo[event.target.name] = event.target.value;
        setUserInfo(newUserInfo);
    };


    return (
        <Grid container item lg={12} md={12} sm={12} xs={12} className='accountSetting'>
            <Grid item lg={12} md={12} sm={12} xs={12} >
                <Typography variant="h3" className='accountSetting-title' >
                    Account setting
                    <Divider/>
                </Typography>
                <br/>
            </Grid>
            <Grid item container spacing={1} lg={8} md={8} sm={8} xs={8} className='accountSetting-first'>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    Username:  {user.username}
                    <br/>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    Email:  {user.email}
                    <br/>
                </Grid>
            </Grid>
            <Grid item container lg={8} md={8} sm={8} xs={8} className='accountSetting-second'>
                <br/>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TextField id="outlined-basic"
                               label="Password"
                               name='password'
                               variant="outlined"
                               className='field'
                               disabled={!pass}
                               onChange={handlePassControl}
                               value={user.password}
                    />
                </Grid>

                <br/>

            </Grid>
            <Grid container>
                <Grid item lg={5} md={6} sm={6} xs={6}>
                    {
                        pass?
                            <Fab
                                variant="extended"
                                size="medium"
                                color="secondary"
                                aria-label="Save"
                                onClick={handlePassSubmit}
                                className='btn-btn'
                            >
                                Save Password
                                <ArrowForwardIcon />
                            </Fab>
                            :
                            <Fab
                                variant="extended"
                                size="medium"
                                color="primary"
                                aria-label="Save"
                                onClick={handlePassOpen}
                                className='btn-btn'

                            >
                                Change Password
                                <ArrowForwardIcon />
                            </Fab>
                    }

                </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>

            <Grid item container spacing={2} lg={8} md={8} sm={8} xs={8} className='accountSetting-third'>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <TextField id="outlined-basic"
                               label="First Name"
                               name='firstName'
                               variant="outlined"
                               className='field'
                               disabled={!editable}
                               onChange={handleFormControl}
                               value={userInfo.firstName}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <TextField id="outlined-basic"
                               label="Last Name"
                               name='lastName'
                               variant="outlined"
                               className='field'
                               disabled={!editable}
                               onChange={handleFormControl}
                               value={userInfo.lastName}
                    />
                </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>
            <Grid item lg={8} md={8} sm={8} xs={8} className='accountSetting-third'>
                <TextField id="outlined-basic"
                           label="Phone Number"
                           variant="outlined"
                           name='phoneNumber'
                           className='field'
                           disabled={!editable}
                           onChange={handleFormControl}
                           value={userInfo.phoneNumber}
                />
            </Grid>
            <br/>
            <br/>
            <br/>
            <Grid item lg={8} md={8} sm={8} xs={8} className='accountSetting-third'>
                <TextField id="outlined-basic"
                           label="Address"
                           name='address'
                           variant="outlined"
                           className='field'
                           disabled={!editable}
                           onChange={handleFormControl}
                           value={userInfo.address}
                />
            </Grid>
            <br/>
            <br/>
            <br/>
            <Grid item container spacing={1} lg={8} md={8} sm={8} xs={8} className='accountSetting-third'>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <TextField id="outlined-basic"
                               label="City"
                               variant="outlined"
                               name='city'
                               className='field'
                               disabled={!editable}
                               onChange={handleFormControl}
                               value={userInfo.city}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <TextField id="outlined-basic"
                               label="Zip"
                               name='zip'
                               variant="outlined"
                               className='field'
                               disabled={!editable}
                               onChange={handleFormControl}
                               value={userInfo.zip}
                    />
                </Grid>
            </Grid>
            <br/>
            <Grid item container spacing={1} lg={8} md={8} sm={8} xs={8} className='accountSetting-third'>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <TextField id="outlined-basic"
                               label="Country/Region"
                               name='country'
                               variant="outlined"
                               className='field'
                               disabled={!editable}
                               onChange={handleFormControl}
                               value={userInfo.country}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <TextField id="outlined-basic"
                               label="State"
                               name='state'
                               variant="outlined"
                               className='field'
                               disabled={!editable}
                               onChange={handleFormControl}
                               value={userInfo.state}
                    />
                </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>
            <Grid container>
                <Grid item lg={5} md={6} sm={6} xs={6}>
                    {
                        editable ?
                            <Fab
                                variant="extended"
                                size="medium"
                                color="secondary"
                                aria-label="Save"
                                onClick={handleSubmit}
                            >
                                Save
                                <ArrowForwardIcon />
                            </Fab>
                        :
                            <Fab
                                variant="extended"
                                size="medium"
                                color="primary"
                                aria-label="Signup"
                                onClick={handleEditableOpen}
                            >
                                Edit
                                <ArrowForwardIcon />
                            </Fab>
                    }
                </Grid>
            </Grid>

        </Grid>

    )
}






