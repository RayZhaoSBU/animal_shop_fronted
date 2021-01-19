import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link, NavLink} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import {appConstant as appConstants, appConstant} from "../constants/constant";
import './Header.scss'
import InputAdornment from "@material-ui/core/InputAdornment";
import Tab from "@material-ui/core/Tab";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Tabs from "@material-ui/core/Tabs";
import Grid from "@material-ui/core/Grid";
import Login from "../auth/Login";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/auth.action";
import Register from "../auth/Register";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {checkLogin} from "../actions/user.action";
import TextField from "@material-ui/core/TextField";
import ForgotPassword from "../auth/ForgotPassword";
import logo from '../image/logo.png'

const tabs=[
    {label:"pet"},
    {label:"brands"},
    {label:"Pharmacy"},
    {label:"service"},
    {label:"Best sales"},
]

const pets=[
    {name:'Cat'},
    {name:'Dog'},
    {name:'Fish'},
    {name:'Bird'},
    {name:'Reptile'},
]

const brands=[
    {name:'Purina'},
    {name:'Greenies'},
    {name:'Petmate'},
    {name:'Merrick'},
]

const pharmacy=[
    {name:'Heartworm'},
    {name:'Skin'},
    {name:'Ear'},
    {name:'Allergy'},
    {name:'Eye'},
]

const sales=[
    {name:'New'},
    {name:'Sales'},
]

const petServices=[
    {name:'Grooming'},
    {name:'Veterinarian'},
    {name:'Training'},
    {name:'Insurance'},
]

const Header=()=>{
    const [search,setSearch]=useState('');
    const handleSearchChange=(event)=>{
        setSearch(event.target.value)
    }
    const [register,setRegister]=React.useState(false);
    const [dialog, setDialog] = React.useState(false);
    const [forgotPassword,setForgotPassword]=useState(false)
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setDialog(true);
    };

    const handleClose = () => {
        setDialog(false);
    };

    const handleForgotOpen=()=>{
        setForgotPassword(true);
    }

    const handleForgotClose=()=>{
        setForgotPassword(false);
    }

    const handleRegisterOpen=()=>{
        setRegister(true);
    }

    const handleRegisterClose=()=>{
        setRegister(false);
    }


   const [tab,setTab]=useState({
       value:1,
       open:false,
       anchorEl:null
   })

    const handleMenuOpen=(index,event)=>{
        const {currentTarget}=event;
        setTab({
            open:true,
            value:index,
            anchorEl:currentTarget
        })
    }
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            auth:appState.auth,
            msg: appState.user ?
                appConstant.LOGIN_SUCCESS_MESSAGE:
                appConstant.LOGIN_FAILURE_MESSAGE
        };
    });

    const handleMenuClose=(index,event)=>{
        setTab({
            open:false,
            anchorEl: null,
            value:0
        });
    }

    const handleLogout=()=>{
        dispatch(logout());
    }
    React.useEffect(()=>{
        if(loginState.user){
            setDialog(false);
        }
    },[loginState.user])

    React.useEffect(()=>{
        dispatch(checkLogin());
    },[loginState.auth])

    return (
        <div>
            <AppBar position="fixed" style={{backgroundColor: '#128ced'}}>
                <div className="topline">
                    <Grid item lg={1} md={1} sm={false} xs={false} className="logo-container">
                        <Link to={appConstants.homeRoute} style={{textDecoration: 'none'}}>
                            <Typography variant="h6">
                                <img src={logo} className="logo"/>
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid item lg={4} md={4} sm={false} xs={false}>
                        <InputAdornment>
                            <TextField id="outlined-basic"
                                       name='search'
                                       variant="outlined"
                                       className='header-search-input'
                                       style={{backgroundColor:'white'}}
                                       value={search}
                                       size="small"
                                       onChange={handleSearchChange}
                            />
                            <NavLink to={`${appConstant.productsRoute}/${search}`}  className='header-btn-margin'>
                                <SearchIcon style={{color : 'white'}}/>
                            </NavLink>
                            {
                                loginState.user?loginState.user.profiles[0].type==='admin'?
                                    ''
                                    :
                                    <NavLink to={appConstant.cartRoute}  className='header-btn-margin' >
                                        <ShoppingCartIcon style={{color : 'white'}}/>
                                    </NavLink>
                                    :
                                    <NavLink to={appConstant.cartRoute}  className='header-btn-margin' >
                                        <ShoppingCartIcon style={{color : 'white'}}/>
                                    </NavLink>
                            }
                        </InputAdornment>
                    </Grid>


                    {loginState.user?(loginState.user.profiles[0].type==='admin'?
                            <Button component={Link} to={appConstant.adminRoute} className='linkItem' style={{color : 'white',textDecoration: 'none'}}>
                                Manage
                            </Button>
                            :
                            <Button component={Link} to={appConstant.accountRoute} className='linkItem' style={{color : 'white',textDecoration: 'none'}}>
                                Account
                            </Button>
                        )
                        :
                        <></>
                    }
                    {loginState.user?
                        <Button onClick={handleLogout} component={Link} to={appConstant.homeRoute} className='linkItem' style={{color : 'white'}}>
                            Logout
                        </Button>
                        :
                        <Button onClick={handleClickOpen}  className='linkItem' style={{color : 'white'}}>
                        Welcome,Login
                        </Button>
                    }

                    <Login open={dialog} handleClose={handleClose}
                           handleRegisterOpen={handleRegisterOpen}
                           handleForgotOpen={handleForgotOpen}
                    />
                    <Register open={register} handleClose={handleRegisterClose}/>
                    <ForgotPassword open={forgotPassword} handleClose={handleForgotClose}/>
                </div>
                <Toolbar onMouseLeave={handleMenuClose.bind(this,tab)}>
                    <Grid container className='secondLine'>
                            <div>
                                <Tabs value={tab.value} centered>
                                    {tabs.map((tab,index)=>
                                        (
                                                <Tab
                                                    label={tab.label}
                                                    key={tab.label}
                                                    onMouseEnter={handleMenuOpen.bind(this, index)}
                                                    style={{ textDecoration: 'none' }}
                                                />
                                        )
                                    )}
                                </Tabs>
                                <Popper open={tab.open} anchorEl={tab.anchorEl}>
                                    <Paper>
                                        <MenuList>
                                            {tab.value<1?
                                                pets.map((item, index) => (
                                                    <MenuItem key={index}>
                                                        <Link to={`${appConstant.productsRoute}/${item.name.toLowerCase()}`} key={tab.label} style={{textDecoration: 'none',color:'black'}}>
                                                            {item.name}
                                                        </Link>
                                                    </MenuItem>
                                                ))
                                                :   (tab.value<2?
                                                        brands.map((item, index) => (
                                                            <MenuItem key={index}>
                                                                <Link to={`${appConstant.productsRoute}/${item.name.toLowerCase()}`} key={tab.label} style={{textDecoration: 'none',color:'black'}}>
                                                                    {item.name}
                                                                </Link>
                                                            </MenuItem>
                                                        ))
                                                        :   (tab.value<3?
                                                                pharmacy.map((item, index) => (
                                                                    <MenuItem key={index}>
                                                                        <Link to={`${appConstant.productsRoute}/${item.name.toLowerCase()}`} key={tab.label} style={{textDecoration: 'none',color:'black'}}>
                                                                            {item.name}
                                                                        </Link>
                                                                    </MenuItem>
                                                                ))
                                                                :   (tab.value<4?
                                                                        petServices.map((item, index) => (
                                                                            <MenuItem key={index}>
                                                                                <Link to={`${appConstant.productsRoute}/${item.name.toLowerCase()}`} key={tab.label} style={{textDecoration: 'none',color:'black'}}>
                                                                                    {item.name}
                                                                                </Link>
                                                                            </MenuItem>
                                                                        ))
                                                                        :
                                                                        sales.map((item, index) => (
                                                                            <MenuItem key={index}>
                                                                                <Link to={`${appConstant.productsRoute}/${item.name.toLowerCase()}`} key={tab.label} style={{textDecoration: 'none',color:'black'}}>
                                                                                    {item.name}
                                                                                </Link>
                                                                            </MenuItem>
                                                                        ))
                                                                )
                                                        )
                                                )
                                            }
                                        </MenuList>
                                    </Paper>
                                </Popper>
                            </div>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>

    );
}
export default Header;



