import axios from "axios";

const baseURL = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1"

export const APIRequest = axios.create({
    baseURL: baseURL
})

