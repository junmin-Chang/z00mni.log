import React from 'react';
import { NavLink , withRouter } from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";

function Navbar({ onThemeToggled, theme, history }) {

    
   
        return (
            <nav className="navbar">
                <div className="nav-container">
                    <div className="brand">
                        <NavLink to='/'>
                            <h1 className="blog-title">Zoomni.Dev</h1>
                        </NavLink>
                    </div>

                    <div className="links">
                        <NavLink to='/posts' activeClassName="links-active">
                            Posts
                        </NavLink>
                    </div>

                  <div className="links">
                     
                          <NavLink to='/login'>
                              로그인
                          </NavLink>
                  </div>

                  <div className="links">
                    <NavLink to="/register">
                        회원가입
                    </NavLink>
                  </div>

                   
                    <div>
                        <DarkModeToggle onChange={onThemeToggled}
                        size={50}
                        checked={theme}
                        className="dark-mode"/>
                    </div>
                    

                </div>
            </nav>
        )
    
   
    
}
export default Navbar;
