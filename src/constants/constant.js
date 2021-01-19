
export const appConstant={
    //route
    loginRoute:'/login',
    homeRoute:'/home',
    productsRoute:'/products',
    productDetailRoute:'/productDetail',
    accountRoute:'/account',
    accountSettingRoute:'/account/setting',
    accountOrderRoute:'/account/orders',
    orderDetail:'/account/orderDetail',
    cartRoute:'/cart',
    tempCartRoute:'/tempCart',
    paymentRoute:'/payment',
    adminRoute:'/admin',
    dashboardRoute:'/admin/dashboard',
    addProductRoute:'/admin/addProduct',
    editProductRoute:'/admin/editProduct',
    ordersRoute:'/admin/orders',
    adminOrderDetailRoute:'/admin/orderDetail/',
    summaryRoute:'/summary',
    addAdminRoute:'/admin/addAdmin',
    soldPerMonthRoute:'/admin/soldPerMonth',
    earningPerMonth:'/admin/earning',
    pieChart:'/admin/pie',


    //action
    GET_PRODUCTS:'GET_PRODUCTS',
    GET_PRODUCT:'GET_PRODUCT',
    ADD_PRODUCT:'ADD_PRODUCT',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    CHECK_LOGIN: 'CHECK_LOGIN',
    REGISTER:'REGISTER',
    ADD_USER_INFO:'ADD_USER_INFO',
    GET_USER_INFO:'GET_USER_INFO',
    GET_ORDERS:'GET_ORDERS',
    GET_USER_ORDERS:'GET_USER_ORDERS',
    ADD_ORDER:'ADD_ORDER',
    GET_CART:'GET_CART',
    UPDATE_CART:'UPDATE_CART',
    GET_TEMP_CART:'GET_TEMP_CART',
    CHANGE_TEMP_ITEM:'CHANGE_TEMP_ITEM',
    ADD_TO_CART:'ADD_TO_CART',
    ADD_TO_TEMP_CART:'ADD_TO_TEMP_CART',
    DELETE_FROM_CART:'DELETE_FROM_CART',
    DELETE_FROM_TEMP_CART:'DELETE_FROM_TEMP_CART',
    GET_SHIPPING:'GET_SHIPPING',
    ADD_TO_FILTER:'ADD_TO_FILTER',
    GET_FILTER:'GET_FILTER',
    DELETE_ONE_FILTER:'DELETE_ONE_FILTER',
    GET_REVIEWS:'GET_REVIEWS',
    ADD_REVIEW:'ADD_REVIEW',
    GET_REVIEW_BY_PRODUCT_ID:'GET_REVIEW_BY_PRODUCT_ID',
    CHANGE_PASSWORD:'CHANGE_PASSWORD',
    FORGOT_PASSWORD:'FORGOT_PASSWORD',
    SHIP_ORDER: 'SHIP_ORDER',
    ADD_ADMIN:'ADD_ADMIN',
    SAVE_SUMMARY:'SAVE_SUMMARY',



    //message
    LOGIN_SUCCESS_MESSAGE:'Login Success',
    LOGIN_FAILURE_MESSAGE:'Login Failed,please try again',


    //product fields
    REGISTER_FIELD:[
        {
            name:'username',
            displayName:'Username',
            type:'text'
        },
        {
            name:'password',
            displayName:'Password',
            type:'text'
        },
        {
            name:'confirmPassword',
            displayName:'Confirm your Password',
            type:'number'
        },
        {
            name:'phone',
            displayName:'Phone Number',
            type:'number'
        },
        {
            name:'email',
            displayName:'Email',
            type:'email'
        },
    ]
}
