import React from 'react';
import { NavLink , withRouter } from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector } from 'react-redux';


function Navbar({ onThemeToggled, theme, history }) {

    
    const user = useSelector(state => state.user);
  

    // const onClickLogout = () => {
    //     axios.get('https://zoomni-log.herokuapp.com/logout')
    //         .then(res => {
    //             if (res.data.success) {
    //                 history.push('/login');
    //             } else {
    //                 alert('로그아웃 실패');
    //             }
    //         })
    // }
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
                     
                          <NavLink to='/login'>
                              로그인
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
                            <NavLink to="/login">
                                로그인
                            </NavLink>
                        </div>
                        
    
                    </div>
                </nav>
        )
    }
   
    
}
export default withRouter(Navbar);
