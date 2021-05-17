import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/user_actions';


function RegisterPage({ history }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    }
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return alert('비밀번호가 서로 다름');
        }
        let body = {
            email: email,
            name: name,
            password: password
        }

        dispatch(registerUser(body))
            .then(res => {
                if (res.payload.success) {
                    history.push('/signin')
                } else {
                    alert('회원가입 실패');
                }
            })
    }
    return (

        <div className="container">
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" name="name" placeholder="이름" value={name} onChange={onNameHandler}/>
                </div>
                <div>
                    <input type="email" name="email" placeholder="이메일" value={email} onChange={onEmailHandler}/>
                </div>
                <div>
                    <input type="password" name="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler}/>
                </div>
                <div>
                    <input type="password" name="confirmPassword" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler}/>
                </div>
                <div>
                    <button className="btn btn-delete" type="submit">회원가입</button>
                </div>
            </form>
        </div>

    )
    
}
export default withRouter(RegisterPage);
