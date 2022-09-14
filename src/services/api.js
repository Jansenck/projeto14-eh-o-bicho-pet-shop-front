import axios from "axios";

const BASE_URL = "http://localhost:5000";

function postSignIn(data) {
    const promise = axios.post(`${BASE_URL}/signin`, data)
    return promise
}

export {postSignIn}