import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/authActions' 
import { LoggedInStyledNav, LoggedOutStyledNav } from './style/StyledNav';
import {RootState} from "../reducers";

interface NavbarProps {
    onThemeToggled: () => void
    theme: boolean
}
const Navbar : React.FC<any> = ({ onThemeToggled, theme } : NavbarProps) => {
        const dispatch = useDispatch();
        let { isAuthenticated } = useSelector((state : RootState) => state.auth);
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
