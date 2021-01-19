import {appConstant} from "../constants/constant";


export const shippingReducer=(state=null, action)=>{
    switch (action.type) {
        case appConstant.GET_SHIPPING:
            return action.payload.data;



        default: return state;

    }
}
