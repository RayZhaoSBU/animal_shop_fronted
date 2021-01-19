import {combineReducers} from "redux";
import {productsReducer} from "./products.reducer";
import {authReducer} from "./auth.reducer";
import {userInfoReducer} from "./userInfo.reducer";
import {userReducer} from "./user.reducer";
import {cartReducer} from "./cart.reducer";
import {shippingReducer} from "./shipping.reducer";
import {ordersReducer} from "./orders.reducer";
import {filterReducer} from "./filter.reducer";
import {tempCartReducer} from "./tempCart.reducer";
import {reviewsReducer} from "./reviews.reducer";
import {summaryReducer} from "./summary.reducer";

export const rootReducers=combineReducers({
    products:productsReducer,
    auth:authReducer,
    user: userReducer,
    userInfo:userInfoReducer,
    cart:cartReducer,
    tempCart:tempCartReducer,
    shipping:shippingReducer,
    orders:ordersReducer,
    filter:filterReducer,
    reviews:reviewsReducer,
    summary:summaryReducer,

})