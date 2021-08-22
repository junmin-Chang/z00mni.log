import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../actions/authActions'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import {Wrapper} from "./style/Wrapper";
const Input = styled.input`
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    margin: 5px 0;
    opacity: 0.85;
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none;
    &:hover {
        opacity: 1;
    }
    border: 2px solid rgb(121, 115, 115);

`
const WrapperForm = styled.form`
    margin-top: 5rem;
    background-color: #fff;
    padding: 3rem;
    border-radius: 3rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
`
const Button = styled(Wrapper)`
    width: 100%;
    background-color: #2dc4ff;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #2087af;
    }
    text-align: center;
    font-size: 1em;
    margin-top: 0.5em;
`

const Text = styled.h1<{size?: string}>`
    text-align: center;
    font-size : ${props => props.size };
    font-style: bold;
`
interface Props {
    email: string
    password: string
    onChange : any
    onSubmit : any
}
function StyledLogin({ email, password, onChange, onSubmit }: Props)  {
    return (
        <>
            <Wrapper>
                <Text>Zoomni.Dev</Text>
                <Text size="1.5em">로그인 하기</Text>
                <WrapperForm noValidate onSubmit={onSubmit}>
                    <Input placeholder="이메일" type="email" name="email" value={email} onChange={onChange}/>
                    <Input placeholder="비밀번호" type="password" name="password" value={password} onChange={onChange}/>
                    <Button as="button">로그인</Button>
                </WrapperForm>
            </Wrapper>
        </>
    )
}


const Login : React.FC<RouteComponentProps> = ({history}) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })
    const { email, password } = loginInfo;

    const onChange = (e : any) => {
        const { name, value } = e.target;
        setLoginInfo({
            ...loginInfo,
            [name] : value
        })
        console.log(email);
        console.log(password)
    }
    const onSubmit = (e : any) => {
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
            history?.push('/');
        }
    })
    return (
        <>
            <Helmet>
                <title>로그인</title>
            </Helmet>
            <StyledLogin email={email} onChange={onChange} onSubmit={onSubmit} password={password}/>
        </>
    )
    
}


export default withRouter(Login);
