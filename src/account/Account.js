
import React from "react";
import {appConstant as appConstants, appConstant} from "../constants/constant";
import Grid from "@material-ui/core/Grid";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import {AccountSetting} from "./accountSetting/AccountSetting";
import {OrderHistory} from "./orderHistory/OrderHistory";
import './Account.scss'
import AccountCircleIcon from '@material-ui/icons/Settings';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import ShoppingBasketIcon from '@material-ui/icons/ViewStream';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Product from "../products/productDetail/Product";
import OrderDetail from "./orderHistory/orderDetail/OrderDetail";
import {AccountCircle, ShoppingBasket} from "@material-ui/icons";


export const Account=(props)=>{

    return (
        <Grid container className='main'>
           <Grid item container lg={2} md={2} sm={2} xs={2} className='sideBar'>
               <List
                   component="nav"
                   aria-labelledby="nested-list-subheader"
                   subheader={
                       <ListSubheader component="div" id="nested-list-subheader" className='title'>
                           Setting
                       </ListSubheader>
                   }
                   className='full-width'
               >
                   <ListItem button component={Link} to={appConstant.accountSettingRoute} >
                       <ListItemIcon>
                           <AccountCircle />
                       </ListItemIcon>
                       <ListItemText primary="Profile" />
                   </ListItem>
                   <ListItem button component={Link} to={appConstant.accountOrderRoute}>
                       <ListItemIcon>
                           <ShoppingBasket />
                       </ListItemIcon>
                       <ListItemText primary="Orders" />
                   </ListItem>
               </List>
           </Grid>
            <Grid item container lg={8} md={8} sm={8} xs={8} className='infoBlock'>
                <Switch>
                    <Route path={appConstants.accountSettingRoute} component={AccountSetting}/>
                    <Route path={appConstants.accountOrderRoute} component={OrderHistory}/>
                    <Route path={`${appConstants.orderDetail}/:id`} component={OrderDetail}/>
                    <Route path="*">
                        <Redirect to={appConstants.accountSettingRoute}/>
                    </Route>
                </Switch>
            </Grid>
        </Grid>
    )
}
