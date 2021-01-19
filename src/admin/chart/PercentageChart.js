import React, {useEffect, useState} from "react";
import {CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Sector, Tooltip, XAxis, YAxis} from "recharts";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../actions/orders.action";
import './Chart.scss'

const PercentageChart=()=>{

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


    const [activeIndex,setActiveIndex]=useState(0);

    const onPieEnter=(data, index)=>{
        setActiveIndex(index);
    }

    const [data,setData]=useState([
        {name: 'Nike', value: 0},
        {name: 'adidas', value: 0},
        {name: 'Jordan', value: 0},
        {name: 'New Balance', value: 0}
        ]
    )

    useEffect(()=>{
        loginState.orders&&loginState.orders.forEach(order=>{
            order.purchases.forEach((orderProduct)=>{
                if(orderProduct.product.brand.toLowerCase()==='nike'){
                    data[0].value+=(+orderProduct.qty*+orderProduct.product.price);
                }
                if(orderProduct.product.brand.toLowerCase()==='adidas'){
                    data[1].value+=(+orderProduct.qty*+orderProduct.product.price);
                }
                if(orderProduct.product.brand.toLowerCase()==='jordan'){
                    data[2].value+=(+orderProduct.qty*+orderProduct.product.price);
                }
                if(orderProduct.product.brand.toLowerCase()==='new balance'){
                    data[3].value+=(+orderProduct.qty*+orderProduct.product.price);
                }
            })
            setData(data);

        })
        console.log(data);
    },[loginState.orders])


    return(

        <Grid container item lg={12} md={12} sm={12} xs={12} >
            <Grid item lg={12} md={12} sm={12} xs={12} style={{fontSize:35,fontFamily:"cursive"}} className='center'>
                Total Earning Of Each Brand
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} className='center'>
                <PieChart width={800} height={700}>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={data}
                        cx={400}
                        cy={400}
                        innerRadius={100}
                        outerRadius={200}
                        fill="#8884d8"
                        onMouseEnter={onPieEnter}
                    />
                </PieChart>
            </Grid>
        </Grid>

    )

}
export default PercentageChart;



const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`TOTAL ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};