import axios from "axios";
import {appConstant} from "../constants/constant";


export const addToTempCart=(newOrderProduct)=>{
    return {
        type:appConstant.ADD_TO_TEMP_CART,
        payload: newOrderProduct
    }
}
export const changeTempItem=(newState)=>{
    return{
        type:appConstant.CHANGE_TEMP_ITEM,
        payload:newState
    }
}

export const deleteFromTempCart=(id)=>{
    return {
        type:appConstant.DELETE_FROM_TEMP_CART,
        payload: id
    }
}

export const getTempCart=()=>{
    return {
        type:appConstant.GET_TEMP_CART,
        payload:null,
    }

}
