
import {appConstant} from "../constants/constant";
import axios from 'axios'
import env, {API} from '../constants/environment'

// const API='http://localhost:8080';
export const getProducts=()=>{
    const getProductPromise=axios.get(`${API.ROOT}/products`,{withCredentials:true});
    // const getProductPromise=axios.get(`http://localhost:8080/products`,{withCredentials:true});
    return {
        type:appConstant.GET_PRODUCTS,
        payload:getProductPromise,
    }
}

export const addProduct=(newProduct)=>{
    const addProductPromise=axios.post(`${API.ROOT}/products`,newProduct,{withCredentials:true});
    return {
        type:appConstant.ADD_PRODUCT,
        payload:addProductPromise,
    }
}

