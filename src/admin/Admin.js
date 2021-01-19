import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import {appConstant as appConstants, appConstant} from "../constants/constant";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SettingsIcon from "@material-ui/icons/Settings";
import ListItemText from "@material-ui/core/ListItemText";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import './Admin.scss'
import AddProduct from "./addProduct/AddProduct";
import Dashboard from "./dashboard/Dashboard";
import EditProduct from "./editProduct/EditProduct";
import Orders from "./orders/Orders";
import AdminOrderDetail from "./orders/adminOrderDetail/AdminOrderDetail";
import AddAdmin from "./addAdmin/AddAdmin";
import SoldPerMonth from "./chart/SoldPerMonth";
import EarningPerMonth from "./chart/EarningPerMonth";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PercentageChart from "./chart/PercentageChart";

const Admin=()=>{



    return(
        <Grid container className='main'>
            <Grid item container lg={2} md={2} sm={2} xs={false} className='sideBar'>
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
                    <ListItem button component={Link} to={appConstant.dashboardRoute} >
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component={Link} to={appConstant.addProductRoute}>
                        <ListItemIcon>
                            <ViewStreamIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Product" />
                    </ListItem>
                    <ListItem button component={Link} to={appConstant.ordersRoute}>
                        <ListItemIcon>
                            <ViewStreamIcon />
                        </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItem>
                    <ListItem button component={Link} to={appConstant.addAdminRoute}>
                        <ListItemIcon>
                            <ViewStreamIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Admin" />
                    </ListItem>
                    <ListItem button component={Link} to={appConstant.soldPerMonthRoute}>
                        <ListItemIcon>
                            <EqualizerIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sales Per Month" />
                    </ListItem>
                    <ListItem button component={Link} to={appConstant.earningPerMonth}>
                        <ListItemIcon>
                            <EqualizerIcon />
                        </ListItemIcon>
                        <ListItemText primary="Earning Per Month" />
                    </ListItem>
                    <ListItem button component={Link} to={appConstant.pieChart}>
                        <ListItemIcon>
                            <EqualizerIcon />
                        </ListItemIcon>
                        <ListItemText primary="Earning Percentage" />
                    </ListItem>
                </List>
            </Grid>
            <Grid item lg={9} md={9} sm={9} xs={9} className='infoBlock'>
                <Switch>
                    <Route path={appConstants.addProductRoute} component={AddProduct}/>
                    <Route path={appConstants.dashboardRoute} component={Dashboard}/>
                    <Route path={`${appConstants.editProductRoute}/:id`} component={EditProduct}/>
                    <Route path={`${appConstants.adminOrderDetailRoute}/:id`} component={AdminOrderDetail}/>
                    <Route path={appConstants.ordersRoute} component={Orders}/>
                    <Route path={appConstants.addAdminRoute} component={AddAdmin}/>
                    <Route path={appConstants.soldPerMonthRoute} component={SoldPerMonth}/>
                    <Route path={appConstants.earningPerMonth} component={EarningPerMonth}/>
                    <Route path={appConstants.pieChart} component={PercentageChart}/>
                    <Route path="*">
                        <Redirect to={appConstants.dashboardRoute}/>
                    </Route>
                </Switch>
            </Grid>
        </Grid>
    )
}

export default Admin;
