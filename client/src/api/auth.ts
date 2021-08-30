import axios from "axios";

export const registerUser = async (userData: any) => {
    await axios.post(`${process.env.REACT_APP_API}/api/users/register`, userData)
}

export const loginUser = async (userData: any) => {
    return await axios.post(`${process.env.REACT_APP_API}/api/users/login`, userData)
}