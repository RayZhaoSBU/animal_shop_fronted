
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import './Payment.scss'
import Typography from "@material-ui/core/Typography";
import Address from "../address/Address";
import CardInfo from "./cardInfo/CardInfo";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Fab from "@material-ui/core/Fab";
import Divider from "@material-ui/core/Divider";
import {getShipping} from "../actions/shipping.action";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {addOrder} from "../actions/orders.action";
import {deleteFromCart} from "../actions/cart.action";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import {appConstant} from "../constants/constant";
import {saveSummary} from "../actions/summary.action";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";


const Payment=(props)=>{
    const history=useHistory();
    const dispatch = useDispatch();
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            cart: appState.cart,
            userInfo:appState.userInfo,
            shipping:appState.shipping
        };
    });
    const [summary,setSummary]= React.useState({
        subtotal:0,
        shipping:5,
        tax:0,
        total:0,
    })
    React.useEffect(()=>{
        dispatch(getShipping());
    },[])

    const [shippingValue,setShippingValue] =React.useState(4)

    const handleShippingOption=(event)=>{
        setShippingValue(+event.target.value);
        console.log(event.target.value);
        // console.log(loginState.shipping)
            setSummary({
                ...summary,
                shipping: loginState.shipping[event.target.value-1].price,
                total:summary.subtotal+summary.tax+loginState.shipping[event.target.value-1].price,
            })
    }

    const [shipping,setShipping]= React.useState({
        firstName:loginState.userInfo.firstName,
        lastName:loginState.userInfo.lastName,
        address:loginState.userInfo.address,
        state:loginState.userInfo.state,
        city:loginState.userInfo.city,
        zip:loginState.userInfo.zip,
        country:loginState.userInfo.country
    })
    const [billing,setBilling]= React.useState({
        firstName:loginState.userInfo.firstName,
        lastName:loginState.userInfo.lastName,
        address:loginState.userInfo.address,
        state:loginState.userInfo.state,
        city:loginState.userInfo.city,
        zip:loginState.userInfo.zip,
        country:loginState.userInfo.country
    })
    const [card,setCard]=React.useState({
        cardNumber:'',
        expirationDate:'',
        securityCode:''
    })

    const [cart,setCart]=useState({
        items:loginState.cart
    })



    React.useEffect(()=>{
        let subtotal=0;
        loginState.cart&&loginState.cart.forEach((item)=>{
            subtotal=subtotal+item.product.price*item.qty;
        })
        loginState.cart&&setSummary({
            subtotal:subtotal,
            shipping:5,
            tax:subtotal*0.0882,
            total:subtotal+subtotal*0.0882+summary.shipping,
        })
    },[loginState.cart])

    const getFormattedDate=(days)=> {
        let todayTime = new Date();
        todayTime.setDate(todayTime.getDate() + days)
        let month = todayTime .getMonth()+1;
        let day = todayTime .getDate();
        let year = todayTime .getFullYear();
        return month + "/" + day + "/" + year;
    }
    useEffect(()=>{
        console.log(loginState.cart)
        setCart({
            items: loginState.cart
        })
    },[loginState.cart])


    const handlePlaceOrder=()=>{
        let ids=[]
        console.log(loginState.cart)
        console.log(cart)
        let newCart=loginState.cart;
        let carts=newCart.map(item=>{
            let newItem=item;
            ids.push(item.id);
            newItem.id=0;
            return newItem;
        })
        let newOrder={
            id:null,
            userId:loginState.user.id,
            date:new Date(),
            status:"unshipped",
            payment:card.cardNumber,
            subtotal:parseFloat(summary.subtotal.toFixed(2)),
            tax:parseFloat(summary.tax.toFixed(2)),
            shipping:summary.shipping,
            total:parseFloat(summary.total.toFixed(2)),
            purchases:carts,
            address:{
                id:'',
                firstName:shipping.firstName,
                lastName:shipping.lastName,
                address:shipping.address,
                state:shipping.state,
                city:shipping.city,
                zip:shipping.zip,
                country:shipping.country,
            }
        }
        dispatch(addOrder(newOrder));
        console.log(loginState.cart);
        ids.forEach(id=>{
            dispatch(deleteFromCart(id));
        })
        dispatch(saveSummary(newOrder));
        history.push(`${appConstant.summaryRoute}`)
    }

    // const [sameToTop, setSameToTop]= React.useState(true)
    //
    // const handleSameToTop =()=> {
    //     setSameToTop(!sameToTop)
    // }


    return(
        <Grid container className='payment'>
            <Grid item lg={8} md={8} sm={8} xs={8} className='payment-info' >
                <Typography variant="h4" style={{backgroundColor:'white',color:'#128ced'}}>
                    Shipping Address:
                </Typography>
                <br/>
                <Address address={shipping} setAddress={setShipping}/>
                {/*<Typography variant="h4" style={{backgroundColor:'white',color:'#128ced'}}>*/}
                {/*    shipping Options:*/}
                {/*</Typography>*/}
                {/*<Grid container className='center'>*/}
                {/*    <Grid item lg={10} md={10} sm={10} xs={10}>*/}
                {/*        <FormControl component="fieldset">*/}
                {/*            <RadioGroup aria-label="gender" name="gender1" value={shippingValue} onChange={handleShippingOption}>*/}
                {/*                {*/}
                {/*                    loginState.shipping&&loginState.shipping.map(item=>{*/}
                {/*                        let date=getFormattedDate(+item.id);*/}
                {/*                        let label=`${item.type}\u00A0\u00A0\u00A0\u00A0price:$${item.price}\u00A0\u00A0\u00A0\u00A0Estimated Date:${date}`*/}
                {/*                        return (*/}
                {/*                            <FormControlLabel value={+item.id} control={<Radio />} key={item.id} label={label} />*/}
                {/*                        );*/}
                {/*                    })*/}

                {/*                }*/}
                {/*            </RadioGroup>*/}
                {/*        </FormControl>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}

                <br/>
                <Typography variant="h4" style={{backgroundColor:'white',color:'#128ced'}}>
                    Credit Card:
                </Typography>
                <br/>
                <CardInfo card={card} setCard={setCard}/>
                <br/>
                <Typography variant="h4" style={{backgroundColor:'white',color:'#128ced'}}>
                    Billing Address:
                </Typography>
                <br/>

                {/*<div className="custom-control custom-checkbox">*/}
                {/*    <input type="checkbox" className="custom-control-input" id="defaultUnchecked" onClick={handleSameToTop()}  />*/}
                {/*        <label className="custom-control-label" >Same To Mailing Address</label>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <FormControlLabel*/}
                {/*        // checked={sameToTop.checked}*/}
                {/*        control={<Checkbox name="sameToTop" />}*/}
                {/*        onClick={handleSameToTop()}*/}
                {/*        label="Same To Mailing Address"*/}
                {/*    />*/}
                {/*</div>*/}
                {/*{*/}
                {/*    sameToTop? <div/>*/}
                {/*        :*/}
                {/*        <div>*/}
                {/*            <Address address={billing} setAddress={setBilling} />*/}
                {/*        </div>*/}
                {/*}*/}
                {/*<br/>*/}
                <Address address={billing} setAddress={setBilling} />

            </Grid>







            <Grid item lg={2} md={2} sm={2} xs={2} className='summary'>
                <Typography variant="h4">
                    Summary:
                </Typography>
                <br/>
                <div className='summary-subtotal'>
                    <div className='summary-name'>
                        Subtotal:
                    </div>
                    <div className='summary-price'>
                        ${summary.subtotal.toFixed(2)}
                    </div>
                </div>
                <br/>
                <div className='summary-subtotal'>
                    <div className='summary-name'>
                        Estimated Shipping:
                    </div>
                    <div className='summary-price'>
                        ${summary.shipping.toFixed(2)}
                    </div>
                </div>
                <br/>
                <div className='summary-subtotal'>
                    <div className='summary-name'>
                        Estimated Taxes:
                    </div>
                    <div className='summary-price'>
                        ${summary.tax.toFixed(2)}
                    </div>
                </div>
                <br/>
                <Divider/>
                <div className='summary-subtotal'>
                    <div className='summary-name'>
                        Total:
                    </div>
                    <div className='summary-price'>
                        ${summary.total.toFixed(2)}
                    </div>
                </div>
                <br/>
                <br/>
                <div className='btn-line'>
                    <Fab
                        variant="extended"
                        size="large"
                        color="secondary"
                        aria-label="PlaceOrder"
                        type="submit"
                        className='check-out-btn'
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </Fab>
                </div>
            </Grid>

        </Grid>
    )
}

export default Payment;















