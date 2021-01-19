import {appConstant} from "../constants/constant";


export const cartReducer = (state = null, action) => {
    switch(action.type) {
        case appConstant.ADD_TO_CART:
            return state;
        case appConstant.GET_CART:
            return action.payload.data;
        case appConstant.UPDATE_CART:
            return state;
        case appConstant.DELETE_FROM_CART:
            let index=state.findIndex(item=>{
                return item.id===action.payload;
            })
            state.splice(index,1);
            return state;
        default:
            return state;
    }
};
