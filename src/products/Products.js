import React, {useEffect, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {getProducts} from "../actions/products.action";
import './Products.scss';
import {SideBar} from "./sidebar/SideBar";
import {Link} from "react-router-dom";
import {appConstant} from "../constants/constant";

const Products =(props)=> {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[])

    const loginState=useSelector(appState=>{
        return{
            products:appState.products,
            filters:appState.filter
        }
    })
    const [filterProducts,setFilterProducts]=useState({
        products:loginState.products
    })

    useEffect(()=>{
        // console.log(loginState.products)
        setFilterProducts({
            products:loginState.products
        });
    },[loginState.products])

    const [filters,setFilters]=useState({
        search:props.match.params.search?props.match.params.search:' ',
        pet: {
            cat:false,
            dog:false,
            fish:false,
            bird:false,
            reptile:false,
        },
        services: {
            grooming:false,
            veterinarian:false,
            training:false,
            insurance:false,
        },
        pharmacy:{
            heartworm:false,
            skin:false,
            ear:false,
            allergy:false,
            eye:false,
        },
        brand:{
            purina:false,
            greenies:false,
            petmate:false,
            orijen:false
        },
        price:{
            "0-100":false,
            '100-200':false,
            '200-300':false,
            '300-400':false,
            '400-500':false,
            'above500':false,
        },
    })


    useEffect(()=>{
        // console.log(filters);
        // console.log(filterProducts.products);
        // console.log(loginState.products);
        let bestSeller=false;
        let newRelease=true;
        let colors=[];
        if(filterProducts.products){
            let newFilterProducts=loginState.products.filter((product)=>{
                if(!filters.search||filters.search===' '){
                    return product;
                }
                if(filters.search.toLowerCase()==='best seller'){
                    bestSeller=true;
                    return product;
                }else if(filters.search.toLowerCase()==='new release'){
                    newRelease=true;
                    return product;
                }

                let searchArr=filters.search.split(' ');
                let count=0;
                console.log("products 104, ", product)
                for(let i=0;i<searchArr.length;i++){
                    if(product.tags.toLowerCase().indexOf(searchArr[i].toLowerCase())>-1){
                        count++;
                    }
                }
                if(count===searchArr.length){
                    return product;
                }
                // if(product.tags.toLowerCase().indexOf(filters.search.trim().toLowerCase())>-1){
                //     return product;
                // }
            })
                .filter(item=>{
                    if(colors.indexOf(item.name+item.color)===-1){
                        colors.push(item.name+item.color);
                        return item;
                    }
                })
                .filter(product=>{
                    let count=0;
                    for(const key in filters.pet){
                        if(!filters.pet[key]){
                            count++;
                        }
                    }
                    if(count!==Object.keys(filters.pet).length){
                        for(const key in filters.pet){
                            if(filters.pet[key]){
                                if(product.tags.toLowerCase().indexOf(key.toLowerCase())>-1){
                                    return product;
                                }
                            }
                        }
                    }else{
                        return product;
                    }

            })//filter for pet
                .filter(product => {
                    let count=0;
                    for(const key in filters.brand){
                        if(!filters.brand[key]){
                            count++;
                        }
                    }
                    if(count!==Object.keys(filters.brand).length){
                        for(const key in filters.brand){
                            if(filters.brand[key]){
                                if(product.tags.toLowerCase().indexOf(key.toLowerCase())>-1){
                                    return product;
                                }
                            }
                        }
                    }else{
                        return product;
                    }
                })//filter for brand
                .filter(product=>{
                    let count=0;
                    for(const key in filters.pharmacy){
                        if(!filters.pharmacy[key]){
                            count++;
                        }
                    }
                    if(count!==Object.keys(filters.pharmacy).length){
                        for(const key in filters.pharmacy){
                            if(filters.pharmacy[key]){
                                if(product.tags.toLowerCase().indexOf(key.toLowerCase())>-1){
                                    return product;
                                }
                            }
                        }
                    }else{
                        return product;
                    }
                })//filter for pharmacy
                .filter(product=>{
                    let count=0;
                    for(const key in filters.services){
                        if(!filters.services[key]){
                            count++;
                        }
                    }
                    if(count!==Object.keys(filters.services).length){
                        for(const key in filters.services){
                            if(filters.services[key]){
                                if(product.tags.toLowerCase().indexOf(key.toLowerCase())>-1){
                                    return product;
                                }
                            }
                        }
                    }else{
                        return product;
                    }

                })//filter for services
                .filter(product=>{
                    let count=0;
                    for(const key in filters.price){
                        if(!filters.price[key]){
                            count++;
                        }
                    }
                    if(count!==Object.keys(filters.price).length){
                        if(filters.price["0-5"]&&+product.price>=0&&+product.price<=5
                            ||filters.price["5-20"]&&+product.price>=5&&+product.price<=20
                            ||filters.price["20-50"]&&+product.price>=20&&+product.price<=50
                            ||filters.price["50-100"]&&+product.price>=50&&+product.price<=100
                            ||filters.price["100-500"]&&+product.price>=100&&+product.price<=500
                            ||filters.price["above500"]&&+product.price>=500
                            ||filters.price[""]&&+product.price>=0
                        ){
                            return product;
                        }
                    }else{
                        return product;
                    }

                })//filter for price
                if(bestSeller){
                    newFilterProducts.sort((a,b)=>{
                        return a.soldNumber-b.soldNumber;
                    })
                }
                if(newRelease){
                    newFilterProducts.sort((a,b)=>{
                        return a.releaseDate-b.releaseDate;
                    })
                }

            // console.log(newFilterProducts)
            setFilterProducts({products: newFilterProducts});

        }

    },[filters])

    useEffect(()=>{
        // console.log(props.match.params.search)
        setFilters({
            ...filters,
            search: props.match.params.search,
        })
    },[props.match.params.search,loginState.products])



        return(
            <Grid container spacing={2} className="product-main">
                <Grid item lg={2} md={2} sm={false} xs={false}>
                    <Paper className="product-sideBar">
                        <SideBar filters={filters} setFilters={setFilters}/>
                    </Paper>
                </Grid>
                <Grid item container spacing={2} lg={9} md={10} sm={12} xs={12} className="Products">
                    {   filterProducts.products?
                        filterProducts.products.map(p => (
                            <Grid item lg={3} md={4} sm={6} xs={12} key={p.id}>
                                <Link to={`${appConstant.productDetailRoute}/${p.id}`}>
                                    <Paper className="product-wrapper">
                                        <img src={p.image1} alt={p.name} className="product-image"/>
                                        <div className="product-overlay"/>
                                        <div className="product-info">
                                            {/*<h3 style={ {margin: 0} }>{p.name}</h3>*/}
                                            <div>{p.name}</div>
                                            <div>${p.price}</div>
                                        </div>
                                    </Paper>
                                </Link>
                            </Grid>
                        ))
                        :
                        <h3>No Product Data</h3>
                    }
                </Grid>
            </Grid>
        )

}
export default Products;

