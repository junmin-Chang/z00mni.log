import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../actions/authActions'
import { withRouter } from 'react-router-dom'
import './style/Login.css'
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
            window.location.reload(true);
            history.push('/');
        }
    })
    return (
        <div className="container container-login">
        <h1 className="login title-login">Zoomni.Dev</h1>
        <h3 className="login">로그인 하기</h3>
        <div className="container-form">
            <form noValidate onSubmit={onSubmit}>
                <input placeholder="이메일" className="input-login" type="email" value={email} name="email" onChange={onChange}/>
                <input placeholder="비밀번호" className="input-login" type="password" value={password} name="password" onChange={onChange}/>
                <button className="button-login" type="submit">로그인</button>
            </form>
        </div>
       
    </div>

    )
    
}


export default withRouter(Login);
