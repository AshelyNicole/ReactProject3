import axios from "axios";

const SetAuthToken = token => {
    if (token) {
        //applying authorization token to every request when logged in
        axios.defaults.headers.common["Authorization"] = token
    } else {
        delete axios.defaults.headers.common["Authorization"]
    }
}

export default SetAuthToken;