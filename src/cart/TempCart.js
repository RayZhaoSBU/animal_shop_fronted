// import React, {useEffect, useState} from "react";
// import {Grid} from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";
// import './Cart.scss';
// import {useDispatch, useSelector} from "react-redux";
// import {appConstant} from "../appConstants/appConstants";
// import {addToCart, deleteFromCart, getCart} from "../actions/cart.action";
// import Divider from "@material-ui/core/Divider";
// import Fab from "@material-ui/core/Fab";
// import {Link} from "react-router-dom";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from "@material-ui/core/IconButton";
//
// const Cart=()=>{
//     const dispatch = useDispatch();
//     const [payment,setPayment]= React.useState({
//         subtotal:0,
//         shipping:0,
//         tax:0,
//     })
//
//     const loginState = useSelector(appState => {
//         return {
//             user: appState.user,
//             cart: appState.cart,
//             tempCart:appState.tempCart,
//         };
//     });
//
//
//     React.useEffect(()=>{
//         let subtotal=0;
//         loginState.tempCart.forEach((item)=>{
//             subtotal=subtotal+item.product.price*item.qty;
//         })
//         setPayment({
//             subtotal:subtotal,
//             shipping:0,
//             tax:0,
//         })
//     },[loginState.tempCart])
//
//     const handleQty=(event)=>{
//         let index=loginState.tempCart.findIndex(item=>{
//             return item.id===+event.target.name;
//         })
//         let newCart=loginState.tempCart;
//         newCart.items[index].qty=+event.target.value;
//         setCart({
//             items: newCart.items
//         });
//         dispatch(addToCart(newCart.items[index]))
//     }
//     const handleDelete=(id)=>{
//         // console.log('deleting the cart item')
//         // dispatch(deleteFromCart(id));
//         // setCart({
//         //     items: loginState.cart
//         // })
//     }
//
//     return(
//         <Grid container className='cart-main' spacing={1}>
//             <Grid item lg={6} md={8} sm={8} xs={8} className='cart-info'>
//                 <Typography variant="h2" style={{backgroundColor:'black',color:'white'}}>
//                     Cart:
//                 </Typography>
//                 {
//                     loginState.tempCart.map((item,index)=>(
//                         <Grid container className='item-wrap' key={index}>
//                             <Grid item lg={2} md={3} sm={3} xs={3} >
//                                 <img src={item.product.image1} alt={item.product.name}  className='item-image'/>
//                             </Grid>
//                             <Grid item container lg={8} md={8} sm={8} xs={8} className='item-info'>
//                                 <Grid container item className='item-info-row'>
//                                     <Grid item lg={10} md={10} sm={10} xs={10} className='item-name'>
//                                         {item.product.name}
//                                     </Grid>
//                                     <Grid item lg={1} md={1} sm={1} xs={1} className='item-price'>
//                                         ${item.product.price}
//                                     </Grid>
//                                 </Grid>
//                                 <Grid item lg={11} md={11} sm={11} xs={11} className='item-size'>
//                                     Size: {item.product.size}
//                                 </Grid>
//                                 <Grid item lg={11} md={11} sm={11} xs={11}  className='item-size'>
//                                     Color: {item.product.color}
//                                 </Grid>
//                                 <Grid item container lg={11} md={11} sm={11} xs={11}  className='item-qty'>
//                                     <Grid item lg={10} md={10} sm={10} xs={10}>
//                                         Qty:
//                                         <Select
//                                             labelId="demo-simple-select-outlined-label"
//                                             name={item.id.toString(10)}
//                                             label="Age"
//                                             onChange={handleQty}
//                                             value={item.qty}
//                                         >
//                                             <MenuItem value={1}>1</MenuItem>
//                                             <MenuItem value={2}>2</MenuItem>
//                                             <MenuItem value={3}>3</MenuItem>
//                                             <MenuItem value={4}>4</MenuItem>
//                                             <MenuItem value={5}>5</MenuItem>
//                                             <MenuItem value={6}>6</MenuItem>
//                                             <MenuItem value={7}>7</MenuItem>
//                                             <MenuItem value={8}>8</MenuItem>
//                                             <MenuItem value={9}>9</MenuItem>
//                                             <MenuItem value={10}>10</MenuItem>
//                                         </Select>
//                                     </Grid>
//                                     <Grid item lg={1} md={1} sm={1} xs={1}>
//                                         <IconButton
//                                             name={item.id.toString(10)}
//                                             aria-label="delete"
//                                             onClick={handleDelete.bind(this,item.id)}
//                                         >
//                                             <DeleteIcon />
//                                         </IconButton>
//                                     </Grid>
//                                 </Grid>
//
//
//
//                             </Grid>
//                         </Grid>
//                     ))
//                 }
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//             </Grid>
//             <Grid item lg={3} md={4} sm={4} xs={4} className='cart-summary'>
//                 <Typography variant="h2">
//                     Summery
//                 </Typography>
//                 <br/>
//                 <div className='summary-subtotal'>
//                     <div className='summary-name'>
//                         Subtotal:
//                     </div>
//                     <div className='summary-price'>
//                         ${payment.subtotal}
//                     </div>
//                 </div>
//                 <br/>
//                 <div className='summary-subtotal'>
//                     <div className='summary-name'>
//                         Estimated Shipping:
//                     </div>
//                     <div className='summary-price'>
//                         ${payment.shipping}
//                     </div>
//                 </div>
//                 <br/>
//                 <div className='summary-subtotal'>
//                     <div className='summary-name'>
//                         Estimated Taxes:
//                     </div>
//                     <div className='summary-price'>
//                         ${payment.tax}
//                     </div>
//                 </div>
//                 <br/>
//                 <Divider/>
//                 <div className='summary-subtotal'>
//                     <div className='summary-name'>
//                         Total:
//                     </div>
//                     <div className='summary-price'>
//                         $0
//                     </div>
//                 </div>
//                 <br/>
//                 <Divider/>
//                 <br/>
//                 <div className='checkout-container'>
//                     <Fab
//                         variant="extended"
//                         size="large"
//                         color="secondary"
//                         aria-label="Checkout"
//                         type="submit"
//                         className='check-out-btn'
//                         component={Link} to={appConstant.paymentRoute}
//                     >
//                         Check Out
//                     </Fab>
//                 </div>
//
//             </Grid>
//         </Grid>
//
//     )
// }
//
//
// export default Cart;
//
//
//
//
//
//
//
