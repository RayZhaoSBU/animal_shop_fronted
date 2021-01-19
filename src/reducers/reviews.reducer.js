import {appConstant} from "../constants/constant";



export const reviewsReducer = (state = null, action) => {
    switch(action.type) {
        case appConstant.ADD_REVIEW:
            return state;
        case appConstant.GET_REVIEW_BY_PRODUCT_ID:
            console.log("review reducer, ", action.payload.data);
            return action.payload.data;
        case appConstant.GET_REVIEWS:
            return action.payload.data;
        default:
            return state;
    }
};
