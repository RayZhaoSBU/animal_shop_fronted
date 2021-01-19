import axios from "axios";
import {appConstant} from "../constants/constant";
import {API} from "../constants/environment";


export const getShipping=()=>{

    const getShippingPromise=axios.get(`${API.ROOT}/shippings`,{withCredentials:true});
    return {
        type:appConstant.GET_SHIPPING,
        payload:getShippingPromise,
    }
}
