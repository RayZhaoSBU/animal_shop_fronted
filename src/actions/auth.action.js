import {appConstant} from "../constants/constant";
import axios from "axios";
import {API} from "../constants/environment";
export const logout = () => {
    // const logoutPromise = fetch('http://localhost:8080/logout', {credentials: 'include'})
    const logoutPromise = fetch(`${API.ROOT}/logout`, {credentials: 'include'})
        .then(res => res.json())
        .catch();
    return {
        type: appConstant.LOGOUT,
        payload: logoutPromise
    };
};

export const login = (user, success, failure) => {
    // we can use a library called qs   qs.stringify(user) to get a urlencoded form data
    const userFormData = new FormData();
    userFormData.append('username', user.username);
    userFormData.append('password', user.password);
    // ES6 fetch API, async, await
    const loginPromise = fetch(
        `${API.ROOT}/login`,
        {
            method: 'POST',
            body: userFormData,
            credentials: 'include'
        }
        )
            .then(res => res.json())
            .then(res => {
                res.success ?
                    typeof success === 'function' && success() :
                    typeof failure === 'function' && failure();
                return res;
            })
            .catch(err => {
                typeof failure === 'function' && failure(err);
                return err;
            })
    ;
    console.log("log in success or fail promise")
    console.log(loginPromise)
    return {
        type: appConstant.LOGIN,
        payload: loginPromise
    };
};

