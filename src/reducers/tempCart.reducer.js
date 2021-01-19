import {appConstant} from "../constants/constant";

let count=1;
export const tempCartReducer = (state = [], action) => {
    switch(action.type) {
        case appConstant.ADD_TO_TEMP_CART:
            let newItem=action.payload;
            newItem.id=count;
            count++;
            console.log([...state,action.payload])
            return [...state,action.payload];
        case appConstant.GET_TEMP_CART:
            return state;
        case appConstant.CHANGE_TEMP_ITEM:
            return action.payload;
        case appConstant.DELETE_FROM_TEMP_CART:
            let index=state.findIndex(item=>{
                return +item.id===+action.payload;
            })
            state.splice(index,1);
            return state;
        default:
            return state;
    }
};
