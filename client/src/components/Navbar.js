import React, { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authActions' 
import { compose } from 'redux';
function Navbar({ onThemeToggled, theme, auth }) {
        const [isAuth, setIsAuth] = useState(auth.isAuthenticated)
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
                          
                               <NavLink to='/write'>
                                   글 쓰기
                               </NavLink>
                       </div>

                       <div className="links" onClick={() => {
                           localStorage.removeItem("jwtToken");
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
                    
                  
                    )}
                   
            </nav>
        )
    
   
    
}
const mapStateToProps = state => ({
    auth: state.auth,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {logoutUser})
  )(Navbar);