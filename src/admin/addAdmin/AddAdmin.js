import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {appConstant} from "../../constants/constant";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";
import {addAdmin} from "../../actions/user.action";
import './AddAdmin.scss'
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {PersonAdd} from "@material-ui/icons";

const AddAdmin=()=>{
    const dispatch=useDispatch();
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
        };
    });


    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const [user,setUser]=useState({
        id:'',
        username:'',
        password:'',
        email:'',
        confirmPassword:'',
    })

    const handleFormControl = (event) => {
        const newUser = {...user};
        newUser[event.target.name] = event.target.value;
        setUser(newUser);
    };

    const handleSubmit=()=>{
        dispatch(addAdmin(user))
        // setUser({
        //     id:'',
        //     username:'',
        //     password:'',
        //     email:'',
        //     confirmPassword:'',
        // })
        setOpen(true);
    }


    return(
        <Grid container item lg={12} md={12} sm={12} xs={12}>
            <Grid item lg={8} md={8} sm={8} xs={8} >
                <Grid item lg={8} md={8} sm={8} xs={8} className='addadmin-tilte'>
                    Add Admin
                </Grid>
                <br/>
                <Grid item lg={8} md={8} sm={8} xs={8} >
                    <TextField id="outlined-basic"
                               label="Username"
                               name='username'
                               variant="outlined"
                               className='addadmin-input'
                               onChange={handleFormControl}
                               value={user.username}
                    />
                </Grid>
                <br/>
                <Grid item lg={8} md={8} sm={8} xs={8} >
                    <TextField id="outlined-basic"
                               label="password"
                               name='password'
                               variant="outlined"
                               className='addadmin-input'
                               onChange={handleFormControl}
                               value={user.password}
                    />
                </Grid>
                <br/>
                <Grid item lg={8} md={8} sm={8} xs={8} >
                    <TextField id="outlined-basic"
                               label="confirmPassword"
                               name='confirmPassword'
                               variant="outlined"
                               className='addadmin-input'
                               onChange={handleFormControl}
                               value={user.confirmPassword}
                    />
                </Grid>
                <br/>
                <Fab
                    variant="extended"
                    size="large"
                    aria-label="AddProduct"
                    className='add-btn'
                    onClick={handleSubmit}
                    style={{backgroundColor:"#128ced",color:"white"}}
                >
                    Add Admin <PersonAdd style={{margin:10}}/>
                </Fab>

            </Grid>
            <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical: 'center', horizontal: 'center' }} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Successfully Add An Admin.
                </Alert>
            </Snackbar>
        </Grid>
    )
}

export default AddAdmin;





