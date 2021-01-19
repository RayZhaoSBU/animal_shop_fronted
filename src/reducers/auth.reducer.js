import {appConstant} from "../constants/constant";


export const authReducer = (state = null, action) => {
    switch(action.type) {
        case appConstant.LOGIN:
            return action.payload.success?action.payload:null;
        case appConstant.LOGOUT:
            console.log('this is logout reducer')
            console.log(action.payload)
            return action.payload.success?action.payload:null;
        default:
            return state;
    }
};
