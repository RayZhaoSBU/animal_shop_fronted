import React, {useEffect, useState} from 'react'
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../actions/orders.action";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const EarningPerMonth=()=>{

    const dispatch = useDispatch();
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            orders:appState.orders,
        };
    });

    useEffect(()=>{
        dispatch(getOrders());
    },[])



    const [data,setData]=useState([
            {name:"Jan", total:0,nike:0,adidas:0,"New Balance":0,jordan:0},{name:"Feb", total:0,nike:0,adidas:0,"New Balance":0,jordan:0},
            {name:"Mar", total:0,nike:0,adidas:0,"New Balance":0,jordan:0},{name:"Apr", total:0,nike:0,adidas:0,"New Balance":0,jordan:0},
            {name:"May", total:0,nike:0,adidas:0,"New Balance":0,jordan:0},{name:"Jun", total:0,nike:0,adidas:0,"New Balance":0,jordan:0},
            {name:"Jul", total:0,nike:0,adidas:0,"New Balance":0,jordan:0},{name:"Aug", total:0,nike:0,adidas:0,"New Balance":0,jordan:0},
            {name:"Sep", total:0,nike:0,adidas:0,"New Balance":0,jordan:0},{name:"Oct", total:0,nike:0,adidas:0,"New Balance":0,jordan:0},
            {name:"Nov", total:0,nike:0,adidas:0,"New Balance":0,jordan:0},{name:"Dec", total:0,nike:0,adidas:0,"New Balance":0,jordan:0}
        ]
    )

    useEffect(()=>{
        loginState.orders&&loginState.orders.forEach(order=>{
            order.purchases.forEach((orderProduct)=>{
                data[(new Date(order.date).getMonth())].total+=(+orderProduct.qty*+orderProduct.product.price);
                if(orderProduct.product.brand.toLowerCase()==='nike'){
                    data[(new Date(order.date).getMonth())].nike+=(+orderProduct.qty*+orderProduct.product.price);
                }
                if(orderProduct.product.brand.toLowerCase()==='adidas'){
                    data[(new Date(order.date).getMonth())].adidas+=(+orderProduct.qty*+orderProduct.product.price);
                }
                if(orderProduct.product.brand.toLowerCase()==='jordan'){
                    data[(new Date(order.date).getMonth())].jordan+=(+orderProduct.qty*+orderProduct.product.price);
                }
                if(orderProduct.product.brand.toLowerCase()==='new balance'){
                    data[(new Date(order.date).getMonth())]["new balance"]+=(+orderProduct.qty*+orderProduct.product.price);
                }
            })
            setData(data);

        })
        console.log(data);
    },[loginState.orders])




    return(
        <Grid container item lg={12} md={12} sm={12} xs={12}>
            <Grid item lg={12} md={12} sm={12} xs={12} style={{fontSize:35,fontFamily:"cursive"}} className='center'>
                Earning Per Month
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className='center'>
                <LineChart width={1200} height={700} data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8"  activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="nike" stroke="blue"  activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="adidas" stroke="red"  activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="jordan" stroke="green"  activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="New Balance" stroke="orange"  activeDot={{r: 8}}/>
                </LineChart>
            </Grid>
        </Grid>
    )
}

export default EarningPerMonth;















