import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";

function Navbar({ onThemeToggled, theme }) {
    

    return (

        <nav className="navbar">
                <div className="nav-container">
                    <div className="brand">
                        <NavLink to='/'>
                            <h1 className="blog-title">Zoomni.Dev💻</h1>
                        </NavLink>
                    </div>

                    <div className="links">
                        <NavLink to='/posts'>
                            Posts
                        </NavLink>
                    </div>

                    <div className="links">
                        <NavLink to='/profile'>
                            About
                        </NavLink>
                    </div>

                    <div className="links write-post">
                        <NavLink to="/write">
                            글 작성
                        </NavLink>
                    </div>
                    <div>
                        <DarkModeToggle onChange={onThemeToggled}
                        size={80}
                        checked={theme}
                        className="dark-mode"/>
                    </div>
                    

                </div>
            </nav>
    )
    
}
export default Navbar;
