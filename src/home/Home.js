import React, {useEffect} from 'react';
import './Home.scss';
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Fab from "@material-ui/core/Fab";
import {getProducts} from "../actions/products.action";
import {appConstant} from "../constants/constant";
import p1 from "../image/cat_can1.jpg";
import p2 from "../image/dog_can1.jpg";
import p3 from "../image/cat_toy1.jpg";
import Carousel from 'react-elastic-carousel';
import {ShakeRotate} from "reshake";
import Blink from 'react-blink-text';

const Home = () => {

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    const reduxStore= useSelector(appState => {
        return {
            products:appState.products
        };
    });

    const handleDetail=()=>{
        console.log("click....................................")
    }
    const settings =  {
        autoplay: true,
        dots: true,
        duration: 300,
        wheel: true
    };


    return (
        <Grid className="Home" container>
            <Grid item lg={12} md={12} sm={12} xs={12} >
                <div className="styling-example">
                    <Carousel itemsToShow={1}>
                        <a href={`${appConstant.productsRoute}/merrick`}>
                            <img src="https://cms-www.chewy.com/contentAsset/raw-data/001a1794-fe4c-4d15-ae77-17ec32ce20a4/largeImage/Merrick-Homepage-Hero-LARGE-min.jpg"></img>
                        </a>
                        <a href={`${appConstant.productsRoute}/pharmacy`}>
                            <img src="https://cms-www.chewy.com/contentAsset/raw-data/2ff5f9eb-39b6-43b7-bab6-d5b46b7da6c4/largeImage/ProjectMartell_Homepage-Hero-LARGE_ShopNow.jpg"></img>
                        </a>
                        <a href={`${appConstant.productsRoute}/holiday`}>
                            <img src="https://cms-www.chewy.com/contentAsset/raw-data/cb00e400-e46d-4441-9492-19b0ce1f6afe/largeImage/Holiday-Shop-2020-Large-100820.jpg"></img>
                        </a>

                    </Carousel>
                </div>
            </Grid>
            <h1>
                <Blink color='crimson' text="Today's Hottest" >
                </Blink>
            </h1>
            <Grid container item lg={12} md={12} sm={12} xs={12} spacing={2} className='home-third'>
                <Grid item lg={3} md={4} sm={4} xs={4} className='third-one'>
                    <ShakeRotate>
                        <Fab
                            variant="extended"
                            size="large"
                            aria-label="AddProduct"
                            className='small-btn'
                            // component={Link} to={appConstant.paymentRoute}
                            component={Link}
                            to={`${appConstant.productsRoute}/greenies`}
                        >
                            Shop Now <ArrowForwardIosIcon style={{margin:10}}/>
                        </Fab>
                    </ShakeRotate>
                </Grid>
                <Grid item lg={3} md={4} sm={4} xs={4} className='third-second'>
                    <ShakeRotate>
                        <Fab
                            variant="extended"
                            size="large"
                            aria-label="AddProduct"
                            className='small-btn'
                            // component={Link} to={appConstant.paymentRoute}
                            component={Link}
                            to={`${appConstant.productDetailRoute}/10`}
                        >
                            Shop Now <ArrowForwardIosIcon style={{margin:10}}/>
                        </Fab>
                    </ShakeRotate>

                </Grid>
                <Grid item lg={3} md={4} sm={4} xs={4} className='third-third' >
                    <ShakeRotate>
                        <Fab
                            variant="extended"
                            size="large"
                            aria-label="AddProduct"
                            className='small-btn'
                            // component={Link} to={appConstant.paymentRoute}
                            component={Link}
                            to={`${appConstant.productDetailRoute}/11`}
                        >
                            Shop Now <ArrowForwardIosIcon style={{margin:10}}/>
                        </Fab>
                    </ShakeRotate>
                </Grid>
            </Grid>
            {/*<Grid container item className='third-title'>*/}
            {/*    Check Now!*/}
            {/*</Grid>*/}

        </Grid>

    );
};
export default Home;






