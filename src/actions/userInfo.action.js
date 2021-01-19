import React from "react";
import axios from "axios";
import {appConstant} from "../constants/constant";
import {API} from "../constants/environment";


export const addUserInfo=(newUserInfo,loginState)=>{
    const userInfo={
        id:newUserInfo.id                       ? newUserInfo.id                 :0,
        firstName:newUserInfo.firstName         ? newUserInfo.firstName         : '',
        lastName:newUserInfo.lastName           ? newUserInfo.lastName          : '',
        phoneNumber:newUserInfo.phoneNumber     ? newUserInfo.phoneNumber       :'',
        email:newUserInfo.email                 ? newUserInfo.email             :'',
        address:newUserInfo.address             ? newUserInfo.address           :'',
        city:newUserInfo.city                   ? newUserInfo.city              :'',
        country:newUserInfo.country             ? newUserInfo.country           :'',
        zip:newUserInfo.zip                     ? newUserInfo.zip               :'',
        state:newUserInfo.state                 ? newUserInfo.state             :'',
        user:loginState.user                    ? loginState.user               :null
    }
    console.log('***************************************************')
    console.log(userInfo);
    const addUserInfoPromise=axios.put(`${API.ROOT}/user-details`, userInfo ,{withCredentials:true});
    // console.log("this is in add user info")
    // console.log(addUserInfoPromise)
    return {
        type:appConstant.ADD_USER_INFO,
        payload: addUserInfoPromise
    }
}

export const getUserInfo=(id)=>{

    const getUserInfoPromise=axios.get(`${API.ROOT}/user-details/${id}`,{withCredentials:true});
    console.log("this is in user info action")
    console.log(getUserInfoPromise);
    return {
        type:appConstant.GET_USER_INFO,
        payload:getUserInfoPromise,
    }

}

