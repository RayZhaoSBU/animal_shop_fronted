
import {appConstant} from "../constants/constant";

export const productsReducer=(state=null, action)=>{
    switch (action.type) {
        case appConstant.GET_PRODUCTS:
            // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
            // console.log(action.payload.data)
            return action.payload.data;
        case appConstant.GET_PRODUCT:
            return action.payload.data;
        case appConstant.ADD_PRODUCT:
            return state;


        default: return state;

    }
}
