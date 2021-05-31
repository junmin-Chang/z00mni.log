import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/authActions' 

function Navbar({ onThemeToggled, theme, auth }) {
        const dispatch = useDispatch();
        let { isAuthenticated } = useSelector(state => state.auth);
        const [isAuth, setIsAuth] = useState(isAuthenticated)
        useEffect(() => {
            if (localStorage.getItem("jwtToken")) {
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
        },[auth])
        return (
            <nav className="navbar">
                    {isAuth ? (
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
                          
                               <NavLink to='/write' activeClassName="links-active">
                                   글 쓰기
                               </NavLink>
                       </div>

                       <div className="links" onClick={() => {
                           dispatch(logoutUser())
                           window.location.reload(true)
                       }} style={{
                           cursor: "pointer"
                           
                       }}>
                            로그아웃
                       </div>
                        
                         <div>
                             <DarkModeToggle onChange={onThemeToggled}
                             size={50}
                             checked={theme}
                             className="dark-mode"/>
                         </div>
                         
     
                     </div>
                     
                   
                    ): (
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
                         
                              <NavLink to='/login' activeClassName="links-active">
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
                    
                  
                    )}
                   
            </nav>
        )
    
   
    
}

export default withRouter(Navbar)
