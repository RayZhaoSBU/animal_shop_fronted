import {appConstant} from "../constants/constant";


export const userInfoReducer = (state = null, action) => {
    switch(action.type) {
        case appConstant.ADD_USER_INFO:
            // console.log('this is in user info reducer add user info')
            // console.log(action.payload);
            return state;
        case appConstant.GET_USER_INFO:
            console.log('this is in user info reducer get user info')
            console.log(action.payload);
            return action.payload.data;
        default:
            return state;
    }
};
