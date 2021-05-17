import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector } from 'react-redux';
import axios from 'axios';


function Navbar({ onThemeToggled, theme, history }) {
    const [sign, setSign] = useState(true);
    const onClick = () => {
        setSign((prev) => !prev);
    }    
    const user = useSelector(state => state.user);

    const onClickLogout = () => {
        axios.get('/logout')
            .then(res => {
                if (res.data.success) {
                    history.push('/signin');
                } else {
                    alert('로그아웃 실패');
                }
            })
    }
    if (user.userData && !user.userData.isAuth) {
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
                      {sign? (
                          <NavLink to='/signin'>
                              <button onClick={onClick}>로그인</button>
                          </NavLink>
                      ): (
                          <NavLink to='/signup'>
                              <button onClick={onClick}>회원가입</button>
                          </NavLink>
                      )}

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
    } else {
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
    
                      
    
                        <div className="links write-post">
                            <NavLink to="/write" activeClassName="links-active">
                                글 작성
                            </NavLink>
                        </div>
                        <div>
                            <DarkModeToggle onChange={onThemeToggled}
                            size={50}
                            checked={theme}
                            className="dark-mode"/>
                        </div>

                        <div className="links">
                            <button onClick={onClickLogout}>
                                로그아웃
                            </button>
                        </div>
                        
    
                    </div>
                </nav>
        )
    }
   
    
}
export default Navbar;
