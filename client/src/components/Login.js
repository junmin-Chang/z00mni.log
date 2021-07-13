import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../actions/authActions'
import { withRouter } from 'react-router-dom'
import StyledLogin from './style/StyledLogin';
import { Helmet } from 'react-helmet'
function Login({ history }) {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })
    const { email, password } = loginInfo;

    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({
            ...loginInfo,
            [name] : value
        })
        console.log(email);
        console.log(password)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }
        console.log(email)
        console.log(password)
        dispatch(loginUser(userData));
    }
    useEffect(() => {
        if (auth.isAuthenticated) {
            history.push('/');
        }
    })
    return (
        <>
            <Helmet>
                <title>로그인</title>
            </Helmet>
            <StyledLogin
            email={email}
            password={password}
            onChange={onChange}
            onSubmit={onSubmit}/>
        </>
    )
    
}


export default withRouter(Login);
