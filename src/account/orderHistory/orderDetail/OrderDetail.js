import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserOrders} from "../../../actions/orders.action";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import './OrderDetail.scss'
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

const OrderDetail=(props)=>{


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

    const [order,setOrder]=useState({
        order:null
    })

    useEffect(()=>{
      let newOrder=loginState.orders.find(order=>{
          return order.id===+props.match.params.id
      })
        setOrder({
            order:newOrder
        })
    },[])


    return (order.order?
        <Grid container className='orderDetail'>
            <Grid item lg={11} md={11} sm={11} xs={11} className='orderDetail-header'>
                ORDER: {order.order.id*9973}
            </Grid>

            <Grid container item lg={11} md={11} sm={11} xs={11} className='orderDetail-subheader' >
                <Grid item lg={4} md={4} sm={4} xs={4}>
                    Order on: {formatDate(order.order.date)}
                </Grid>
                <Grid item lg={5} md={5} sm={5} xs={5}>
                    Status: {order.order.status}
                </Grid>
                <Grid item lg={2} md={2} sm={2} xs={2}>
                    ${order.order.total.toFixed(2)}

                </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>
            {
                order.order.purchases.map(orderProduct=>{
                    return(
                        <Grid container item lg={11} md={11} sm={11} xs={11} className='orderDetail-product' key={orderProduct.id}>
                            <br/>
                            <br/>
                            <Grid item lg={2} md={2} sm={2} xs={2}>
                                <img src={orderProduct.product.image1} alt={orderProduct.product.name} className='orderDetail-product-image'/>
                            </Grid>
                            <Grid container item lg={9} md={9} sm={9} xs={9} className='orderDetail-product-info'>
                                <Grid container item lg={12} md={12} sm={12} xs={12} className='header-wrapper'>
                                    <Grid item lg={9} md={9} sm={9} xs={9} className='product-info'>
                                        {orderProduct.product.name}
                                    </Grid>
                                    <Grid item lg={2} md={2} sm={2} xs={2} className='product-info'>
                                        ${orderProduct.product.price.toFixed(2)}
                                    </Grid>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12} className='product-info'>
                                    Qty: {orderProduct.qty}
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12} className='product-info'>
                                    Description: {orderProduct.product.description}
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })
            }
            <Divider/>
            <Grid container item lg={11} md={11} sm={11} xs={11} className='product-summary'>
                <Grid item container lg={12} md={12} sm={12} xs={12} className='session-wrapper'>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='header'>
                        Shipping Address:
                    </Grid>
                    <Grid item lg={10} md={10} sm={10} xs={10} className='info'>
                        {order.order.address.address}
                    </Grid>
                    <Grid item lg={10} md={10} sm={10} xs={10} className='info' >
                        {order.order.address.city} {order.order.address.state} {order.order.address.zip}
                    </Grid>
                    <br/>
                    <br/>
                    <br/>
                </Grid>
                <Grid item container lg={12} md={12} sm={12} xs={12} className='session-wrapper'>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='header'>
                        Order Summary
                    </Grid>
                    <Grid item lg={11} md={11} sm={11} xs={11} className='info'>
                        <Grid item lg={10} md={10} sm={10} xs={10}>
                            Subtotal:
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} >
                            ${order.order.subtotal.toFixed(2)}
                        </Grid>
                    </Grid>
                    <Grid item lg={11} md={11} sm={11} xs={11} className='info'>
                        <Grid item lg={10} md={10} sm={10} xs={10}>
                            Shipping:
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} >
                            ${order.order.shipping.toFixed(2)}
                        </Grid>
                    </Grid>
                    <Grid item lg={11} md={11} sm={11} xs={11} className='info'>
                        <Grid item lg={10} md={10} sm={10} xs={10}>
                            Tax:
                        </Grid>
                        <Grid item lg={2} md={2} sm={2} xs={2} >
                            ${order.order.tax.toFixed(2)}
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item container lg={12} md={12} sm={12} xs={12} className='header'>
                    <Grid item lg={9} md={9} sm={9} xs={9}>
                        Total:
                    </Grid>
                    <Grid item lg={3} md={3} sm={3} xs={3}>
                        ${order.order.total.toFixed(2)}
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Grid>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


        </Grid>
            :
        <h2>NO ORDER FOUND</h2>
    )
}

export default OrderDetail;




