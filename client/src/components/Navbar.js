import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/authActions' 
import { LoggedInStyledNav, LoggedOutStyledNav } from './style/StyledNav';

function Navbar({ onThemeToggled, theme }) {
        const dispatch = useDispatch();
        let { isAuthenticated } = useSelector(state => state.auth);
        const [isAuth, setIsAuth] = useState(isAuthenticated)
        useEffect(() => {
            if (localStorage.getItem("jwtToken")) {
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
        },[isAuthenticated])
        return (
            <nav className="navbar">
                    {isAuth ? (

                    <LoggedInStyledNav
                        onLogout={() => {
                            dispatch(logoutUser())
                        }}
                        onToggle={onThemeToggled}
                        theme={theme}
                    />      
                    ): (
                    <LoggedOutStyledNav
                        onToggle={onThemeToggled}
                        theme={theme}
                    />
                    )}   
            </nav>
        )
}

export default withRouter(Navbar)
