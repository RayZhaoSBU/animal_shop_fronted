import {appConstant} from "../constants/constant";


export const ordersReducer = (state = null, action) => {
    switch(action.type) {
        case appConstant.GET_ORDERS:
            return  action.payload.data;
        case appConstant.ADD_ORDER:
            return state;
        case appConstant.GET_USER_ORDERS:
            return action.payload.data;
        default:
            return state;
    }
};
