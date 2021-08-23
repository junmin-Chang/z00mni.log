import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { NavWrapper } from './Wrapper'
import DarkModeToggle from 'react-dark-mode-toggle'
import React from "react";
const StyledNavLink = styled(NavLink)`
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid;
        border-color: ${({ theme }) => theme.navText};
        border-radius: 5px;
    }
    
`
const Title = styled.h1`
    font-size: 1.7rem;
    top: 0;
    left: 0;
    height: 50px;
`
const DarkMode = styled(DarkModeToggle)`
    height: 100%;
    vertical-align: middle;
`

export const LoggedInStyledNav : React.FC<any> = ({ onLogout, onToggle, theme }) => {
    return (
        <NavWrapper>
                <StyledNavLink to="/" activeClassName="active">
                    <Title>Zoomni.Dev</Title>
                </StyledNavLink>

                <StyledNavLink to="/posts" activeClassName="active">
                    Posts
                </StyledNavLink>

                <StyledNavLink to="write" activeClassName="active">
                    글 쓰기
                </StyledNavLink>
            
                <StyledNavLink as="div" onClick={onLogout}>
                    로그아웃
                </StyledNavLink>

                <DarkMode
                    checked={theme}
                    onChange={onToggle}
                    size={50}
                />
            
            
        </NavWrapper>
    )
}

export const LoggedOutStyledNav : React.FC<any> = ({ onToggle, theme }) => {
    return (
        <NavWrapper>
            <StyledNavLink to="/" activeClassName="active">
                <Title>Zoomni.Dev</Title>
            </StyledNavLink>

            <StyledNavLink to="/posts" activeClassName="active">
                Posts
            </StyledNavLink>

            <StyledNavLink to="/login" activeClassName="active">
                로그인
            </StyledNavLink>

            <DarkMode
                checked={theme}
                onChange={onToggle}
                size={50}
            />


        </NavWrapper>
    )
}
