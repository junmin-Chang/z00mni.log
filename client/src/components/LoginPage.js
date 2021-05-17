import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/user_actions'

function LoginPage({ history }) {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let body = {
            email: email,
            password: password
        }
        dispatch(loginUser(body))
            .then(res => {
                if (res.payload.loginSuccess) {
                    history.push('/');
                } else {
                    alert('로그인 실패');
                }
            })
            
    }
    return (

        <div className="container">
            <form onSubmit={onSubmit}>
                <div>
                    <input type="email" placeholder="이메일" value={email} onChange={onEmailHandler}/>
                </div>
                <div>
                    <input type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler}/>
                </div>
                <div>
                    <button className="btn btn-delete" type="submit">로그인</button>
                </div>
            </form>
        </div>

    )
    
}
export default withRouter(LoginPage);
