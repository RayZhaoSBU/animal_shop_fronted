import React from "react";
import axios from "axios";
import {appConstant} from "../constants/constant";

export const addToFilter=(newFilter)=>{

    return {
        type:appConstant.ADD_TO_FILTER,
        payload: newFilter
    }
}

export const getFilter=()=>{

    return {
        type:appConstant.GET_FILTER,
        payload: null
    }
}

export const deleteFilter=(oldItem)=>{
     return{
         type:appConstant.DELETE_ONE_FILTER,
         payload:oldItem
     }
}


