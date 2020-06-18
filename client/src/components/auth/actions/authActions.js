import axios from "axios";
import SetAuthToken from "../util/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING} from "./types";

//Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post("/api/users/", userData)
        .then(res => history.push("/login")) //once registration complete/successful redirect to login page
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}

//Login: Retrieving User Token
export const loginUser = userData => dispatch => {
    axios
        .post("/api/users/login", userData)
        .then(res => {
            //saving to local storage and setting token to localStorage
            const { token } = res.data
            localStorage.setItem("jwtToken", token)
            //set token to Auth header
            SetAuthToken(token)
            //decode token to get user data
            const decoded = jwt_decode(token)
            //set current user
            dispatch(setCurrentUser(decoded))
        })
        .catch(err=>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )

}

//Set Logged In User 
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//User Loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    }
}

//Logout
export const logoutUser = () => dispatch => {
    //remove token from localStorage
    localStorage.removeItem("jwtToken")
    //remove auth header for future requests
    SetAuthToken(false)
    //set current object to empty object 
    dispatch(setCurrentUser({}))
}

