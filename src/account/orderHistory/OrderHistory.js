import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOrders, getUserOrders} from "../../actions/orders.action";
import {Grid} from "@material-ui/core";
import './OrderHistory.scss'
import Divider from "@material-ui/core/Divider";
import SendIcon from "@material-ui/icons/Send";
import Fab from "@material-ui/core/Fab";
import {Link} from "react-router-dom";
import {appConstant} from "../../constants/constant";
import {Description} from "@material-ui/icons";

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export const OrderHistory=(props)=>{

    const dispatch=useDispatch();
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            orders:appState.orders,
            shipping:appState.shipping,
        };
    });

    useEffect(()=>{
        dispatch(getUserOrders(loginState.user.id));
    },[])

    // useEffect(()=>{
    //     loginState.orders&&loginState.orders.reverse();
    // },[loginState.orders])

    useEffect(()=>{
        console.log(loginState)
    },[loginState.orders])




    return (
        <Grid container className='orderHistory'>
            {loginState.orders&&loginState.orders.reverse().map(order=>(
                <Grid item container lg={11} md={11} sm={11} xs={11} className='order-container' key={order.id}>
                    <Grid item lg={11} md={11} sm={11} xs={11} className='order-header'>
                        ORDER: {order.id*9973}
                    </Grid>
                    <Grid item lg={11} md={11} sm={11} xs={11} className='order-subheader'>
                        Date ordered:{formatDate(order.date)} |
                        ${order.total.toFixed(2)} |
                        {order.status==="shipped"?"Shipped":"Unshipped"}
                    </Grid>
                    <Grid item container spacing={1} lg={9} md={9} sm={9} xs={9} className='order-image-row'>
                        {
                            order.purchases.map(orderProduct=>(
                                <Grid item lg={2} md={2} sm={2} xs={2} key={orderProduct.id}>
                                    <img src={orderProduct.product.image1} alt={orderProduct.product.name} className='order-image'/>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid item lg={2} md={2} sm={2} xs={2} className='order-view'>
                        <Fab
                            variant="extended"
                            size="large"
                            aria-label="AddProduct"
                            // onClick={handleSubmit}
                            component={Link}
                            to={`${appConstant.orderDetail}/${order.id}`}
                            style={{backgroundColor:"#128ced",color:"white"}}
                        >
                            View Order <Description style={{margin:10}}/>
                        </Fab>
                    </Grid>
                    <Grid item lg={11} md={11} sm={11} xs={11}>
                        <br/>
                        <Divider variant="middle" />
                        <br/>
                    </Grid>

                </Grid>
            ))

            }

        </Grid>
    )
}


