import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {setCurrentUserAction} from "./actions";
import {loginUser, registerUser} from "../../api/auth";

export const registerUserAsync = (userData : any, history : any) => {
        registerUser(userData)
        .then(() => history.push("/login"))
        .catch(err => {
            console.log(err)
        })

}
// login action
export const loginUserAsync = (userData : any) => (dispatch : any) => {
        loginUser(userData)
        .then((res) => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded : object = jwt_decode(token);
            dispatch(setCurrentUserAction(decoded));
        })
        .catch(() => {
            alert("접근 제한.")
        })
}

export const logoutUserAsync = () => (dispatch : any) => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUserAction({}));
}